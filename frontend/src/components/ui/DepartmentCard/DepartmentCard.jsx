import './DepartmentCard.css';

// Avatar stack images from assets
import avatar1 from '../../../assets/Ellipse 169.svg';
import avatar2 from '../../../assets/Ellipse 170.svg';
import avatar3 from '../../../assets/Ellipse 171.svg';

// Arrow component - simplified and more visible
const ArrowIcon = ({ color }) => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path 
      d="M5 11L11 5M11 5H7M11 5V9" 
      stroke={color} 
      strokeWidth="1.8" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    />
  </svg>
);

const AVATARS = [avatar1, avatar2, avatar3];

function AvatarStack({ count, light }) {
  const shown = Math.min(count, AVATARS.length);
  const extra = count > AVATARS.length ? `+${count - AVATARS.length}` : null;
  return (
    <div className="dept-card__avatars">
      {AVATARS.slice(0, shown).map((src, i) => (
        <img
          key={i}
          src={src}
          alt=""
          className="dept-card__avatar"
          style={{ zIndex: shown - i }}
        />
      ))}
      {extra && (
        <span className={`dept-card__avatar-extra${light ? ' dept-card__avatar-extra--light' : ''}`}>
          {extra}
        </span>
      )}
    </div>
  );
}

export default function DepartmentCard({ department, onClick }) {
  const { id, name, budget, memberCount, color } = department;
  const isLight = color === 'light-bg' || color === 'light-selected';

  return (
    <article
      className={`dept-card dept-card--${color}`}
      onClick={() => onClick && onClick(department)}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => e.key === 'Enter' && onClick && onClick(department)}
      aria-label={`${name.replace('\n', ' ')} department`}
    >
      {/* Top: id + arrow button */}
      <div className="dept-card__top">
        <span className="dept-card__id">{id}</span>
        <button
          className={`dept-card__arrow-btn${isLight ? ' dept-card__arrow-btn--light' : ''}`}
          aria-label={`Open ${name}`}
          onClick={(e) => { e.stopPropagation(); onClick && onClick(department); }}
        >
          <ArrowIcon color={isLight ? '#FFFFFF' : '#0F172A'} />
        </button>
      </div>

      {/* Name */}
      <h3 className={`dept-card__name${isLight ? ' dept-card__name--dark' : ''}`}>
        {name}
      </h3>

      {/* Bottom: budget + avatars */}
      <div className="dept-card__bottom">
        <span className={`dept-card__budget${isLight ? ' dept-card__budget--dark' : ''}`}>
          {budget}
        </span>
        <AvatarStack count={memberCount} light={isLight} />
      </div>
    </article>
  );
}
