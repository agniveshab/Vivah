
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/Button';
import { ThemeToggle } from '../components/ThemeToggle';

export const LandingPage = () => {
    return (
        <motion.div style={{
            minHeight: '100vh',
            background: 'var(--color-bg)',
            color: 'var(--color-text)',
            display: 'flex',
            flexDirection: 'column'
        }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
        >

            {/* Navigation */}
            <nav style={{
                padding: '24px 48px',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                background: 'rgba(255, 255, 255, 0.8)',
                backdropFilter: 'blur(10px)',
                position: 'fixed',
                width: '100%',
                zIndex: 10,
                boxShadow: 'var(--shadow-sm)'
            }}>
                <div style={{ fontSize: '1.5rem', fontFamily: 'var(--font-serif)', fontWeight: 700, color: 'var(--color-primary)' }}>
                    Vivah
                </div>
                <div style={{ display: 'flex', gap: '24px', alignItems: 'center' }}>
                    <ThemeToggle />
                    <Link to="/login" style={{ textDecoration: 'none' }}>
                        <Button variant="ghost">Login</Button>
                    </Link>
                    <Link to="/signup" style={{ textDecoration: 'none' }}>
                        <Button variant="primary">Get Started</Button>
                    </Link>
                </div>
            </nav>

            {/* Hero Section */}
            <section style={{
                flex: 1,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                textAlign: 'center',
                padding: '120px 24px 60px',
                background: 'linear-gradient(135deg, var(--color-bg) 0%, var(--color-bg-subtle) 100%)'
            }}>
                <div style={{ maxWidth: '800px' }}>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <h1 style={{
                            fontSize: '4rem',
                            marginBottom: '24px',
                            color: 'var(--color-primary)',
                            lineHeight: 1.1
                        }}>
                            Curating Timeless Indian Weddings
                        </h1>
                        <p style={{
                            fontSize: '1.25rem',
                            color: 'var(--color-text-muted)',
                            marginBottom: '48px',
                            maxWidth: '600px',
                            margin: '0 auto 48px'
                        }}>
                            Plan your grand celebration with elegance. From venue selection to guest management, experience luxury in every detail.
                        </p>
                        <div style={{ display: 'flex', gap: '24px', justifyContent: 'center' }}>
                            <Link to="/signup" style={{ textDecoration: 'none' }}>
                                <Button variant="primary" size="lg" style={{ boxShadow: 'var(--shadow-gold)' }}>
                                    Start Planning
                                </Button>
                            </Link>
                            <Link to="/vendors" style={{ textDecoration: 'none' }}>
                                <Button variant="outline" size="lg">
                                    Explore Vendors
                                </Button>
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Features Preview (Optional but nice) */}
            <section style={{ padding: '80px 48px', background: 'var(--color-bg-paper)' }}>
                <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '48px' }}>
                    {[
                        { title: 'Vendor Marketplace', desc: 'Discover India\'s finest photographers, decorators, and venues.' },
                        { title: 'Guest Management', desc: 'Seamlessly track RSVPs and groups for all your events.' },
                        { title: 'Budget Tracker', desc: 'Keep your grand celebration within your financial vision.' }
                    ].map((feature, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            style={{ padding: '32px', borderRadius: 'var(--radius-lg)', background: 'var(--color-bg-subtle)', border: '1px solid var(--color-border)' }}
                        >
                            <h3 style={{ marginBottom: '16px', fontSize: '1.5rem' }}>{feature.title}</h3>
                            <p style={{ color: 'var(--color-text-muted)' }}>{feature.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </section>

        </motion.div>
    );
};
