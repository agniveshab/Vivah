
import { motion } from 'framer-motion';
import { Button } from '../../../components/ui/Button';

const MOCK_CEREMONIES = [
    {
        id: '1',
        name: 'Haldi Ceremony',
        date: '2025-12-14',
        time: '10:00 AM',
        location: 'Oberoi Udvilas, Udaipur',
        description: 'A morning of turmeric, laughter, and blessings.'
    },
    {
        id: '2',
        name: 'Mehendi Function',
        date: '2025-12-14',
        time: '04:00 PM',
        location: 'Oberoi Udvilas, Poolside',
        description: 'Henna application with music and dance.'
    },
    {
        id: '3',
        name: 'Sangeet Night',
        date: '2025-12-15',
        time: '07:00 PM',
        location: 'The Leela Palace, Udaipur',
        description: 'A night of bollywood performances and gala dinner.'
    },
    {
        id: '4',
        name: 'The Wedding',
        date: '2025-12-16',
        time: '08:00 AM',
        location: 'Oberoi Udvilas, Main Courtyard',
        description: 'The auspicious moment.'
    },
    {
        id: '5',
        name: 'Reception',
        date: '2025-12-16',
        time: '07:30 PM',
        location: 'Oberoi Udvilas, Ballroom',
        description: 'Grand celebration with friends and family.'
    }
];

export const CeremoniesTab = () => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
        >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
                <h3 style={{ fontSize: '1.5rem', fontFamily: 'var(--font-serif)' }}>Wedding Timeline</h3>
                <Button size="sm">Add Ceremony</Button>
            </div>

            <div style={{ display: 'grid', gap: '24px' }}>
                {MOCK_CEREMONIES.map((ceremony, index) => (
                    <div
                        key={ceremony.id}
                        style={{
                            background: 'var(--color-bg-paper)',
                            padding: '24px',
                            borderRadius: 'var(--radius-md)',
                            boxShadow: 'var(--shadow-sm)',
                            borderLeft: '4px solid var(--color-primary)',
                            display: 'flex',
                            gap: '24px'
                        }}
                    >
                        {/* Date Block */}
                        <div style={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            justifyContent: 'center',
                            minWidth: '80px',
                            borderRight: '1px solid var(--color-border)',
                            paddingRight: '24px'
                        }}>
                            <div style={{ fontSize: '0.875rem', fontWeight: 600, color: 'var(--color-text-muted)', textTransform: 'uppercase' }}>
                                Dec
                            </div>
                            <div style={{ fontSize: '2rem', fontWeight: 700, fontFamily: 'var(--font-serif)', color: 'var(--color-primary)' }}>
                                {ceremony.date.split('-')[2]}
                            </div>
                            <div style={{ fontSize: '0.875rem', color: 'var(--color-text-muted)' }}>
                                2025
                            </div>
                        </div>

                        {/* Details */}
                        <div style={{ flex: 1 }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start' }}>
                                <h4 style={{ fontSize: '1.25rem', marginBottom: '8px' }}>{ceremony.name}</h4>
                                <Button variant="ghost" size="sm">Edit</Button>
                            </div>
                            <p style={{ color: 'var(--color-text-muted)', marginBottom: '8px', fontSize: '0.9rem' }}>
                                <span style={{ marginRight: '16px' }}>🕒 {ceremony.time}</span>
                                <span>📍 {ceremony.location}</span>
                            </p>
                            <p style={{ fontSize: '0.95rem' }}>{ceremony.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </motion.div>
    );
};
