import { Building2, AlertTriangle, CheckCircle, DollarSign, Shield, TrendingUp, FileText } from 'lucide-react';
import { finSecureData } from '../utils/demoData';

export default function FinSecure() {
  const { stats, recentTransactions, complianceMetrics, systemHealth } = finSecureData;

  const riskColors = {
    High: 'bg-red-100 text-red-800 border-red-300',
    Medium: 'bg-yellow-100 text-yellow-800 border-yellow-300',
    Low: 'bg-green-100 text-green-800 border-green-300'
  };

  const statusColors = {
    Blocked: 'bg-red-100 text-red-800',
    Approved: 'bg-green-100 text-green-800',
    'Under Review': 'bg-yellow-100 text-yellow-800'
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-green-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center space-x-3 mb-2">
            <Building2 className="h-10 w-10 text-green-600" />
            <h1 className="text-3xl font-bold text-gray-900">FinSecure AI</h1>
          </div>
          <p className="text-gray-600">Financial services security suite with AI-powered transaction monitoring</p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-xl shadow-sm border border-green-100 p-6">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium text-gray-600">Total Transactions</span>
              <DollarSign className="h-5 w-5 text-green-600" />
            </div>
            <div className="text-3xl font-bold text-gray-900">
              {stats.totalTransactions.toLocaleString()}
            </div>
            <div className="text-sm text-green-600 mt-2 flex items-center">
              <TrendingUp className="h-4 w-4 mr-1" />
              Today
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm border border-green-100 p-6">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium text-gray-600">Total Value</span>
              <DollarSign className="h-5 w-5 text-green-600" />
            </div>
            <div className="text-3xl font-bold text-gray-900">
              ${(stats.totalValue / 1000000000).toFixed(2)}B
            </div>
            <div className="text-sm text-gray-500 mt-2">
              Processed securely
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm border border-red-100 p-6">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium text-gray-600">High Risk Transactions</span>
              <AlertTriangle className="h-5 w-5 text-red-600" />
            </div>
            <div className="text-3xl font-bold text-red-600">
              {stats.highRiskTransactions}
            </div>
            <div className="text-sm text-gray-500 mt-2">
              ${(stats.blockedValue / 1000000).toFixed(2)}M blocked
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm border border-green-100 p-6">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium text-gray-600">Compliance Score</span>
              <Shield className="h-5 w-5 text-green-600" />
            </div>
            <div className="text-3xl font-bold text-green-600">
              {stats.complianceScore}%
            </div>
            <div className="text-sm text-gray-500 mt-2">
              All standards met
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          {/* Recent Transactions */}
          <div className="lg:col-span-2 bg-white rounded-xl shadow-sm border border-green-100 p-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-semibold text-gray-900">Recent Transactions</h2>
              <Activity className="h-5 w-5 text-green-600" />
            </div>
            <div className="space-y-3">
              {recentTransactions.map((txn) => (
                <div
                  key={txn.id}
                  className="border rounded-lg p-4 hover:shadow-md transition-shadow"
                >
                  <div className="flex items-start justify-between mb-2">
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-2">
                        <span className="text-sm font-mono text-gray-600">{txn.id}</span>
                        <span className={`px-2 py-1 rounded text-xs font-semibold border ${riskColors[txn.risk]}`}>
                          {txn.risk} Risk
                        </span>
                        <span className={`px-2 py-1 rounded text-xs font-medium ${statusColors[txn.status]}`}>
                          {txn.status}
                        </span>
                      </div>
                      <div className="grid grid-cols-2 gap-4 mb-2">
                        <div>
                          <p className="text-xs text-gray-500">Amount</p>
                          <p className="text-lg font-bold text-gray-900">
                            ${txn.amount.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })} {txn.currency}
                          </p>
                        </div>
                        <div>
                          <p className="text-xs text-gray-500">Route</p>
                          <p className="text-sm text-gray-700">{txn.from} → {txn.to}</p>
                        </div>
                      </div>
                      <p className="text-sm text-gray-600 mb-1">{txn.reason}</p>
                      <div className="flex items-center space-x-4 text-xs text-gray-500">
                        <span>{txn.timestamp}</span>
                        <span>•</span>
                        <span>{txn.aiAgent}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Compliance Metrics */}
          <div className="bg-white rounded-xl shadow-sm border border-green-100 p-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-semibold text-gray-900">Compliance</h2>
              <FileText className="h-5 w-5 text-green-600" />
            </div>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between text-sm mb-2">
                  <span className="text-gray-600">OCC Compliance</span>
                  <span className="font-semibold text-green-600">{complianceMetrics.occCompliance}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-green-600 h-2 rounded-full"
                    style={{ width: `${complianceMetrics.occCompliance}%` }}
                  />
                </div>
              </div>
              <div>
                <div className="flex justify-between text-sm mb-2">
                  <span className="text-gray-600">FCA Compliance</span>
                  <span className="font-semibold text-green-600">{complianceMetrics.fcaCompliance}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-green-600 h-2 rounded-full"
                    style={{ width: `${complianceMetrics.fcaCompliance}%` }}
                  />
                </div>
              </div>
              <div>
                <div className="flex justify-between text-sm mb-2">
                  <span className="text-gray-600">ECB Compliance</span>
                  <span className="font-semibold text-green-600">{complianceMetrics.ecbCompliance}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-green-600 h-2 rounded-full"
                    style={{ width: `${complianceMetrics.ecbCompliance}%` }}
                  />
                </div>
              </div>
            </div>
            <div className="mt-6 pt-6 border-t">
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600 mb-1">
                  {complianceMetrics.overallScore}%
                </div>
                <div className="text-sm text-gray-600">Overall Score</div>
              </div>
            </div>
          </div>
        </div>

        {/* System Health */}
        <div className="bg-white rounded-xl shadow-sm border border-green-100 p-6 mb-8">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-semibold text-gray-900">Legacy System Protection</h2>
            <Shield className="h-5 w-5 text-green-600" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            {systemHealth.legacySystems.map((system, idx) => (
              <div key={idx} className="border rounded-lg p-4">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-semibold text-gray-900">{system.name}</h3>
                  <CheckCircle className="h-5 w-5 text-green-600" />
                </div>
                <div className="text-sm text-gray-600 mb-1">{system.status}</div>
                <div className="text-sm font-medium text-green-600">{system.uptime}</div>
              </div>
            ))}
          </div>
          <div className="grid grid-cols-2 gap-4 pt-4 border-t">
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-900">
                ${(systemHealth.protectedValue / 1000000000).toFixed(2)}B
              </div>
              <div className="text-sm text-gray-600">Protected Value</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-red-600">
                {systemHealth.incidentsPrevented}
              </div>
              <div className="text-sm text-gray-600">Incidents Prevented</div>
            </div>
          </div>
        </div>

        {/* Enterprise Features */}
        <div className="bg-gradient-to-r from-green-600 to-green-700 rounded-xl shadow-lg p-6 text-white">
          <div className="flex items-start justify-between">
            <div>
              <h3 className="text-xl font-semibold mb-2">Banking-Grade AI Security</h3>
              <p className="text-green-100 mb-4">
                Protect your financial infrastructure with real-time transaction validation, 
                regulatory compliance automation, and legacy system protection.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-green-800 rounded-lg p-3">
                  <div className="text-sm text-green-200 mb-1">Payment AI Guardian</div>
                  <div className="text-lg font-semibold">Real-time Validation</div>
                </div>
                <div className="bg-green-800 rounded-lg p-3">
                  <div className="text-sm text-green-200 mb-1">Compliance Engine</div>
                  <div className="text-lg font-semibold">Auto Reporting</div>
                </div>
                <div className="bg-green-800 rounded-lg p-3">
                  <div className="text-sm text-green-200 mb-1">Legacy Protector</div>
                  <div className="text-lg font-semibold">Secure Gateway</div>
                </div>
                <div className="bg-green-800 rounded-lg p-3">
                  <div className="text-sm text-green-200 mb-1">SWIFT/FedNow</div>
                  <div className="text-lg font-semibold">Integration Ready</div>
                </div>
              </div>
            </div>
            <div className="text-right">
              <div className="text-3xl font-bold mb-1">{stats.complianceScore}%</div>
              <div className="text-green-200 text-sm">Compliance Score</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

