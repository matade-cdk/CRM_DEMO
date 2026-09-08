import { useState } from 'react';
import StatsBar from '../../components/ui/StatsBar/StatsBar';
import DepartmentCard from '../../components/ui/DepartmentCard/DepartmentCard';
import { departments, departmentStats } from '../../data/departments';
import './DepartmentsPage.css';

export default function DepartmentsPage() {
  const [deptList] = useState(departments);

  function handleCardClick(dept) {
    console.log('Open department:', dept.id);
  }

  return (
    <div className="dept-page">
      {/* Page header */}
      <div className="dept-page__header">
        <h1 className="dept-page__title">Departments</h1>
        <button className="dept-page__add-btn" aria-label="Add Department">
          Add Department
        </button>
      </div>

      {/* Stats row */}
      <StatsBar stats={departmentStats} />

      {/* Department grid */}
      <div className="dept-page__grid-container">
        <div className="dept-page__grid">
          {deptList.map((dept) => (
            <DepartmentCard
              key={dept.id}
              department={dept}
              onClick={handleCardClick}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
