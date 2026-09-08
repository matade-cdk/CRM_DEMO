import './TopBar.css';
import avatarImg from '../../../assets/Ellipse 57.svg';

const SearchIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
    <circle cx="6.5" cy="6.5" r="5.25" stroke="#858585" strokeWidth="1.2"/>
    <line x1="10.4" y1="10.4" x2="14.1" y2="14.1" stroke="#858585" strokeWidth="1.3" strokeLinecap="round"/>
  </svg>
);

const BellIcon = () => (
  <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
    <path d="M2.003 11.395C1.835 12.467 2.587 13.21 3.509 13.58C7.042 15.001 11.958 15.001 15.491 13.58C16.413 13.21 17.166 12.467 16.997 11.395C16.894 10.737 16.382 10.189 16.003 9.654C15.507 8.944 15.457 8.17 15.457 7.346C15.457 4.164 12.79 1.583 9.5 1.583C6.21 1.583 3.543 4.164 3.543 7.346C3.543 8.17 3.493 8.944 2.997 9.654C2.618 10.189 2.106 10.737 2.003 11.395Z" stroke="#0F172A" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M7.125 16.625C7.755 17.117 8.588 17.417 9.5 17.417C10.412 17.417 11.245 17.117 11.875 16.625" stroke="#0F172A" strokeWidth="1" strokeLinecap="round"/>
  </svg>
);

const HeadphoneIcon = () => (
  <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
    <path d="M2.275 10.38V9.54C2.275 5.944 5.344 3 9.125 3C12.906 3 15.975 5.944 15.975 9.54V10.38" stroke="#0F172A" strokeWidth="0.85" strokeLinecap="round"/>
    <path d="M2.275 10.38C1.814 10.483 1.5 10.884 1.5 11.343V13.121C1.5 13.74 2.01 14.24 2.639 14.24H3.416V10.38H2.275Z" stroke="#0F172A" strokeWidth="0.85" strokeLinejoin="round"/>
    <path d="M15.975 10.38C16.436 10.483 16.75 10.884 16.75 11.343V13.121C16.75 13.74 16.24 14.24 15.611 14.24H14.834V10.38H15.975Z" stroke="#0F172A" strokeWidth="0.85" strokeLinejoin="round"/>
    <path d="M14.75 14.25V15.25C14.75 15.8 14.3 16.25 13.75 16.25H11.25" stroke="#0F172A" strokeWidth="0.85" strokeLinecap="round"/>
    <circle cx="10.5" cy="16.5" r="1" stroke="#0F172A" strokeWidth="0.85"/>
  </svg>
);

const GearIcon = () => (
  <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
    <path d="M9.875 11.89C9.33 12.425 8.605 12.725 7.849 12.725C7.093 12.725 6.368 12.425 5.824 11.89C5.279 11.355 4.974 10.631 4.974 9.875C4.974 9.119 5.279 8.394 5.824 7.859C6.368 7.325 7.093 7.025 7.849 7.025C8.605 7.025 9.33 7.325 9.875 7.859C10.419 8.394 10.724 9.119 10.724 9.875C10.724 10.631 10.419 11.355 9.875 11.89Z" stroke="#0F172A" strokeWidth="0.75" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M15.116 8.35L14.074 5.833L15.475 4.175L13.575 2.275L11.927 3.684L9.355 2.627L8.763 0.375H6.907L6.307 2.656L3.794 3.715L2.175 2.275L0.275 4.175L1.655 5.875L0.629 8.399L-1.625 8.925V10.825L0.656 11.448L1.715 13.96L0.275 15.575L2.175 17.475L3.876 16.088L6.352 17.106L6.925 19.375H8.825L9.399 17.107L11.917 16.064C12.337 16.365 13.575 17.475 13.575 17.475L15.475 15.575L14.065 13.913L15.108 11.393L17.375 10.804V8.925L15.116 8.35Z" stroke="#0F172A" strokeWidth="0.75" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export default function TopBar() {
  return (
    <header className="topbar">
      {/* Search box */}
      <div className="topbar__search">
        <span className="topbar__search-icon"><SearchIcon /></span>
        <input
          type="text"
          placeholder="Search"
          className="topbar__search-input"
          aria-label="Search"
        />
      </div>

      {/* Right icons */}
      <div className="topbar__actions">
        {/* Bell with red badge */}
        <button className="topbar__btn" aria-label="Notifications">
          <BellIcon />
          <span className="topbar__badge">1</span>
        </button>

        {/* Headphones */}
        <button className="topbar__btn" aria-label="Support">
          <HeadphoneIcon />
        </button>

        {/* Gear settings */}
        <button className="topbar__btn" aria-label="Settings">
          <GearIcon />
        </button>

        {/* User avatar */}
        <button className="topbar__avatar-btn" aria-label="User profile">
          <img src={avatarImg} alt="User" className="topbar__avatar" />
        </button>
      </div>
    </header>
  );
}
