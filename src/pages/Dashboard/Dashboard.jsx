import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import CountUp from 'react-countup';
import Style from './Dashboard.module.css';
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import img1 from "../../assets/Dashboard/1.webp"; 
import img2 from "../../assets/Dashboard/2.webp"; 
import img3 from "../../assets/Dashboard/3.webp"; 

const Dashboard = () => {
  const [activeSection, setActiveSection] = useState('overview');
  const [loading, setLoading] = useState(true);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const navigate = useNavigate();

  // --- 1. Portfolio Metric Data State ---
  // Represents live project stats instead of generic server data
  const [projectMetrics, setProjectMetrics] = useState([
    { name: 'Portfolio V2', type: 'React App', progress: 95, status: 'Live', trend: 'stable' },
    { name: 'E-Com API', type: 'Node Backend', progress: 80, status: 'Testing', trend: 'up' },
    { name: 'AI Chatbot', type: 'Python/ML', progress: 45, status: 'In Dev', trend: 'up' },
    { name: 'Client CRM', type: 'Dashboard', progress: 100, status: 'Delivered', trend: 'stable' }
  ]);

  // --- 2. Initial Load Effect ---
  // Simulates fetching data from an API
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 800);
    return () => clearTimeout(timer);
  }, []);

  // --- 3. Refresh Handler ---
  // Simulates refreshing live data
  const handleRefresh = () => {
    setIsRefreshing(true);
    setTimeout(() => {
      // Randomize progress slightly to simulate activity
      const updatedMetrics = projectMetrics.map(project => ({
        ...project,
        progress: project.status === 'Delivered' ? 100 : Math.min(100, project.progress + Math.floor(Math.random() * 5))
      }));
      setProjectMetrics(updatedMetrics);
      setIsRefreshing(false);
    }, 1000);
    navigate("/Error");
  };

  // --- 4. Navigation Menu Items ---
  // Simplified for a personal portfolio dashboard
  const menuItems = [
    { id: 'overview', label: 'Overview', icon: '⚡' },
    { id: 'projects', label: 'Projects', icon: '💻' },
    { id: 'github', label: 'Code Stats', icon: '🐙' },
    { id: 'performance', label: 'Site Health', icon: '🚀' }
  ];

  // --- 5. Key Statistics Data ---
  // High-level overview of your professional career
  const statsData = [
    { label: 'Total Clients', value: 14, prefix: '', suffix: '', change: '+2 this month', icon: '🤝', trend: 'up' },
    { label: 'Lines of Code', value: 154000, prefix: '', suffix: '+', change: '+1.2k', icon: '👨‍💻', trend: 'up' },
    { label: 'Hours Coded', value: 3200, prefix: '', suffix: '', change: 'Since 2021', icon: '⏱️', trend: 'stable' },
    { label: 'Coffee Cups', value: 850, prefix: '', suffix: '', change: 'Fuel', icon: '☕', trend: 'up' }
  ];

  // --- 6. Chart Data: Monthly Contributions ---
  // Visualizes your coding activity over the year
  const monthlyContributions = [
    { month: "Jan", value: 120 }, { month: "Feb", value: 145 }, { month: "Mar", value: 180 },
    { month: "Apr", value: 160 }, { month: "May", value: 210 }, { month: "Jun", value: 190 },
    { month: "Jul", value: 230 }, { month: "Aug", value: 250 },
  ];
  const maxContrib = Math.max(...monthlyContributions.map(m => m.value));

  // --- 7. Tech Stack Distribution ---
  // Shows where your expertise lies
  const techStack = [
    { category: 'React/Next', percentage: 45, color: '#f59e0b' }, // Amber
    { category: 'Node/Express', percentage: 25, color: '#3b82f6' }, // Blue
    { category: 'Python/AI', percentage: 20, color: '#10b981' }, // Green
    { category: 'DevOps', percentage: 10, color: '#ef4444' }  // Red
  ];

  /* --- RENDER FUNCTIONS --- */

  // --- 8. Overview Section ---
  const renderOverview = () => (
    <div className={`${Style.sectionContent} ${Style.fadeIn}`}>
      
      {/* Welcome Banner */}
      <div className={Style.welcomeBanner}>
        <div className={Style.welcomeText}>
          <h2>Henry's Developer Command Center</h2>
          <p>Real-time metrics on projects, code frequency, and system performance.</p>
        </div>
        <div className={Style.quickActions}>
          <button className={Style.actionBtnPrimary} onClick={() => navigate('/Error')}>
            <span>🚀</span> Deploy Portfolio
          </button>
          <button className={Style.actionBtn} onClick={handleRefresh}>
            <span>🔄</span> {isRefreshing ? 'Syncing...' : 'Sync Data'}
          </button>
        </div>
      </div>

      {/* Key Stats Grid */}
      <div className={Style.statsGrid}>
        {statsData.map((stat, index) => (
          <div key={index} className={Style.statCard}>
            <div className={Style.statHeader}>
              <div className={Style.statIcon}>{stat.icon}</div>
              <span className={`${Style.statChange} ${stat.trend === 'up' ? Style.trendUp : Style.trendStable}`}>
                {stat.change}
              </span>
            </div>
            <h3>
              <CountUp start={0} end={stat.value} duration={2.5} separator="," prefix={stat.prefix} suffix={stat.suffix} />
            </h3>
            <p>{stat.label}</p>
          </div>
        ))}
      </div>

      {/* Charts Row */}
      <div className={Style.chartsSection}>
        
        {/* Contribution Activity Chart */}
        <div className={Style.chartCard}>
          <div className={Style.chartHeader}>
            <div>
              <h3>Code Velocity</h3>
              <span className={Style.chartSubtitle}>Commits & Contributions (2025)</span>
            </div>
            <button className={Style.chartBtn} onClick={() => navigate('/Error')}>GitHub Profile</button>
          </div>
          <div className={Style.barChartContainer}>
            {monthlyContributions.map((data, index) => (
              <div key={index} className={Style.barGroup}>
                <div 
                  className={Style.bar} 
                  style={{ height: `${(data.value / maxContrib) * 100}%`, animationDelay: `${index * 0.1}s` }}
                >
                  <span className={Style.barTooltip}>{data.value} Commits</span>
                </div>
                <span className={Style.barLabel}>{data.month}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Tech Stack Donut Chart */}
        <div className={Style.chartCard}>
          <div className={Style.chartHeader}>
            <h3>Skill Distribution</h3>
          </div>
          <div className={Style.donutChartContainer}>
            <div className={Style.donutChart}>
              {techStack.map((item, index) => (
                <div 
                  key={index}
                  className={Style.donutSegment}
                  style={{ 
                    '--percentage': item.percentage,
                    '--color': item.color,
                    '--offset': techStack.slice(0, index).reduce((a, b) => a + b.percentage, 0)
                  }}
                ></div>
              ))}
              <div className={Style.donutCenter}>
                <span>Focus</span>
                <strong>Full Stack</strong>
              </div>
            </div>
            <div className={Style.legend}>
              {techStack.map((item, index) => (
                <div key={index} className={Style.legendItem}>
                  <span className={Style.legendColor} style={{ backgroundColor: item.color }}></span>
                  <span>{item.category} ({item.percentage}%)</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Project Status Grid */}
      <div className={Style.gridTwoColumn}>
        <div className={Style.gridCard}>
          <div className={Style.cardHeader}>
            <h3>Active Development</h3>
            <span className={Style.liveIndicator}>● Live Status</span>
          </div>
          <div className={Style.listContainer}>
            {projectMetrics.map((project, index) => (
              <div key={index} className={Style.listItem}>
                <div className={Style.projectIcon}>
                  {project.type.includes('React') ? '⚛️' : project.type.includes('Node') ? '🟢' : '🐍'}
                </div>
                <div className={Style.itemInfo}>
                  <span className={Style.itemName}>{project.name}</span>
                  <span className={Style.itemSub}>{project.type} • {project.status}</span>
                </div>
                <div className={Style.itemMeta}>
                  <div className={Style.loadBar}>
                    <div 
                      className={Style.loadFill} 
                      style={{ 
                        width: `${project.progress}%`,
                        backgroundColor: project.progress === 100 ? '#10b981' : '#f59e0b'
                      }}
                    ></div>
                  </div>
                  <span className={Style.itemStatus}>{project.progress}% Complete</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Recent Updates Grid */}
        <div className={Style.gridCard}>
          <div className={Style.cardHeader}>
            <h3>System Health</h3>
            <button className={Style.smallBtn} onClick={() => navigate('/Error')}>Full Report</button>
          </div>
          <div className={Style.utilizationGrid}>
            <div className={Style.utilizationItem}>
              <span className={Style.utilLabel}>Site Uptime</span>
              <div className={Style.utilBar}>
                <div className={Style.utilFill} style={{ width: '99.9%' }}></div>
              </div>
              <span className={Style.utilValue}>99.9%</span>
            </div>
            <div className={Style.utilizationItem}>
              <span className={Style.utilLabel}>Page Speed</span>
              <div className={Style.utilBar}>
                <div className={Style.utilFill} style={{ width: '98%' }}></div>
              </div>
              <span className={Style.utilValue}>98/100</span>
            </div>
            <div className={Style.utilizationItem}>
              <span className={Style.utilLabel}>SEO Score</span>
              <div className={Style.utilBar}>
                <div className={Style.utilFill} style={{ width: '92%' }}></div>
              </div>
              <span className={Style.utilValue}>92/100</span>
            </div>
            <div className={Style.utilizationItem}>
              <span className={Style.utilLabel}>Accessibility</span>
              <div className={Style.utilBar}>
                <div className={Style.utilFill} style={{ width: '100%' }}></div>
              </div>
              <span className={Style.utilValue}>100%</span>
            </div>
          </div>
        </div>
      </div>

      {/* Recent Visuals Strip */}
      <div className={Style.imageStrip}>
        <div className={Style.imageCard}>
          <img src={img1} alt="Code Architecture" loading="lazy" />
          <div className={Style.imageOverlay}>
            <span>System Architecture</span>
          </div>
        </div>
        <div className={Style.imageCard}>
          <img src={img2} alt="UI Design System" loading="lazy" />
          <div className={Style.imageOverlay}>
            <span>UI Design System</span>
          </div>
        </div>
        <div className={Style.imageCard}>
          <img src={img3} alt="Deployment Pipeline" loading="lazy" />
          <div className={Style.imageOverlay}>
            <span>Deployment Pipeline</span>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <>
      <Header />
      <div className={Style.dashboardWrapper}>
        <div className={Style.dashboardContainer}>
          {/* Main Content Area - Full Width */}
          <main className={Style.mainContent}>
            {loading ? (
               <div className={Style.loaderContainer}>
                 <div className={Style.spinner}></div>
                 <p>Initializing Dashboard...</p>
               </div>
            ) : (
               renderOverview() // Currently only overview is active for simplicity
            )}
          </main>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Dashboard;