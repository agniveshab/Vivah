import { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '../../components/ui/Button';
import { Link } from 'react-router-dom';
import { CeremoniesTab } from './tabs/CeremoniesTab';
import { GuestsTab } from './tabs/GuestsTab';
import { BudgetTab } from './tabs/BudgetTab';
import { ThemeToggle } from '../../components/ThemeToggle';

export const DashboardPage = () => {
    const [activeTab, setActiveTab] = useState<'overview' | 'ceremonies' | 'guests' | 'vendors' | 'budget'>('overview');

    return (
        <motion.div
            className="dashboard-container"
            style={{ minHeight: '100vh', background: 'var(--color-bg)' }}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            transition={{ duration: 0.3 }}
        >
            {/* Header */}
            <header style={{
                background: 'var(--color-bg-paper)',
                padding: '16px 32px',
                borderBottom: '1px solid var(--color-border)',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center'
            }}>
                <h2 style={{ fontSize: '1.5rem', fontFamily: 'var(--font-serif)' }}>Aditi & Rahul's Wedding</h2>
                <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
                    <ThemeToggle />
                    <Button variant="ghost" size="sm">Notifications</Button>
                    <Link to="/login">
                        <Button variant="outline" size="sm">Logout</Button>
                    </Link>
                </div>
            </header>

            {/* Main Content */}
            <main style={{ padding: '32px', maxWidth: '1200px', margin: '0 auto' }}>

                {/* Tabs */}
                <div style={{ display: 'flex', gap: '24px', marginBottom: '32px', borderBottom: '1px solid var(--color-border)' }}>
                    {['Overview', 'Ceremonies', 'Guests', 'Budget'].map((tab) => (
                        <button
                            key={tab}
                            onClick={() => setActiveTab(tab.toLowerCase() as any)}
                            style={{
                                background: 'none',
                                border: 'none',
                                padding: '12px 0',
                                fontSize: '1rem',
                                color: activeTab === tab.toLowerCase() ? 'var(--color-primary)' : 'var(--color-text-muted)',
                                borderBottom: activeTab === tab.toLowerCase() ? '2px solid var(--color-primary)' : '2px solid transparent',
                                cursor: 'pointer',
                                fontFamily: 'var(--font-sans)',
                                fontWeight: 500
                            }}
                        >
                            {tab}
                        </button>
                    ))}
                    {/* Vendors tab as a Link */}
                    <Link
                        to="/vendors"
                        style={{
                            textDecoration: 'none',
                            padding: '12px 0',
                            fontSize: '1rem',
                            color: 'var(--color-text-muted)',
                            borderBottom: '2px solid transparent',
                            cursor: 'pointer',
                            fontFamily: 'var(--font-sans)',
                            fontWeight: 500,
                            transition: 'color 0.2s'
                        }}
                        onMouseOver={(e: React.MouseEvent<HTMLAnchorElement>) => e.currentTarget.style.color = 'var(--color-primary)'}
                        onMouseOut={(e: React.MouseEvent<HTMLAnchorElement>) => e.currentTarget.style.color = 'var(--color-text-muted)'}
                    >
                        Vendors
                    </Link>
                </div>

                {/* Tab Content */}
                {activeTab === 'overview' && (
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4 }}
                        style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '32px' }}
                    >
                        <div className="left-col" style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                            {/* Timeline Card */}
                            <div style={{ background: 'var(--color-bg-paper)', padding: '24px', borderRadius: 'var(--radius-md)', boxShadow: 'var(--shadow-sm)' }}>
                                <h3 style={{ marginBottom: '16px', fontSize: '1.25rem' }}>Upcoming Ceremonies</h3>
                                <div style={{ display: 'flex', gap: '16px', flexDirection: 'column' }}>
                                    <div style={{ display: 'flex', gap: '16px', alignItems: 'center', padding: '12px', background: 'var(--color-bg-subtle)', borderRadius: 'var(--radius-sm)' }}>
                                        <div style={{ background: 'var(--color-secondary)', color: 'white', padding: '8px 12px', borderRadius: '4px', textAlign: 'center' }}>
                                            <div style={{ fontSize: '0.75rem', textTransform: 'uppercase' }}>Dec</div>
                                            <div style={{ fontWeight: 'bold', fontSize: '1.2rem' }}>14</div>
                                        </div>
                                        <div>
                                            <h4 style={{ margin: 0 }}>Haldi Ceremony</h4>
                                            <p style={{ margin: 0, fontSize: '0.875rem', color: 'var(--color-text-muted)' }}>10:00 AM • Oberoi Udvilas</p>
                                        </div>
                                    </div>
                                    <div style={{ display: 'flex', gap: '16px', alignItems: 'center', padding: '12px', background: 'var(--color-bg-subtle)', borderRadius: 'var(--radius-sm)' }}>
                                        <div style={{ background: 'var(--color-secondary)', color: 'white', padding: '8px 12px', borderRadius: '4px', textAlign: 'center' }}>
                                            <div style={{ fontSize: '0.75rem', textTransform: 'uppercase' }}>Dec</div>
                                            <div style={{ fontWeight: 'bold', fontSize: '1.2rem' }}>15</div>
                                        </div>
                                        <div>
                                            <h4 style={{ margin: 0 }}>Sangeet Night</h4>
                                            <p style={{ margin: 0, fontSize: '0.875rem', color: 'var(--color-text-muted)' }}>7:00 PM • The Leela Palace</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Tasks */}
                            <div style={{ background: 'var(--color-bg-paper)', padding: '24px', borderRadius: 'var(--radius-md)', boxShadow: 'var(--shadow-sm)' }}>
                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
                                    <h3 style={{ fontSize: '1.25rem' }}>Pending Tasks</h3>
                                    <Button variant="ghost" size="sm" style={{ color: 'var(--color-primary)' }}>View All</Button>
                                </div>
                                <ul style={{ listStyle: 'none', padding: 0 }}>
                                    <li style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '8px 0', borderBottom: '1px solid var(--color-border)' }}>
                                        <input type="checkbox" style={{ accentColor: 'var(--color-primary)' }} />
                                        <span>Finalize Guest List for Sangeet</span>
                                    </li>
                                    <li style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '8px 0', borderBottom: '1px solid var(--color-border)' }}>
                                        <input type="checkbox" style={{ accentColor: 'var(--color-primary)' }} />
                                        <span>Pay advance to Photographer</span>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="right-col" style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                            {/* Budget Summary */}
                            <div style={{ background: 'var(--color-primary)', color: 'white', padding: '24px', borderRadius: 'var(--radius-md)', boxShadow: 'var(--shadow-lg)' }}>
                                <h3 style={{ color: 'rgba(255,255,255,0.9)', fontSize: '1rem', marginBottom: '8px' }}>Total Budget</h3>
                                <div style={{ fontSize: '2.5rem', fontWeight: 700, fontFamily: 'var(--font-serif)' }}>₹ 45,00,000</div>
                                <div style={{ marginTop: '16px', display: 'flex', justifyContent: 'space-between', fontSize: '0.875rem' }}>
                                    <span>Spent: ₹ 12,50,000</span>
                                    <span>Rem: ₹ 32,50,000</span>
                                </div>
                                <div style={{ marginTop: '8px', background: 'rgba(255,255,255,0.2)', height: '8px', borderRadius: '4px', overflow: 'hidden' }}>
                                    <div style={{ width: '28%', background: 'var(--color-secondary)', height: '100%' }}></div>
                                </div>
                            </div>

                            {/* Guest Stats */}
                            <div style={{ background: 'var(--color-bg-paper)', padding: '24px', borderRadius: 'var(--radius-md)', boxShadow: 'var(--shadow-sm)' }}>
                                <h3 style={{ marginBottom: '16px', fontSize: '1.25rem' }}>Guest RSVPs</h3>
                                <div style={{ display: 'flex', justifyContent: 'space-between', textAlign: 'center' }}>
                                    <div>
                                        <div style={{ fontSize: '1.5rem', fontWeight: 700, color: 'var(--color-primary)' }}>350</div>
                                        <div style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)' }}>Invited</div>
                                    </div>
                                    <div>
                                        <div style={{ fontSize: '1.5rem', fontWeight: 700, color: 'green' }}>120</div>
                                        <div style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)' }}>Confirmed</div>
                                    </div>
                                    <div>
                                        <div style={{ fontSize: '1.5rem', fontWeight: 700, color: 'red' }}>15</div>
                                        <div style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)' }}>Declined</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                )}

                {/* Other Tabs */}
                {activeTab === 'ceremonies' && <CeremoniesTab />}
                {activeTab === 'guests' && <GuestsTab />}
                {activeTab === 'budget' && <BudgetTab />}
            </main>
        </motion.div>
    );
};
