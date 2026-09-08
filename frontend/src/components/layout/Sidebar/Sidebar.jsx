import { NavLink } from 'react-router-dom';
import logoSvg from '../../../assets/Rectangle 373.svg';
import './Sidebar.css';

/* ------------------------------------------------------------------
   Nav section config — using actual asset SVGs
   The icon component renders an <img> whose color is CSS-filtered.
------------------------------------------------------------------ */
const navSections = [
  {
    title: 'Menu',
    hasHamburger: true,
    hasChevron: false,
    items: [
      { label: 'Dashboard',        icon: 'Vector-6.svg',   path: '/dashboard' },
      { label: 'Departments',      icon: 'Vector-8.svg',   path: '/departments' },
      { label: 'Department Heads', icon: 'Vector-3.svg',   path: '/department-heads' },
    ],
  },
  {
    title: 'HR',
    hasHamburger: false,
    hasChevron: true,
    items: [
      { label: 'Recruitment', icon: 'Group-2.svg',  path: '/hr/recruitment' },
      { label: 'Employees',   icon: 'Vector-3.svg', path: '/hr/employees' },
    ],
  },
  {
    title: 'Accounts',
    hasHamburger: false,
    hasChevron: true,
    items: [
      { label: 'Overview',           icon: 'Vector-7.svg',  path: '/accounts/overview' },
      { label: 'Investors',          icon: 'Vector-9.svg',  path: '/accounts/investors' },
      { label: 'B2B/B2C',            icon: 'Vector-3.svg',  path: '/accounts/b2b-b2c' },
      { label: 'Equity Holders',     icon: 'Vector-1.svg',  path: '/accounts/equity-holders' },
      { label: 'Board of Directors', icon: 'Vector-7.svg',  path: '/accounts/board-of-directors' },
    ],
  },
  {
    title: 'Support',
    hasHamburger: false,
    hasChevron: true,
    items: [
      { label: 'General',      icon: 'Group-2.svg',  path: '/support/general' },
      { label: 'Activity log', icon: 'Group-1.svg',  path: '/support/activity-log' },
      { label: 'Settings',     icon: 'Group.svg',    path: '/support/settings' },
    ],
  },
];

// Dynamically import all icons at build time
const icons = import.meta.glob('../../../assets/*.svg', { eager: true, query: '?url', import: 'default' });

function getIconUrl(filename) {
  const key = `../../../assets/${filename}`;
  return icons[key] || '';
}

export default function Sidebar() {
  return (
    <aside className="sidebar">
      {/* Logo */}
      <div className="sidebar__logo">
        <img src={logoSvg} alt="Alpha Wings" className="sidebar__logo-img" />
      </div>

      {/* Nav */}
      <nav className="sidebar__nav" aria-label="Main navigation">
        {navSections.map((section) => (
          <div key={section.title} className="sidebar__section">

            {/* Section header */}
            <div className="sidebar__section-hd">
              <span className="sidebar__section-title">{section.title}</span>
              {section.hasHamburger && (
                <span className="sidebar__hamburger" aria-hidden="true">
                  <HamburgerIcon />
                </span>
              )}
              {section.hasChevron && (
                <span className="sidebar__chevron" aria-hidden="true">
                  <img
                    src={getIconUrl('Vector-10.svg')}
                    alt=""
                    className="sidebar__chevron-img"
                  />
                </span>
              )}
            </div>

            {/* Links */}
            <ul className="sidebar__list">
              {section.items.map((item) => {
                const label = item.labelOverride || item.label;
                return (
                  <li key={item.path}>
                    <NavLink
                      to={item.path}
                      className={({ isActive }) =>
                        `sidebar__link${isActive ? ' sidebar__link--active' : ''}`
                      }
                    >
                      <span className="sidebar__icon-wrap">
                        <img
                          src={getIconUrl(item.icon)}
                          alt=""
                          className="sidebar__nav-icon"
                        />
                      </span>
                      <span className="sidebar__label">{label}</span>
                    </NavLink>
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </nav>

      {/* Logout */}
      <div className="sidebar__logout-wrap">
        <button className="sidebar__logout">
          <LogoutIcon />
          <span>Logout</span>
        </button>
      </div>
    </aside>
  );
}

/* Hamburger (three lines) */
function HamburgerIcon() {
  return (
    <svg width="13" height="10" viewBox="0 0 13 10" fill="none">
      <line x1="0.5" y1="1" x2="12.5" y2="1" stroke="#4C4C4C" strokeWidth="1.2" strokeLinecap="round"/>
      <line x1="0.5" y1="5" x2="12.5" y2="5" stroke="#4C4C4C" strokeWidth="1.2" strokeLinecap="round"/>
      <line x1="0.5" y1="9" x2="12.5" y2="9" stroke="#4C4C4C" strokeWidth="1.2" strokeLinecap="round"/>
    </svg>
  );
}

/* Logout arrow-out icon */
function LogoutIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
      <path d="M5.5 2H2.5C1.672 2 1 2.672 1 3.5V10.5C1 11.328 1.672 12 2.5 12H5.5" stroke="#4C4C4C" strokeWidth="1.1" strokeLinecap="round"/>
      <path d="M9.5 4.5L13 7L9.5 9.5" stroke="#4C4C4C" strokeWidth="1.1" strokeLinecap="round" strokeLinejoin="round"/>
      <line x1="13" y1="7" x2="5" y2="7" stroke="#4C4C4C" strokeWidth="1.1" strokeLinecap="round"/>
    </svg>
  );
}
