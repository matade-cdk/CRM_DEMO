import './StatsBar.css';

export default function StatsBar({ stats }) {
  return (
    <div className="stats-bar">
      <div className="stats-bar__inner">
        {stats.map((stat) => (
          <div key={stat.id} className="stats-bar__cell">
            {/* Top section - count with label above */}
            <div className="stats-bar__top">
              <span className="stats-bar__count-label">{stat.countLabel}</span>
              <span className="stats-bar__count">{stat.count}</span>
            </div>
            
            {/* Bottom section - amount with label above */}
            <div className="stats-bar__bottom">
              <span className="stats-bar__sub-label">{stat.amountLabel}</span>
              <span className="stats-bar__amount">{stat.amount}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
