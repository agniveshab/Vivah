
import { motion } from 'framer-motion';
import { Button } from '../../../components/ui/Button';

const MOCK_GUESTS = [
    { id: '1', name: 'Ramesh Gupta', phone: '+91 9876543210', group: "Bride's Family", status: 'Confirmed' },
    { id: '2', name: 'Sita Verma', phone: '+91 9876543211', group: "Groom's Family", status: 'Invited' },
    { id: '3', name: 'Kabir Singh', phone: '+91 9876543212', group: "Friends", status: 'Declined' },
    { id: '4', name: 'Priya Reddy', phone: '+91 9876543213', group: "Friends", status: 'Confirmed' },
    { id: '5', name: 'Amitabh Bachchan', phone: '+91 9876500000', group: "VIP", status: 'Maybe' },
];

export const GuestsTab = () => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
        >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
                <h3 style={{ fontSize: '1.5rem', fontFamily: 'var(--font-serif)' }}>Guest List</h3>
                <div style={{ display: 'flex', gap: '12px' }}>
                    <Button size="sm" variant="outline">Import Contacts</Button>
                    <Button size="sm">Add Guest</Button>
                </div>
            </div>

            <div style={{ background: 'var(--color-bg-paper)', borderRadius: 'var(--radius-md)', boxShadow: 'var(--shadow-sm)', overflow: 'hidden' }}>
                <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
                    <thead style={{ background: 'var(--color-bg-subtle)', borderBottom: '1px solid var(--color-border)' }}>
                        <tr>
                            <th style={{ padding: '16px', fontWeight: 600, color: 'var(--color-text-muted)', fontSize: '0.875rem' }}>Name</th>
                            <th style={{ padding: '16px', fontWeight: 600, color: 'var(--color-text-muted)', fontSize: '0.875rem' }}>Contact</th>
                            <th style={{ padding: '16px', fontWeight: 600, color: 'var(--color-text-muted)', fontSize: '0.875rem' }}>Group</th>
                            <th style={{ padding: '16px', fontWeight: 600, color: 'var(--color-text-muted)', fontSize: '0.875rem' }}>Status</th>
                            <th style={{ padding: '16px', fontWeight: 600, color: 'var(--color-text-muted)', fontSize: '0.875rem' }}>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {MOCK_GUESTS.map((guest, index) => (
                            <tr key={guest.id} style={{ borderBottom: index !== MOCK_GUESTS.length - 1 ? '1px solid var(--color-border)' : 'none' }}>
                                <td style={{ padding: '16px', fontWeight: 500 }}>{guest.name}</td>
                                <td style={{ padding: '16px', color: 'var(--color-text-muted)' }}>{guest.phone}</td>
                                <td style={{ padding: '16px' }}>{guest.group}</td>
                                <td style={{ padding: '16px' }}>
                                    <span style={{
                                        padding: '4px 12px',
                                        borderRadius: '9999px',
                                        fontSize: '0.75rem',
                                        fontWeight: 600,
                                        backgroundColor:
                                            guest.status === 'Confirmed' ? '#dcfce7' :
                                                guest.status === 'Declined' ? '#fee2e2' :
                                                    guest.status === 'Maybe' ? '#fef9c3' : '#f3f4f6',
                                        color:
                                            guest.status === 'Confirmed' ? '#166534' :
                                                guest.status === 'Declined' ? '#991b1b' :
                                                    guest.status === 'Maybe' ? '#854d0e' : '#374151'
                                    }}>
                                        {guest.status}
                                    </span>
                                </td>
                                <td style={{ padding: '16px' }}>
                                    <Button variant="ghost" size="sm" style={{ padding: '4px 8px' }}>Edit</Button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </motion.div>
    );
};
