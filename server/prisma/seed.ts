
import { PrismaClient } from '@prisma/client';
import * as bcrypt from 'bcrypt';

const prisma = new PrismaClient();

async function main() {
    console.log('Start seeding ...');

    const password = 'password123';
    const hashedPassword = await bcrypt.hash(password, 10);

    // 1. Create Users
    const user1 = await prisma.user.upsert({
        where: { email: 'aditi@example.com' },
        update: {},
        create: {
            email: 'aditi@example.com',
            passwordHash: hashedPassword,
            role: 'USER',
            wedding: {
                create: {
                    name: "Aditi & Rahul's Wedding",
                    date: new Date('2026-12-15'),
                    budget: 5000000,
                    location: 'Udaipur',
                    ceremonies: {
                        create: [
                            {
                                type: 'HALDI',
                                name: 'Haldi Ceremony',
                                date: new Date('2026-12-14T10:00:00'),
                                location: 'Oberoi Udaivilas, Lake Side',
                            },
                            {
                                type: 'SANGEET',
                                name: 'Sangeet Night',
                                date: new Date('2026-12-14T19:00:00'),
                                location: 'The Leela Palace Ballroom',
                            },
                            {
                                type: 'WEDDING',
                                name: 'Main Wedding',
                                date: new Date('2026-12-15T11:00:00'),
                                location: 'City Palace Courtyard',
                            },
                        ],
                    },
                    guests: {
                        create: [
                            { name: 'Amit Shah', status: 'CONFIRMED', group: 'Family' },
                            { name: 'Priya Kapoor', status: 'INVITED', group: 'Friends' },
                            { name: 'Raj Malhotra', status: 'MAYBE', group: 'Colleagues' },
                        ],
                    },
                    budgetItems: {
                        create: [
                            { category: 'Venue', item: 'Oberoi Udaivilas', estimatedCost: 2000000, actualCost: 2100000, paidAmount: 1000000 },
                            { category: 'Catering', item: 'Food & Drinks', estimatedCost: 1500000 },
                            { category: 'Decor', item: 'Floral Arrangements', estimatedCost: 500000, actualCost: 450000 },
                        ],
                    },
                },
            },
        },
    });

    const vendor1 = await prisma.user.upsert({
        where: { email: 'recall@pictures.com' },
        update: {},
        create: {
            email: 'recall@pictures.com',
            passwordHash: hashedPassword,
            role: 'VENDOR',
            vendorProfile: {
                create: {
                    businessName: 'Recall Pictures',
                    description: 'Capturing moments that last a lifetime. Award-winning wedding photography.',
                    city: 'Mumbai',
                    rating: 4.8,
                    services: {
                        create: [
                            { name: 'Wedding Photography', price: 150000, priceUnit: 'per day' },
                            { name: 'Pre-wedding Shoot', price: 50000, priceUnit: 'per session' }
                        ]
                    }
                }
            }
        },
    });

    const vendor2 = await prisma.user.upsert({
        where: { email: 'decor@wdc.com' },
        update: {},
        create: {
            email: 'decor@wdc.com',
            passwordHash: hashedPassword,
            role: 'VENDOR',
            vendorProfile: {
                create: {
                    businessName: 'The Wedding Design Company',
                    description: 'Transforming spaces into dreams.',
                    city: 'Delhi',
                    rating: 4.9,
                    services: {
                        create: [
                            { name: 'Full Venue Decor', price: 500000, priceUnit: 'starting' }
                        ]
                    }
                }
            }
        },
    });

    console.log('Seeding finished.');
}

main()
    .catch((e) => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
