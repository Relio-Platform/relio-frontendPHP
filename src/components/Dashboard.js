import React from 'react';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import RightSidebar from './RightSidebar';
import Content from './Content';

function Dashboard() {
  return (
    <div style={{ display: "flex", height: "100vh", width: "100vw" }}>
      <div style={{ flex: "0 0 200px" }}>
        <Sidebar />
      </div>
      <div style={{ flex: "1" }}>
        <Navbar />
        <div style={{ display: "flex", height: "calc(100% - 50px)" }}>
          <div style={{ flex: "1" }}>
            <Content />
          </div>
          <div style={{ flex: "0 0 200px" }}>
            <RightSidebar />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
