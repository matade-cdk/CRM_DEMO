import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import MainLayout from './components/layout/MainLayout/MainLayout';
import DashboardPage from './pages/Dashboard/DashboardPage';
import DepartmentsPage from './pages/Departments/DepartmentsPage';
import ComingSoon from './pages/ComingSoon';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          {/* Default redirect to departments */}
          <Route index element={<Navigate to="/departments" replace />} />

          {/* Menu */}
          <Route path="/dashboard"        element={<DashboardPage />} />
          <Route path="/departments"      element={<DepartmentsPage />} />
          <Route path="/department-heads" element={<ComingSoon title="Department Heads" />} />

          {/* HR */}
          <Route path="/hr/recruitment" element={<ComingSoon title="Recruitment" />} />
          <Route path="/hr/employees"   element={<ComingSoon title="Employees" />} />

          {/* Accounts */}
          <Route path="/accounts/overview"           element={<ComingSoon title="Overview" />} />
          <Route path="/accounts/investors"          element={<ComingSoon title="Investors" />} />
          <Route path="/accounts/b2b-b2c"            element={<ComingSoon title="B2B/B2C" />} />
          <Route path="/accounts/equity-holders"     element={<ComingSoon title="Equity Holders" />} />
          <Route path="/accounts/board-of-directors" element={<ComingSoon title="Board of Directors" />} />

          {/* Support */}
          <Route path="/support/general"      element={<ComingSoon title="General" />} />
          <Route path="/support/activity-log" element={<ComingSoon title="Activity Log" />} />
          <Route path="/support/settings"     element={<ComingSoon title="Settings" />} />

          {/* Catch-all */}
          <Route path="*" element={<Navigate to="/departments" replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
