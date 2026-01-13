import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { Prisma } from '@prisma/client';

@Injectable()
export class AuthService {
    constructor(
        private usersService: UsersService,
        private jwtService: JwtService,
    ) { }

    async validateUser(email: string, pass: string): Promise<any> {
        const user = await this.usersService.findOne(email);
        if (user && user.passwordHash) {
            const isMatch = await bcrypt.compare(pass, user.passwordHash);
            if (isMatch) {
                // eslint-disable-next-line @typescript-eslint/no-unused-vars
                const { passwordHash, ...result } = user;
                return result;
            }
        }
        return null;
    }

    async login(user: any) {
        const payload = { email: user.email, sub: user.id, role: user.role };
        return {
            access_token: this.jwtService.sign(payload),
            user: {
                id: user.id,
                email: user.email,
                role: user.role,
                name: user.name, // Assuming name is added later or handle missing
            }
        };
    }

    async register(data: any) { // data type should be refined
        // Check if user exists
        const existingUser = await this.usersService.findOne(data.email);
        if (existingUser) {
            throw new UnauthorizedException('User already exists');
        }

        const salt = await bcrypt.genSalt();
        const hash = await bcrypt.hash(data.password, salt);

        const newUser = await this.usersService.create({
            email: data.email,
            passwordHash: hash,
            role: data.role || 'USER',
            // phone, etc.
        });

        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const { passwordHash, ...result } = newUser;
        return result;
    }
}
