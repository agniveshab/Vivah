
import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '../../components/ui/Button';

interface VendorCardProps {
    id: string;
    businessName: string;
    category: string;
    city: string;
    rating: number;
    price: string;
    imageUrl: string;
    onViewProfile: (id: string) => void;
}

export const VendorCard: React.FC<VendorCardProps> = ({
    id,
    businessName,
    category,
    city,
    rating,
    price,
    imageUrl,
    onViewProfile
}) => {
    return (
        <motion.div
            whileHover={{ y: -5 }}
            style={{
                background: 'var(--color-bg-paper)',
                borderRadius: 'var(--radius-md)',
                boxShadow: 'var(--shadow-md)',
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column'
            }}
        >
            <div style={{ height: '200px', background: '#ddd', position: 'relative' }}>
                <img
                    src={imageUrl}
                    alt={businessName}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
                <div style={{
                    position: 'absolute',
                    top: '12px',
                    right: '12px',
                    background: 'rgba(255,255,255,0.9)',
                    padding: '4px 8px',
                    borderRadius: '4px',
                    fontSize: '0.75rem',
                    fontWeight: 600,
                    color: 'var(--color-primary)'
                }}>
                    ★ {rating.toFixed(1)}
                </div>
            </div>

            <div style={{ padding: '16px', flex: 1, display: 'flex', flexDirection: 'column' }}>
                <div style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)', textTransform: 'uppercase', letterSpacing: '1px' }}>
                    {category}
                </div>
                <h3 style={{ margin: '4px 0 8px', fontSize: '1.125rem', fontFamily: 'var(--font-serif)' }}>
                    {businessName}
                </h3>
                <p style={{ fontSize: '0.875rem', color: 'var(--color-text-muted)', marginBottom: '16px' }}>
                    📍 {city}
                </p>

                <div style={{ marginTop: 'auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <div style={{ fontWeight: 600 }}>
                        {price}
                    </div>
                    <Button size="sm" variant="outline" onClick={() => onViewProfile(id)}>
                        View Profile
                    </Button>
                </div>
            </div>
        </motion.div>
    );
};
