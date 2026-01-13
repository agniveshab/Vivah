
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '../../components/ui/Button';
import { Input } from '../../components/ui/Input';
import { Link, useNavigate } from 'react-router-dom';
import { useAuthStore } from '../../store/useAuthStore';

export const SignupPage = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [role, setRole] = useState<'USER' | 'VENDOR'>('USER');

    const login = useAuthStore((state) => state.login);
    const navigate = useNavigate();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Signup', { name, email, password, role });
        // Mock Signup & Login
        login(email, role);
        navigate('/dashboard');
    };

    return (
        <div className="auth-page-container" style={{
            minHeight: '100vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            background: 'var(--color-bg-subtle)'
        }}>
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                style={{
                    background: 'var(--color-bg-paper)',
                    padding: '40px',
                    borderRadius: 'var(--radius-lg)',
                    boxShadow: 'var(--shadow-gold)',
                    width: '100%',
                    maxWidth: '450px'
                }}
            >
                <h2 style={{ textAlign: 'center', marginBottom: '8px', color: 'var(--color-primary)' }}>Begin Your Journey</h2>
                <p style={{ textAlign: 'center', marginBottom: '24px', color: 'var(--color-text-muted)' }}>
                    Create an account to start planning.
                </p>

                <div style={{ display: 'flex', gap: '8px', marginBottom: '24px', background: 'var(--color-bg-subtle)', padding: '4px', borderRadius: 'var(--radius-md)' }}>
                    <button
                        type="button"
                        onClick={() => setRole('USER')}
                        style={{
                            flex: 1,
                            padding: '8px',
                            borderRadius: 'var(--radius-sm)',
                            border: 'none',
                            background: role === 'USER' ? 'var(--color-bg-paper)' : 'transparent',
                            color: role === 'USER' ? 'var(--color-primary)' : 'var(--color-text-muted)',
                            fontWeight: role === 'USER' ? 600 : 400,
                            boxShadow: role === 'USER' ? 'var(--shadow-sm)' : 'none',
                            transition: 'all 0.2s'
                        }}
                    >
                        I'm Planning a Wedding
                    </button>
                    <button
                        type="button"
                        onClick={() => setRole('VENDOR')}
                        style={{
                            flex: 1,
                            padding: '8px',
                            borderRadius: 'var(--radius-sm)',
                            border: 'none',
                            background: role === 'VENDOR' ? 'var(--color-bg-paper)' : 'transparent',
                            color: role === 'VENDOR' ? 'var(--color-primary)' : 'var(--color-text-muted)',
                            fontWeight: role === 'VENDOR' ? 600 : 400,
                            boxShadow: role === 'VENDOR' ? 'var(--shadow-sm)' : 'none',
                            transition: 'all 0.2s'
                        }}
                    >
                        I'm a Vendor
                    </button>
                </div>

                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                    <Input
                        label="Full Name"
                        placeholder="Aditi Sharma"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                    <Input
                        label="Email Address"
                        type="email"
                        placeholder="you@example.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                    <Input
                        label="Password"
                        type="password"
                        placeholder="Create a strong password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />

                    <Button type="submit" variant="primary" size="md" style={{ marginTop: '8px' }}>
                        Create Account
                    </Button>
                </form>

                <div style={{ marginTop: '24px', textAlign: 'center', fontSize: '0.875rem' }}>
                    <p style={{ color: 'var(--color-text-muted)' }}>
                        Already have an account? <Link to="/login" style={{ color: 'var(--color-primary)', fontWeight: 600, textDecoration: 'none' }}>Login</Link>
                    </p>
                </div>
            </motion.div>
        </div>
    );
};
