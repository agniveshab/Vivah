
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '../../components/ui/Button';
import { Input } from '../../components/ui/Input';
import { Link, useNavigate } from 'react-router-dom';
import { useAuthStore } from '../../store/useAuthStore';

export const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const login = useAuthStore((state) => state.login);
    const navigate = useNavigate();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Login', { email, password });
        // Mock Login
        login(email, 'USER');
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
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                style={{
                    background: 'var(--color-bg-paper)',
                    padding: '40px',
                    borderRadius: 'var(--radius-lg)',
                    boxShadow: 'var(--shadow-gold)',
                    width: '100%',
                    maxWidth: '400px'
                }}
            >
                <h2 style={{ textAlign: 'center', marginBottom: '24px', color: 'var(--color-primary)' }}>Welcome Back</h2>

                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
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
                        placeholder="••••••••"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />

                    <Button type="submit" variant="primary" size="md" style={{ marginTop: '8px' }}>
                        Login
                    </Button>
                </form>

                <div style={{ marginTop: '24px', textAlign: 'center', fontSize: '0.875rem' }}>
                    <p style={{ color: 'var(--color-text-muted)' }}>
                        Planning your first wedding? <Link to="/signup" style={{ color: 'var(--color-primary)', fontWeight: 600, textDecoration: 'none' }}>Start Here</Link>
                    </p>
                </div>
            </motion.div>
        </div>
    );
};
