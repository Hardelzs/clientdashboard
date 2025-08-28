import React from "react";
import "../css/RecentActivity.css";

const RecentActivity = () => {
  const projects = [
    { name: "App Development", status: "Success" },
    { name: "Logo Design", status: "Processing" },
    { name: "Server setup", status: "Success" },
    { name: "Front-end Design", status: "Processing" },
    { name: "Web Development", status: "Success" },
  ];

  return (
    <div className="recent">
      <h3>Recent activity</h3>
      <table>
        <thead>
          <tr>
            <th>Project</th>
            <th>Start Date</th>
            <th>End Date</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {projects.map((p, i) => (
            <tr key={i}>
              <td>{p.name}</td>
              <td>15 Aug, 2020</td>
              <td>22 Aug, 2020</td>
              <td className={p.status.toLowerCase()}>{p.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default RecentActivity;
