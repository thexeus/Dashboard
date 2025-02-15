import { useState, useEffect } from "react";



function System(){
    const [cpuUsage, setCpuUsage] = useState(0);
    const [ramUsage, setRamUsage] = useState({ used: 0, total: 0 });
    const [diskSpace, setDiskSpace] = useState("Loading...");
  
    useEffect(() => {
      // Simulated system stats (Replace with actual API calls if needed)
      const fetchSystemStats = () => {
        setCpuUsage(45); // Example static value
        setRamUsage({ used: 3.2, total: 8 }); // Example static value
        setDiskSpace("120 GB free"); // Example static value
      };
  
      fetchSystemStats();
      const interval = setInterval(fetchSystemStats, 1000); // Refresh every 5s
  
      return () => clearInterval(interval);
    }, []);
  
    return (
      <div className="stats-widget">
        <h2>System Stats</h2>
        <hr  />
        <p>CPU Usage: {cpuUsage}%</p>
        <p>RAM Usage: {ramUsage.used} GB / {ramUsage.total} GB</p>
        <p>Disk Space: {diskSpace}</p>
      </div>
    );
  }

export default System