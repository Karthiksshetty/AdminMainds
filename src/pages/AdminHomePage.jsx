import React, { useState } from 'react';
import { FaHome, FaUsers, FaFolderOpen, FaCalendarAlt, FaFileAlt, FaChartPie, FaCog, FaBookOpen, FaUndo } from 'react-icons/fa';
import { BsBell } from 'react-icons/bs';
import { AiOutlineSearch } from 'react-icons/ai';
import AdminHomeContent from './AdminHomeContent'; // Import specific content components
import UserContent from './UserContent'; // Assuming UserContent is default exported
import CarouselContent from './CarouselContent'; // Assuming CarouselContent is default exported
import ToolsContent from './ToolsContent';
import InternContent from './InternContent';
import SettingContent from './SettingContent';
import AttendenceContent from './AttendenceContent'; // Adjust the path if necessary
import LogoutContent from './LogoutContent';
import JobContent from './JobContent'
import { FaFaceAngry } from 'react-icons/fa6';

const AdminHomePage = () => {
  const [activeSection, setActiveSection] = useState('AdminHomePage');

  const handleSectionChange = (section) => {
    setActiveSection(section);
  };

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="w-64 bg-gray-900 text-white flex flex-col">
        <div className="p-4 flex items-center">
          <span className="text-2xl font-bold">Logo</span>
        </div>
        <nav className="flex-1 p-4">
          <ul>
            <li className={`mb-4 flex items-center gap-3 cursor-pointer p-2 rounded ${activeSection === 'AdminHomePage' ? 'bg-gray-700' : 'hover:bg-gray-700'}`} onClick={() => handleSectionChange('AdminHomePage')}>
              <FaHome className="text-xl" />
              <span className="text-sm">Admin Home Page</span>
            </li>
            <li className={`mb-4 flex items-center gap-3 cursor-pointer p-2 rounded ${activeSection === 'User' ? 'bg-gray-700' : 'hover:bg-gray-700'}`} onClick={() => handleSectionChange('User')}>
              <FaUsers className="text-xl" />
              <span className="text-sm">User</span>
            </li>
            <li className={`mb-4 flex items-center gap-3 cursor-pointer p-2 rounded ${activeSection === 'Carousel' ? 'bg-gray-700' : 'hover:bg-gray-700'}`} onClick={() => handleSectionChange('Carousel')}>
              <FaFolderOpen className="text-xl" />
              <span className="text-sm">Carousel</span>
            </li>
            <li className={`mb-4 flex items-center gap-3 cursor-pointer p-2 rounded ${activeSection === 'Tools' ? 'bg-gray-700' : 'hover:bg-gray-700'}`} onClick={() => handleSectionChange('Tools')}>
              <FaChartPie className="text-xl" />
              <span className="text-sm">Tools</span>
            </li>
            <li className={`mb-4 flex items-center gap-3 cursor-pointer p-2 rounded ${activeSection === 'Jobs' ? 'bg-gray-700' : 'hover:bg-gray-700'}`} onClick={() => handleSectionChange('Jobs')}>
              <FaFileAlt className="text-xl" />
              <span className="text-sm">Jobs</span>
            </li>
            <li className={`mb-4 flex items-center gap-3 cursor-pointer p-2 rounded ${activeSection === 'Internship' ? 'bg-gray-700' : 'hover:bg-gray-700'}`} onClick={() => handleSectionChange('Internship')}>
              <FaBookOpen className="text-xl" />
              <span className="text-sm">Internship</span>
            </li>
            <li className={`mb-4 flex items-center gap-3 cursor-pointer p-2 rounded ${activeSection === 'Attendance' ? 'bg-gray-700' : 'hover:bg-gray-700'}`} onClick={() => handleSectionChange('Attendance')}>
              <FaBookOpen className="text-xl" />
              <span className="text-sm">Attendance</span>
            </li>
            <li className={`mb-4 flex items-center gap-3 cursor-pointer p-2 rounded ${activeSection === 'Settings' ? 'bg-gray-700' : 'hover:bg-gray-700'}`} onClick={() => handleSectionChange('Settings')}>
              <FaCog className="text-xl" />
              <span className="text-sm">Settings</span>
            </li>
            <li className={`mb-4 flex items-center gap-3 cursor-pointer p-2 rounded ${activeSection === 'Logout' ? 'bg-gray-700' : 'hover:bg-gray-700'}`} onClick={() => handleSectionChange('Logout')}>
              <FaUndo className="text-xl" />
              <span className="text-sm">Logout</span>
            </li>
            {/* Add other sections similarly */}
          </ul>
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Top Bar */}
        <div className="flex items-center justify-between bg-white p-4 shadow-md">
          <div className="flex items-center w-full max-w-lg bg-gray-200 rounded-lg overflow-hidden">
            <AiOutlineSearch className="text-gray-600 ml-2" />
            <input
              type="text"
              placeholder="Search..."
              className="bg-gray-200 p-2 w-full focus:outline-none"
            />
          </div>
          <div className="flex items-center gap-4">
            <BsBell className="text-xl text-gray-600 cursor-pointer" />
            <div className="flex items-center gap-2">
              <img
                src="https://via.placeholder.com/40"
                alt="Profile"
                className="rounded-full w-10 h-10"
              />
              <span className="text-gray-600">Tom Cook</span>
            </div>
          </div>
        </div>

        {/* Content Area */}
        <div className="flex-1 p-4">
          {/* Render different content based on activeSection */}
          {activeSection === 'AdminHomePage' && <AdminHomeContent />}
          {activeSection === 'User' && <UserContent />}
          {activeSection === 'Carousel' && <CarouselContent />}
          {activeSection === 'Tools' && <ToolsContent />}
          {activeSection === 'Internship' && <InternContent />}
          {activeSection === 'Attendance' && <AttendenceContent />}
          {activeSection === 'Settings' && <SettingContent />}
          {activeSection === 'Logout' && <LogoutContent />}
          {activeSection === 'Jobs' && <JobContent/>}
          {/* Add other sections similarly */}
        </div>
      </div>
    </div>
  );
};

export default AdminHomePage;





