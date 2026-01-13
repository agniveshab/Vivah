
import { motion } from 'framer-motion';
import { Button } from '../../../components/ui/Button';

const MOCK_BUDGET = [
    { category: 'Venue & Accommodation', estimated: 2000000, actual: 2000000, paid: 1000000 },
    { category: 'Catering (Food & Drink)', estimated: 1200000, actual: 1100000, paid: 500000 },
    { category: 'Decoration', estimated: 800000, actual: 850000, paid: 400000 },
    { category: 'Photography & Videography', estimated: 300000, actual: 300000, paid: 50000 },
    { category: 'Attire & Makeup', estimated: 500000, actual: 0, paid: 0 },
    { category: 'Logistics & Transport', estimated: 200000, actual: 150000, paid: 50000 },
];

export const BudgetTab = () => {
    const totalEstimated = MOCK_BUDGET.reduce((acc, curr) => acc + curr.estimated, 0);
    const totalActual = MOCK_BUDGET.reduce((acc, curr) => acc + (curr.actual || 0), 0);
    const totalPaid = MOCK_BUDGET.reduce((acc, curr) => acc + curr.paid, 0);

    return (
        <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
        >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
                <h3 style={{ fontSize: '1.5rem', fontFamily: 'var(--font-serif)' }}>Budget Tracker</h3>
                <Button size="sm">Add Expense</Button>
            </div>

            {/* Summary Cards */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px', marginBottom: '32px' }}>
                <div style={{ background: 'var(--color-bg-paper)', padding: '24px', borderRadius: 'var(--radius-md)', boxShadow: 'var(--shadow-sm)' }}>
                    <div style={{ color: 'var(--color-text-muted)', fontSize: '0.875rem' }}>Estimated Cost</div>
                    <div style={{ fontSize: '1.5rem', fontWeight: 700, fontFamily: 'var(--font-serif)', color: 'var(--color-text)' }}>
                        ₹ {totalEstimated.toLocaleString()}
                    </div>
                </div>
                <div style={{ background: 'var(--color-bg-paper)', padding: '24px', borderRadius: 'var(--radius-md)', boxShadow: 'var(--shadow-sm)' }}>
                    <div style={{ color: 'var(--color-text-muted)', fontSize: '0.875rem' }}>Actual / Projected</div>
                    <div style={{ fontSize: '1.5rem', fontWeight: 700, fontFamily: 'var(--font-serif)', color: 'var(--color-primary)' }}>
                        ₹ {totalActual.toLocaleString()}
                    </div>
                </div>
                <div style={{ background: 'var(--color-bg-paper)', padding: '24px', borderRadius: 'var(--radius-md)', boxShadow: 'var(--shadow-sm)' }}>
                    <div style={{ color: 'var(--color-text-muted)', fontSize: '0.875rem' }}>Amount Paid</div>
                    <div style={{ fontSize: '1.5rem', fontWeight: 700, fontFamily: 'var(--font-serif)', color: 'green' }}>
                        ₹ {totalPaid.toLocaleString()}
                    </div>
                </div>
            </div>

            {/* List */}
            <div style={{ display: 'grid', gap: '16px' }}>
                {MOCK_BUDGET.map((item, index) => (
                    <div key={index} style={{ background: 'var(--color-bg-paper)', padding: '20px', borderRadius: 'var(--radius-md)', boxShadow: 'var(--shadow-sm)' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '12px' }}>
                            <h4 style={{ margin: 0 }}>{item.category}</h4>
                            <span style={{ fontWeight: 600 }}>₹ {item.estimated.toLocaleString()}</span>
                        </div>

                        {/* Simple visual bar */}
                        <div style={{ height: '8px', background: 'var(--color-bg-subtle)', borderRadius: '4px', overflow: 'hidden', position: 'relative' }}>
                            <div style={{
                                width: `${(item.paid / item.estimated) * 100}%`,
                                background: 'green',
                                height: '100%',
                                position: 'absolute'
                            }} title="Paid"></div>
                            <div style={{
                                width: `${(item.actual / item.estimated) * 100}%`,
                                background: 'var(--color-primary)',
                                height: '100%',
                                opacity: 0.3
                            }} title="Actual"></div>
                        </div>

                        <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '8px', fontSize: '0.75rem', color: 'var(--color-text-muted)' }}>
                            <span>Paid: ₹ {item.paid.toLocaleString()}</span>
                            <span>Actual: ₹ {item.actual.toLocaleString()}</span>
                        </div>
                    </div>
                ))}
            </div>
        </motion.div>
    );
};
