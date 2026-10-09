import { Landmark } from 'lucide-react';

// Illustrative figures only. Replace with a verified monthly report before publication.
const report = {
  period: 'Sample month',
  openingBalance: 1200000,
  donations: 3500000,
  expenses: [
    { label: 'Rent', amount: 2200000 },
    { label: 'Utilities', amount: 450000 },
    { label: 'Community activities', amount: 300000 },
    { label: 'Cleaning & supplies', amount: 150000 },
  ],
};

const won = (amount: number) => `₩${amount.toLocaleString('en-US')}`;

export default function FinanceReportSlide() {
  const totalExpenses = report.expenses.reduce((sum, item) => sum + item.amount, 0);
  const closingBalance = report.openingBalance + report.donations - totalExpenses;

  return (
    <section className="finance-report" aria-label="Sample mosque financial report">
      <header className="finance-report-heading">
        <div>
          <p className="finance-eyebrow"><Landmark size={15} /> MASJID AL-FALAH SEOUL</p>
          <h2>Monthly financial report</h2>
          <p className="finance-muted">{report.period} · All amounts in KRW</p>
        </div>
        <span className="finance-sample">SAMPLE DATA · NOT ACTUAL</span>
      </header>

      <div className="finance-summary">
        <div><span>Opening balance</span><strong>{won(report.openingBalance)}</strong></div>
        <div><span>Donations received</span><strong className="finance-income">+{won(report.donations)}</strong></div>
        <div><span>Total expenses</span><strong>−{won(totalExpenses)}</strong></div>
      </div>

      <div className="finance-details">
        <div>
          <h3>Where the funds go</h3>
          {report.expenses.map(item => (
            <div className="finance-expense" key={item.label}>
              <div><span>{item.label}</span><strong>{won(item.amount)}</strong></div>
              <div className="finance-track" aria-hidden="true"><span style={{ width: `${item.amount / totalExpenses * 100}%` }} /></div>
            </div>
          ))}
        </div>
        <div className="finance-balance">
          <span>Closing balance</span>
          <strong>{won(closingBalance)}</strong>
          <p>Opening balance + donations − expenses</p>
          <span className="finance-muted">Thank you for supporting our masjid.</span>
        </div>
      </div>
      <p className="finance-disclaimer">Illustrative figures for layout preview only. This is not an official financial statement.</p>
    </section>
  );
}
