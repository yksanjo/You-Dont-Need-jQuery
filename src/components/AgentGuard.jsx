import { Bot, AlertCircle, CheckCircle, Activity, Shield, TrendingUp, Clock } from 'lucide-react';
import { agentGuardData } from '../utils/demoData';

export default function AgentGuard() {
  const { stats, agents, activeThreats, behavioralMetrics } = agentGuardData;

  const statusColors = {
    healthy: 'bg-green-100 text-green-800 border-green-300',
    'at-risk': 'bg-orange-100 text-orange-800 border-orange-300',
    critical: 'bg-red-100 text-red-800 border-red-300'
  };

  const threatSeverityColors = {
    Critical: 'bg-red-100 text-red-800 border-red-300',
    High: 'bg-orange-100 text-orange-800 border-orange-300',
    Medium: 'bg-yellow-100 text-yellow-800 border-yellow-300'
  };

  const threatStatusColors = {
    investigating: 'bg-blue-100 text-blue-800',
    contained: 'bg-yellow-100 text-yellow-800',
    resolved: 'bg-green-100 text-green-800'
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center space-x-3 mb-2">
            <Bot className="h-10 w-10 text-purple-600" />
            <h1 className="text-3xl font-bold text-gray-900">AgentGuard Enterprise</h1>
          </div>
          <p className="text-gray-600">AI agent security monitoring and autonomous threat detection</p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-xl shadow-sm border border-purple-100 p-6">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium text-gray-600">Total Agents</span>
              <Bot className="h-5 w-5 text-purple-600" />
            </div>
            <div className="text-3xl font-bold text-gray-900">
              {stats.totalAgents.toLocaleString()}
            </div>
            <div className="text-sm text-green-600 mt-2 flex items-center">
              <TrendingUp className="h-4 w-4 mr-1" />
              {stats.activeAgents} active
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm border border-green-100 p-6">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium text-gray-600">Healthy Agents</span>
              <CheckCircle className="h-5 w-5 text-green-600" />
            </div>
            <div className="text-3xl font-bold text-green-600">
              {stats.healthyAgents.toLocaleString()}
            </div>
            <div className="text-sm text-gray-500 mt-2">
              {((stats.healthyAgents / stats.totalAgents) * 100).toFixed(1)}% of total
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm border border-orange-100 p-6">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium text-gray-600">At Risk Agents</span>
              <AlertCircle className="h-5 w-5 text-orange-600" />
            </div>
            <div className="text-3xl font-bold text-orange-600">
              {stats.atRiskAgents}
            </div>
            <div className="text-sm text-gray-500 mt-2">
              Requires attention
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm border border-red-100 p-6">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium text-gray-600">Active Threats</span>
              <Shield className="h-5 w-5 text-red-600" />
            </div>
            <div className="text-3xl font-bold text-red-600">
              {stats.threatsDetected}
            </div>
            <div className="text-sm text-gray-500 mt-2">
              Under investigation
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          {/* Active Threats */}
          <div className="lg:col-span-2 bg-white rounded-xl shadow-sm border border-purple-100 p-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-semibold text-gray-900">Active Threats</h2>
              <AlertCircle className="h-5 w-5 text-red-600" />
            </div>
            <div className="space-y-4">
              {activeThreats.map((threat) => (
                <div
                  key={threat.id}
                  className="border rounded-lg p-4 hover:shadow-md transition-shadow"
                >
                  <div className="flex items-start justify-between mb-2">
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-2">
                        <span className={`px-2 py-1 rounded text-xs font-semibold border ${threatSeverityColors[threat.severity]}`}>
                          {threat.severity}
                        </span>
                        <span className="text-sm font-medium text-gray-900">{threat.type}</span>
                        <span className={`px-2 py-1 rounded text-xs font-medium ${threatStatusColors[threat.status]}`}>
                          {threat.status.toUpperCase()}
                        </span>
                      </div>
                      <p className="text-sm font-medium text-gray-700 mb-1">
                        {threat.agentName} ({threat.agentId})
                      </p>
                      <p className="text-sm text-gray-600 mb-2">{threat.description}</p>
                      <div className="text-xs text-gray-500">
                        Detected {threat.detected}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Behavioral Metrics */}
          <div className="bg-white rounded-xl shadow-sm border border-purple-100 p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Behavioral Analysis</h2>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between text-sm mb-2">
                  <span className="text-gray-600">Normal Requests</span>
                  <span className="font-semibold text-green-600">{behavioralMetrics.normalRequests}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-green-600 h-2 rounded-full"
                    style={{ width: `${behavioralMetrics.normalRequests}%` }}
                  />
                </div>
              </div>
              <div>
                <div className="flex justify-between text-sm mb-2">
                  <span className="text-gray-600">Suspicious Requests</span>
                  <span className="font-semibold text-orange-600">{behavioralMetrics.suspiciousRequests}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-orange-600 h-2 rounded-full"
                    style={{ width: `${behavioralMetrics.suspiciousRequests}%` }}
                  />
                </div>
              </div>
              <div>
                <div className="flex justify-between text-sm mb-2">
                  <span className="text-gray-600">Blocked Requests</span>
                  <span className="font-semibold text-red-600">{behavioralMetrics.blockedRequests}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-red-600 h-2 rounded-full"
                    style={{ width: `${behavioralMetrics.blockedRequests}%` }}
                  />
                </div>
              </div>
            </div>
            <div className="mt-6 pt-6 border-t">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-gray-600">Avg Response Time</span>
                <Clock className="h-4 w-4 text-purple-600" />
              </div>
              <div className="text-2xl font-bold text-gray-900">
                {stats.avgResponseTime}ms
              </div>
            </div>
          </div>
        </div>

        {/* Agent List */}
        <div className="bg-white rounded-xl shadow-sm border border-purple-100 p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-semibold text-gray-900">Agent Status</h2>
            <Activity className="h-5 w-5 text-purple-600" />
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">Agent ID</th>
                  <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">Name</th>
                  <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">Status</th>
                  <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">Requests</th>
                  <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">Threats</th>
                  <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">Uptime</th>
                  <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">Location</th>
                  <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">Last Activity</th>
                </tr>
              </thead>
              <tbody>
                {agents.map((agent) => (
                  <tr key={agent.id} className="border-b border-gray-100 hover:bg-gray-50">
                    <td className="py-3 px-4 text-sm font-mono text-gray-900">{agent.id}</td>
                    <td className="py-3 px-4 text-sm text-gray-700">{agent.name}</td>
                    <td className="py-3 px-4">
                      <span className={`px-2 py-1 rounded text-xs font-semibold border ${statusColors[agent.status]}`}>
                        {agent.status}
                      </span>
                    </td>
                    <td className="py-3 px-4 text-sm text-gray-700">{agent.requests.toLocaleString()}</td>
                    <td className="py-3 px-4 text-sm">
                      {agent.threats > 0 ? (
                        <span className="text-red-600 font-semibold">{agent.threats}</span>
                      ) : (
                        <span className="text-green-600">0</span>
                      )}
                    </td>
                    <td className="py-3 px-4 text-sm text-gray-700">{agent.uptime}</td>
                    <td className="py-3 px-4 text-sm text-gray-600">{agent.location}</td>
                    <td className="py-3 px-4 text-sm text-gray-500">{agent.lastActivity}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Enterprise Features */}
        <div className="mt-8 bg-gradient-to-r from-purple-600 to-purple-700 rounded-xl shadow-lg p-6 text-white">
          <div className="flex items-start justify-between">
            <div>
              <h3 className="text-xl font-semibold mb-2">Enterprise-Grade AI Agent Security</h3>
              <p className="text-purple-100 mb-4">
                Monitor, protect, and respond to threats across all your AI agents with autonomous 
                threat hunting and real-time behavioral analysis.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-purple-800 rounded-lg p-3">
                  <div className="text-sm text-purple-200 mb-1">Autonomous Threat Hunter</div>
                  <div className="text-lg font-semibold">Self-learning AI</div>
                </div>
                <div className="bg-purple-800 rounded-lg p-3">
                  <div className="text-sm text-purple-200 mb-1">Zero-day Protection</div>
                  <div className="text-lg font-semibold">Real-time Detection</div>
                </div>
                <div className="bg-purple-800 rounded-lg p-3">
                  <div className="text-sm text-purple-200 mb-1">Context-Aware Access</div>
                  <div className="text-lg font-semibold">Dynamic Policies</div>
                </div>
                <div className="bg-purple-800 rounded-lg p-3">
                  <div className="text-sm text-purple-200 mb-1">Integration Ready</div>
                  <div className="text-lg font-semibold">IAM Compatible</div>
                </div>
              </div>
            </div>
            <div className="text-right">
              <div className="text-3xl font-bold mb-1">{stats.healthyAgents}</div>
              <div className="text-purple-200 text-sm">Agents Protected</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

