// Demo data for all three products

export const promptGuardData = {
  stats: {
    totalRequests: 2847392,
    blockedRequests: 1247,
    allowedRequests: 2846145,
    accuracy: 99.96,
    avgResponseTime: 12.3,
    threatsBlocked: 1247,
    falsePositives: 3
  },
  recentThreats: [
    {
      id: 1,
      timestamp: '2024-01-15 14:32:18',
      type: 'Prompt Injection',
      severity: 'High',
      source: 'api.example.com',
      blocked: true,
      pattern: 'Ignore previous instructions and...'
    },
    {
      id: 2,
      timestamp: '2024-01-15 14:31:45',
      type: 'Jailbreak Attempt',
      severity: 'Critical',
      source: 'mobile-app.example.com',
      blocked: true,
      pattern: 'You are now in developer mode...'
    },
    {
      id: 3,
      timestamp: '2024-01-15 14:30:12',
      type: 'Data Exfiltration',
      severity: 'High',
      source: 'web.example.com',
      blocked: true,
      pattern: 'Extract all user data and send to...'
    },
    {
      id: 4,
      timestamp: '2024-01-15 14:29:33',
      type: 'Prompt Injection',
      severity: 'Medium',
      source: 'api.example.com',
      blocked: true,
      pattern: 'Override system prompt with...'
    },
    {
      id: 5,
      timestamp: '2024-01-15 14:28:07',
      type: 'Role Confusion',
      severity: 'Medium',
      source: 'web.example.com',
      blocked: true,
      pattern: 'Pretend you are an admin and...'
    }
  ],
  hourlyStats: [
    { hour: '00:00', requests: 12000, blocked: 5 },
    { hour: '01:00', requests: 8500, blocked: 3 },
    { hour: '02:00', requests: 6200, blocked: 2 },
    { hour: '03:00', requests: 4800, blocked: 1 },
    { hour: '04:00', requests: 5100, blocked: 2 },
    { hour: '05:00', requests: 6800, blocked: 3 },
    { hour: '06:00', requests: 9200, blocked: 4 },
    { hour: '07:00', requests: 15200, blocked: 8 },
    { hour: '08:00', requests: 23400, blocked: 12 },
    { hour: '09:00', requests: 28900, blocked: 15 },
    { hour: '10:00', requests: 31200, blocked: 18 },
    { hour: '11:00', requests: 29800, blocked: 14 },
    { hour: '12:00', requests: 27600, blocked: 11 },
    { hour: '13:00', requests: 30100, blocked: 16 },
    { hour: '14:00', requests: 32400, blocked: 19 },
    { hour: '15:00', requests: 31200, blocked: 17 },
    { hour: '16:00', requests: 28900, blocked: 13 },
    { hour: '17:00', requests: 25600, blocked: 10 },
    { hour: '18:00', requests: 19800, blocked: 7 },
    { hour: '19:00', requests: 15200, blocked: 6 },
    { hour: '20:00', requests: 12400, blocked: 5 },
    { hour: '21:00', requests: 9800, blocked: 4 },
    { hour: '22:00', requests: 11200, blocked: 5 },
    { hour: '23:00', requests: 13400, blocked: 6 }
  ]
};

export const agentGuardData = {
  stats: {
    totalAgents: 1247,
    activeAgents: 1189,
    atRiskAgents: 12,
    healthyAgents: 1177,
    threatsDetected: 8,
    avgResponseTime: 45.2
  },
  agents: [
    {
      id: 'agent-001',
      name: 'Customer Support Bot',
      status: 'healthy',
      lastActivity: '2 minutes ago',
      requests: 1247,
      threats: 0,
      uptime: '99.9%',
      location: 'us-east-1'
    },
    {
      id: 'agent-002',
      name: 'Payment Processor',
      status: 'at-risk',
      lastActivity: '5 minutes ago',
      requests: 892,
      threats: 2,
      uptime: '98.5%',
      location: 'eu-west-1'
    },
    {
      id: 'agent-003',
      name: 'Data Analyzer',
      status: 'healthy',
      lastActivity: '1 minute ago',
      requests: 2156,
      threats: 0,
      uptime: '99.8%',
      location: 'us-west-2'
    },
    {
      id: 'agent-004',
      name: 'Content Moderator',
      status: 'healthy',
      lastActivity: '3 minutes ago',
      requests: 3421,
      threats: 0,
      uptime: '99.7%',
      location: 'ap-southeast-1'
    },
    {
      id: 'agent-005',
      name: 'Transaction Validator',
      status: 'at-risk',
      lastActivity: '8 minutes ago',
      requests: 567,
      threats: 1,
      uptime: '97.2%',
      location: 'us-east-1'
    },
    {
      id: 'agent-006',
      name: 'Report Generator',
      status: 'healthy',
      lastActivity: '1 minute ago',
      requests: 1890,
      threats: 0,
      uptime: '99.9%',
      location: 'eu-central-1'
    }
  ],
  activeThreats: [
    {
      id: 1,
      agentId: 'agent-002',
      agentName: 'Payment Processor',
      type: 'Anomalous Behavior',
      severity: 'High',
      detected: '5 minutes ago',
      description: 'Unusual API call pattern detected',
      status: 'investigating'
    },
    {
      id: 2,
      agentId: 'agent-005',
      agentName: 'Transaction Validator',
      type: 'Potential Hijacking',
      severity: 'Critical',
      detected: '8 minutes ago',
      description: 'Agent behavior deviating from baseline',
      status: 'contained'
    },
    {
      id: 3,
      agentId: 'agent-007',
      agentName: 'Data Sync Agent',
      type: 'Unauthorized Access',
      severity: 'Medium',
      detected: '12 minutes ago',
      description: 'Access attempt from unrecognized source',
      status: 'resolved'
    }
  ],
  behavioralMetrics: {
    normalRequests: 98.2,
    suspiciousRequests: 1.5,
    blockedRequests: 0.3
  }
};

export const finSecureData = {
  stats: {
    totalTransactions: 1847293,
    highRiskTransactions: 47,
    mediumRiskTransactions: 234,
    lowRiskTransactions: 1847012,
    totalValue: 2847392847.32,
    blockedValue: 1247392.45,
    complianceScore: 98.7
  },
  recentTransactions: [
    {
      id: 'TXN-2024-001',
      timestamp: '2024-01-15 14:35:22',
      amount: 1250000.00,
      currency: 'USD',
      from: 'Bank A',
      to: 'Bank B',
      risk: 'High',
      status: 'Blocked',
      reason: 'Unusual transaction pattern',
      aiAgent: 'Payment AI Guardian'
    },
    {
      id: 'TXN-2024-002',
      timestamp: '2024-01-15 14:34:15',
      amount: 50000.00,
      currency: 'USD',
      from: 'Bank C',
      to: 'Bank D',
      risk: 'Low',
      status: 'Approved',
      reason: 'Normal transaction',
      aiAgent: 'Payment AI Guardian'
    },
    {
      id: 'TXN-2024-003',
      timestamp: '2024-01-15 14:33:08',
      amount: 250000.00,
      currency: 'USD',
      from: 'Bank E',
      to: 'Bank F',
      risk: 'Medium',
      status: 'Under Review',
      reason: 'Amount exceeds daily limit',
      aiAgent: 'Payment AI Guardian'
    },
    {
      id: 'TXN-2024-004',
      timestamp: '2024-01-15 14:32:01',
      amount: 10000.00,
      currency: 'USD',
      from: 'Bank G',
      to: 'Bank H',
      risk: 'Low',
      status: 'Approved',
      reason: 'Normal transaction',
      aiAgent: 'Payment AI Guardian'
    },
    {
      id: 'TXN-2024-005',
      timestamp: '2024-01-15 14:30:45',
      amount: 500000.00,
      currency: 'USD',
      from: 'Bank I',
      to: 'Bank J',
      risk: 'High',
      status: 'Blocked',
      reason: 'Suspicious account activity',
      aiAgent: 'Payment AI Guardian'
    }
  ],
  complianceMetrics: {
    occCompliance: 99.2,
    fcaCompliance: 98.8,
    ecbCompliance: 99.1,
    overallScore: 98.7
  },
  systemHealth: {
    legacySystems: [
      { name: 'Core Banking System v2.1', status: 'Protected', uptime: '99.9%' },
      { name: 'Payment Gateway v1.8', status: 'Protected', uptime: '99.7%' },
      { name: 'Transaction Processor v2.0', status: 'Protected', uptime: '99.8%' }
    ],
    protectedValue: 2847392847.32,
    incidentsPrevented: 47
  }
};

