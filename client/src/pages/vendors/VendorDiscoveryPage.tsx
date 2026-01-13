
import { useState } from 'react';
import { Button } from '../../components/ui/Button';
import { Input } from '../../components/ui/Input';
import { VendorCard } from './VendorCard';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ThemeToggle } from '../../components/ThemeToggle';

// Mock Data
const MOCK_VENDORS = [
    {
        id: '1',
        businessName: 'Recall Pictures',
        category: 'Photographer',
        city: 'Mumbai',
        rating: 4.8,
        price: '₹ 1,50,000 / day',
        imageUrl: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=800&auto=format&fit=crop&q=60'
    },
    {
        id: '2',
        businessName: 'The Wedding Design Company',
        category: 'Decorator',
        city: 'Delhi',
        rating: 4.9,
        price: '₹ 5,00,000 onwards',
        imageUrl: 'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=800&auto=format&fit=crop&q=60'
    },
    {
        id: '3',
        businessName: 'Makeup by Ojas Rajani',
        category: 'Makeup Artist',
        city: 'Mumbai',
        rating: 4.7,
        price: '₹ 45,000 / event',
        imageUrl: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=800&auto=format&fit=crop&q=60'
    },
    {
        id: '4',
        businessName: 'Taj Falaknuma Palace',
        category: 'Venue',
        city: 'Hyderabad',
        rating: 5.0,
        price: '₹ 40,00,000 package',
        imageUrl: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&auto=format&fit=crop&q=60'
    },
    {
        id: '5',
        businessName: 'Stories by Joseph Radhik',
        category: 'Photographer',
        city: 'Bangalore',
        rating: 4.9,
        price: '₹ 2,00,000 / day',
        imageUrl: 'https://images.unsplash.com/photo-1606800052052-a08af7148866?w=800&auto=format&fit=crop&q=60'
    },
    {
        id: '6',
        businessName: 'Sabyasachi Bridal',
        category: 'Attire',
        city: 'Kolkata',
        rating: 4.9,
        price: 'Price on Request',
        imageUrl: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=800&auto=format&fit=crop&q=60'
    }
];

export const VendorDiscoveryPage = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('All');

    const filteredVendors = MOCK_VENDORS.filter(vendor => {
        const matchesSearch = vendor.businessName.toLowerCase().includes(searchTerm.toLowerCase()) ||
            vendor.city.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesCategory = selectedCategory === 'All' || vendor.category === selectedCategory;
        return matchesSearch && matchesCategory;
    });

    const categories = ['All', 'Venue', 'Photographer', 'Makeup Artist', 'Decorator', 'Attire'];

    return (
        <motion.div
            className="page-container"
            style={{ minHeight: '100vh', background: 'var(--color-bg)' }}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
        >
            {/* Header */}
            <header style={{
                background: 'var(--color-bg-paper)',
                padding: '16px 32px',
                borderBottom: '1px solid var(--color-border)',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                position: 'sticky',
                top: 0,
                zIndex: 10
            }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '24px' }}>
                    <Link to="/dashboard" style={{ textDecoration: 'none', color: 'var(--color-text)' }}>
                        <h2 style={{ fontSize: '1.25rem', fontFamily: 'var(--font-serif)', margin: 0 }}>Luxury Wedding Planner</h2>
                    </Link>
                    <nav style={{ display: 'flex', gap: '16px' }}>
                        <Link to="/dashboard" style={{ textDecoration: 'none', color: 'var(--color-text-muted)', fontSize: '0.9rem' }}>Dashboard</Link>
                        <Link to="/vendors" style={{ textDecoration: 'none', color: 'var(--color-primary)', fontWeight: 600, fontSize: '0.9rem' }}>Vendors</Link>
                    </nav>
                </div>
                <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
                    <ThemeToggle />
                    <Link to="/login">
                        <Button variant="ghost" size="sm">Logout</Button>
                    </Link>
                </div>
            </header>

            <main style={{ padding: '32px', maxWidth: '1200px', margin: '0 auto' }}>
                <div style={{ marginBottom: '40px', textAlign: 'center' }}>
                    <h1 style={{ fontSize: '2.5rem', marginBottom: '16px' }}>Curated Vendor Marketplace</h1>
                    <p style={{ color: 'var(--color-text-muted)', maxWidth: '600px', margin: '0 auto' }}>
                        Discover India's finest wedding artisans, from royal venues to celebrity photographers.
                    </p>
                </div>

                {/* Search & Filter */}
                <div style={{
                    background: 'var(--color-bg-paper)',
                    padding: '24px',
                    borderRadius: 'var(--radius-md)',
                    boxShadow: 'var(--shadow-sm)',
                    marginBottom: '32px',
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: '24px',
                    alignItems: 'end'
                }}>
                    <div style={{ flex: 1, minWidth: '250px' }}>
                        <Input
                            placeholder="Search by name or city..."
                            label="Search Vendors"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                    </div>
                    <div style={{ flex: 1, minWidth: '250px' }}>
                        <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 500, color: 'var(--color-text-muted)', marginBottom: '6px' }}>Category</label>
                        <div style={{ display: 'flex', gap: '8px', overflowX: 'auto', paddingBottom: '4px' }}>
                            {categories.map(cat => (
                                <button
                                    key={cat}
                                    onClick={() => setSelectedCategory(cat)}
                                    style={{
                                        padding: '8px 16px',
                                        borderRadius: 'var(--radius-full)',
                                        border: selectedCategory === cat ? '1px solid var(--color-primary)' : '1px solid var(--color-border)',
                                        background: selectedCategory === cat ? 'var(--color-primary)' : 'transparent',
                                        color: selectedCategory === cat ? 'white' : 'var(--color-text)',
                                        fontSize: '0.875rem',
                                        cursor: 'pointer',
                                        whiteSpace: 'nowrap',
                                        transition: 'all 0.2s'
                                    }}
                                >
                                    {cat}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Results Grid */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '32px' }}>
                    {filteredVendors.map(vendor => (
                        <VendorCard
                            key={vendor.id}
                            {...vendor}
                            onViewProfile={(id) => console.log('View profile', id)}
                        />
                    ))}
                </div>

                {filteredVendors.length === 0 && (
                    <div style={{ textAlign: 'center', padding: '64px', color: 'var(--color-text-muted)' }}>
                        No vendors found matching your criteria.
                    </div>
                )}
            </main>
        </motion.div>
    );
};
