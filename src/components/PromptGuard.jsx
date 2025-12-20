import { Shield, AlertTriangle, CheckCircle, XCircle, TrendingUp, Clock, Activity } from 'lucide-react';
import { promptGuardData } from '../utils/demoData';

export default function PromptGuard() {
  const { stats, recentThreats, hourlyStats } = promptGuardData;
  
  const severityColors = {
    Critical: 'bg-red-100 text-red-800 border-red-300',
    High: 'bg-orange-100 text-orange-800 border-orange-300',
    Medium: 'bg-yellow-100 text-yellow-800 border-yellow-300',
    Low: 'bg-blue-100 text-blue-800 border-blue-300'
  };

  const maxRequests = Math.max(...hourlyStats.map(h => h.requests));

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center space-x-3 mb-2">
            <Shield className="h-10 w-10 text-blue-600" />
            <h1 className="text-3xl font-bold text-gray-900">PromptGuard</h1>
          </div>
          <p className="text-gray-600">Real-time prompt injection prevention and threat detection</p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-xl shadow-sm border border-blue-100 p-6">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium text-gray-600">Total Requests</span>
              <Activity className="h-5 w-5 text-blue-600" />
            </div>
            <div className="text-3xl font-bold text-gray-900">
              {stats.totalRequests.toLocaleString()}
            </div>
            <div className="text-sm text-green-600 mt-2 flex items-center">
              <TrendingUp className="h-4 w-4 mr-1" />
              +12.3% from last hour
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm border border-red-100 p-6">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium text-gray-600">Threats Blocked</span>
              <XCircle className="h-5 w-5 text-red-600" />
            </div>
            <div className="text-3xl font-bold text-red-600">
              {stats.blockedRequests.toLocaleString()}
            </div>
            <div className="text-sm text-gray-500 mt-2">
              {((stats.blockedRequests / stats.totalRequests) * 100).toFixed(3)}% of requests
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm border border-green-100 p-6">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium text-gray-600">Accuracy</span>
              <CheckCircle className="h-5 w-5 text-green-600" />
            </div>
            <div className="text-3xl font-bold text-green-600">
              {stats.accuracy}%
            </div>
            <div className="text-sm text-gray-500 mt-2">
              {stats.falsePositives} false positives
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm border border-blue-100 p-6">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium text-gray-600">Avg Response Time</span>
              <Clock className="h-5 w-5 text-blue-600" />
            </div>
            <div className="text-3xl font-bold text-gray-900">
              {stats.avgResponseTime}ms
            </div>
            <div className="text-sm text-green-600 mt-2">
              < 15ms target
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          {/* Recent Threats */}
          <div className="lg:col-span-2 bg-white rounded-xl shadow-sm border border-blue-100 p-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-semibold text-gray-900">Recent Threats</h2>
              <AlertTriangle className="h-5 w-5 text-red-600" />
            </div>
            <div className="space-y-3">
              {recentThreats.map((threat) => (
                <div
                  key={threat.id}
                  className="border rounded-lg p-4 hover:shadow-md transition-shadow"
                >
                  <div className="flex items-start justify-between mb-2">
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-1">
                        <span className={`px-2 py-1 rounded text-xs font-semibold border ${severityColors[threat.severity]}`}>
                          {threat.severity}
                        </span>
                        <span className="text-sm font-medium text-gray-900">{threat.type}</span>
                        {threat.blocked && (
                          <span className="px-2 py-1 bg-red-100 text-red-800 text-xs rounded font-medium">
                            BLOCKED
                          </span>
                        )}
                      </div>
                      <p className="text-sm text-gray-600 mb-1">{threat.pattern}</p>
                      <div className="flex items-center space-x-4 text-xs text-gray-500">
                        <span>{threat.timestamp}</span>
                        <span>•</span>
                        <span>{threat.source}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Hourly Stats Chart */}
          <div className="bg-white rounded-xl shadow-sm border border-blue-100 p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Hourly Activity</h2>
            <div className="space-y-2">
              {hourlyStats.slice(-12).map((stat, idx) => (
                <div key={idx} className="flex items-center space-x-3">
                  <span className="text-xs text-gray-500 w-12">{stat.hour}</span>
                  <div className="flex-1 bg-gray-100 rounded-full h-6 relative overflow-hidden">
                    <div
                      className="bg-blue-600 h-full rounded-full transition-all"
                      style={{ width: `${(stat.requests / maxRequests) * 100}%` }}
                    />
                    {stat.blocked > 0 && (
                      <div
                        className="bg-red-600 h-full absolute top-0 right-0 rounded-full"
                        style={{ width: `${(stat.blocked / stat.requests) * 100}%` }}
                      />
                    )}
                  </div>
                  <span className="text-xs text-gray-700 w-16 text-right">
                    {stat.requests.toLocaleString()}
                  </span>
                </div>
              ))}
            </div>
            <div className="mt-4 flex items-center space-x-4 text-xs">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-blue-600 rounded"></div>
                <span className="text-gray-600">Requests</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-red-600 rounded"></div>
                <span className="text-gray-600">Blocked</span>
              </div>
            </div>
          </div>
        </div>

        {/* API Integration Info */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl shadow-lg p-6 text-white">
          <div className="flex items-start justify-between">
            <div>
              <h3 className="text-xl font-semibold mb-2">Ready to Integrate?</h3>
              <p className="text-blue-100 mb-4">
                Add PromptGuard to your AI applications with a single API call. 
                Protect against prompt injection, jailbreak attempts, and data exfiltration.
              </p>
              <div className="bg-blue-800 rounded-lg p-4 font-mono text-sm">
                <div className="text-blue-200 mb-1">curl -X POST https://api.promptguard.ai/v1/validate \</div>
                <div className="text-blue-200 mb-1">  -H "Authorization: Bearer YOUR_API_KEY" \</div>
                <div className="text-blue-200">  -d '{"prompt": "user input here"}'</div>
              </div>
            </div>
            <div className="text-right">
              <div className="text-3xl font-bold mb-1">99.96%</div>
              <div className="text-blue-200 text-sm">Accuracy Rate</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

