import { Outlet } from 'react-router-dom';
import Sidebar from '../Sidebar/Sidebar';
import TopBar from '../TopBar/TopBar';
import './MainLayout.css';

export default function MainLayout() {
  return (
    <div className="main-layout">
      <Sidebar />
      <div className="main-layout__body">
        <TopBar />
        <main className="main-layout__content">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
