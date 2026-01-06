// Real-time Analytics Dashboard Component
// This adds live data visualization and AI insights

const RealTimeAnalytics = () => {
  const [metrics, setMetrics] = useState({
    conversionRate: 0,
    engagementScore: 0,
    aiConfidence: 0,
    userSatisfaction: 0,
    revenueImpact: 0
  });

  const [liveData, setLiveData] = useState({
    activeUsers: 0,
    ordersToday: 0,
    avgOrderValue: 0,
    topProducts: []
  });

  useEffect(() => {
    // Simulate real-time metrics updates
    const metricsTimer = setInterval(() => {
      setMetrics(prev => ({
        conversionRate: Math.min(100, prev.conversionRate + Math.random() * 2),
        engagementScore: Math.min(100, prev.engagementScore + Math.random() * 1.5),
        aiConfidence: Math.min(100, prev.aiConfidence + Math.random() * 1),
        userSatisfaction: Math.min(100, prev.userSatisfaction + Math.random() * 0.8),
        revenueImpact: Math.min(100, prev.revenueImpact + Math.random() * 2.5)
      }));
    }, 2000);

    // Simulate live business data
    const dataTimer = setInterval(() => {
      setLiveData(prev => ({
        activeUsers: Math.max(50, prev.activeUsers + Math.floor(Math.random() * 20) - 10),
        ordersToday: prev.ordersToday + Math.floor(Math.random() * 3),
        avgOrderValue: 150 + Math.random() * 100,
        topProducts: [
          { name: 'Wireless Headphones', sales: Math.floor(Math.random() * 50) + 100 },
          { name: 'Phone Cases', sales: Math.floor(Math.random() * 30) + 80 },
          { name: 'Chargers', sales: Math.floor(Math.random() * 25) + 60 }
        ]
      }));
    }, 5000);

    return () => {
      clearInterval(metricsTimer);
      clearInterval(dataTimer);
    };
  }, []);

  return (
    <div className="analytics-dashboard glass-morphism" style={{
      position: 'fixed',
      top: '20px',
      left: '20px',
      width: '300px',
      padding: '20px',
      borderRadius: '15px',
      zIndex: 1001,
      fontSize: '12px'
    }}>
      <h4 className="neon-glow">📊 Live Analytics</h4>
      
      <div className="metrics-grid" style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '10px',
        marginBottom: '15px'
      }}>
        {Object.entries(metrics).map(([key, value]) => (
          <div key={key} className="metric-card" style={{
            background: 'rgba(255,255,255,0.1)',
            padding: '8px',
            borderRadius: '8px',
            textAlign: 'center'
          }}>
            <div style={{fontSize: '16px', fontWeight: 'bold', color: '#4caf50'}}>
              {Math.round(value)}%
            </div>
            <div style={{fontSize: '10px', textTransform: 'capitalize'}}>
              {key.replace(/([A-Z])/g, ' $1').trim()}
            </div>
          </div>
        ))}
      </div>

      <div className="live-stats" style={{marginBottom: '15px'}}>
        <div style={{display: 'flex', justifyContent: 'space-between', marginBottom: '5px'}}>
          <span>Active Users:</span>
          <span className="pulse" style={{color: '#4caf50'}}>{liveData.activeUsers}</span>
        </div>
        <div style={{display: 'flex', justifyContent: 'space-between', marginBottom: '5px'}}>
          <span>Orders Today:</span>
          <span style={{color: '#2196f3'}}>{liveData.ordersToday}</span>
        </div>
        <div style={{display: 'flex', justifyContent: 'space-between'}}>
          <span>Avg Order:</span>
          <span style={{color: '#ff9800'}}>${Math.round(liveData.avgOrderValue)}</span>
        </div>
      </div>

      <div className="ai-insights" style={{
        background: 'linear-gradient(135deg, #667eea, #764ba2)',
        color: 'white',
        padding: '10px',
        borderRadius: '8px',
        fontSize: '11px'
      }}>
        <div style={{fontWeight: 'bold', marginBottom: '5px'}}>🤖 AI Insights</div>
        <div>• Upsell timing optimized for +23% conversion</div>
        <div>• Voice commands increase engagement by 45%</div>
        <div>• AR preview boosts purchase confidence by 67%</div>
      </div>
    </div>
  );
};

// Enhanced Performance Monitor
const PerformanceMonitor = () => {
  const [performance, setPerformance] = useState({
    loadTime: 0,
    interactions: 0,
    scrollDepth: 0,
    timeOnPage: 0
  });

  useEffect(() => {
    const startTime = performance.now();
    
    const updatePerformance = () => {
      setPerformance(prev => ({
        loadTime: Math.round(performance.now() - startTime),
        interactions: prev.interactions + 1,
        scrollDepth: Math.round((window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100),
        timeOnPage: Math.round((performance.now() - startTime) / 1000)
      }));
    };

    // Track interactions
    document.addEventListener('click', updatePerformance);
    document.addEventListener('scroll', updatePerformance);
    
    const timer = setInterval(() => {
      setPerformance(prev => ({
        ...prev,
        timeOnPage: Math.round((performance.now() - startTime) / 1000)
      }));
    }, 1000);

    return () => {
      document.removeEventListener('click', updatePerformance);
      document.removeEventListener('scroll', updatePerformance);
      clearInterval(timer);
    };
  }, []);

  return (
    <div className="performance-monitor" style={{
      position: 'fixed',
      bottom: '20px',
      left: '20px',
      background: 'rgba(0,0,0,0.8)',
      color: 'white',
      padding: '10px',
      borderRadius: '8px',
      fontSize: '11px',
      zIndex: 1001
    }}>
      <div>Load: {performance.loadTime}ms</div>
      <div>Interactions: {performance.interactions}</div>
      <div>Scroll: {performance.scrollDepth}%</div>
      <div>Time: {performance.timeOnPage}s</div>
    </div>
  );
};

// A/B Test Indicator
const ABTestIndicator = ({ variant = 'enhanced' }) => {
  return (
    <div className="ab-test-indicator" style={{
      position: 'fixed',
      top: '20px',
      right: '20px',
      background: variant === 'enhanced' ? '#4caf50' : '#ff9800',
      color: 'white',
      padding: '8px 12px',
      borderRadius: '20px',
      fontSize: '12px',
      fontWeight: 'bold',
      zIndex: 1001,
      animation: 'pulse 2s infinite'
    }}>
      🧪 Variant: {variant.toUpperCase()}
    </div>
  );
};

// Export components for use in main dashboard
if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    RealTimeAnalytics,
    PerformanceMonitor,
    ABTestIndicator
  };
}
