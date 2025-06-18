import { TrendingUp, Users, CheckCircle, AlertTriangle } from 'lucide-react';

export default function StatsBar({ stats }) {
  if (!stats) return null;

  const successRate = stats.totalLeads > 0 
    ? Math.round((stats.successfulEnrichments / stats.totalLeads) * 100) 
    : 0;

  return (
    <div className="mb-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Total Leads</p>
              <p className="text-2xl font-bold text-gray-900 mt-1">{stats.totalLeads}</p>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-lg p-3">
              <Users className="w-6 h-6 text-blue-600" />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Enriched</p>
              <p className="text-2xl font-bold text-gray-900 mt-1">{stats.successfulEnrichments}</p>
            </div>
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg p-3">
              <CheckCircle className="w-6 h-6 text-green-600" />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Success Rate</p>
              <p className="text-2xl font-bold text-gray-900 mt-1">{successRate}%</p>
            </div>
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-lg p-3">
              <TrendingUp className="w-6 h-6 text-purple-600" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
