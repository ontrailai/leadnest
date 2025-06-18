import { Copy, ExternalLink, TrendingUp, AlertCircle, Clock, User, MessageSquare } from 'lucide-react';
import { useState } from 'react';

export default function LeadsTable({ leads }) {
  const [copiedId, setCopiedId] = useState(null);
  const [expandedId, setExpandedId] = useState(null);

  const copyToClipboard = (text, id) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const getIntentColor = (score) => {
    if (score >= 80) return 'from-green-500 to-emerald-500';
    if (score >= 60) return 'from-blue-500 to-indigo-500';
    if (score >= 40) return 'from-yellow-500 to-orange-500';
    return 'from-gray-400 to-gray-500';
  };

  const getIntentLabel = (score) => {
    if (score >= 80) return 'High Intent';
    if (score >= 60) return 'Good Prospect';
    if (score >= 40) return 'Moderate Interest';
    return 'Low Intent';
  };

  const getPersonaIcon = (persona) => {
    const icons = {
      'burned_out_host': '😩',
      'remote_owner': '✈️',
      'new_investor': '🌱',
      'switching_strategy': '🔄',
      'scaling_portfolio': '📈',
      'bad_pm_experience': '😤',
      'general_inquiry': '❓'
    };
    return icons[persona] || '👤';
  };

  return (
    <div className="space-y-4">
      {leads.map((lead, index) => (
        <div
          key={index}
          className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 overflow-hidden"
        >
          {/* Lead Header */}
          <div className="p-6">
            <div className="flex items-start justify-between mb-4">
              <div className="flex-1">
                <div className="flex items-center space-x-3 mb-2">
                  <div className="w-10 h-10 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full flex items-center justify-center">
                    <User className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">{lead.posterName}</h3>
                    <p className="text-sm text-gray-500">{lead.groupName}</p>
                  </div>
                </div>
                
                {/* Intent Score */}
                <div className="flex items-center space-x-4 mt-3">
                  <div className="flex items-center space-x-2">
                    <div className="relative w-32 h-2 bg-gray-200 rounded-full overflow-hidden">
                      <div 
                        className={`absolute left-0 top-0 h-full bg-gradient-to-r ${getIntentColor(lead.intentScore)} transition-all duration-500`}
                        style={{ width: `${lead.intentScore}%` }}
                      />
                    </div>
                    <span className="text-sm font-semibold text-gray-700">{lead.intentScore}%</span>
                  </div>
                  <span className={`text-xs px-2 py-1 rounded-full bg-gradient-to-r ${getIntentColor(lead.intentScore)} text-white font-medium`}>
                    {getIntentLabel(lead.intentScore)}
                  </span>
                </div>
              </div>

              {/* Timestamp */}
              <div className="flex items-center text-sm text-gray-500">
                <Clock className="w-4 h-4 mr-1" />
                {new Date(lead.timestamp).toLocaleDateString()}
              </div>
            </div>

            {/* Lead Summary */}
            <div className="bg-gradient-to-r from-gray-50 to-blue-50 rounded-lg p-4 mb-4">
              <div className="flex items-start space-x-3">
                <div className="text-2xl">{getPersonaIcon(lead.persona)}</div>
                <div className="flex-1">
                  <p className="text-sm font-medium text-gray-700 mb-1">
                    {lead.persona.replace(/_/g, ' ').replace(/\b\w/g, l => l.toUpperCase())}
                  </p>
                  <p className="text-gray-600">{lead.summary}</p>
                </div>
              </div>
            </div>

            {/* Original Post */}
            <div className="mb-4">
              <button
                onClick={() => setExpandedId(expandedId === index ? null : index)}
                className="text-sm text-blue-600 hover:text-blue-700 flex items-center space-x-1"
              >
                <MessageSquare className="w-4 h-4" />
                <span>{expandedId === index ? 'Hide' : 'Show'} original post</span>
              </button>
              {expandedId === index && (
                <div className="mt-2 p-3 bg-gray-50 rounded-lg text-sm text-gray-700 animate-slideDown">
                  {lead.postText}
                </div>
              )}
            </div>

            {/* Outreach Message */}
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-4 mb-4">
              <div className="flex items-start justify-between">
                <div className="flex-1 pr-4">
                  <p className="text-sm font-medium text-gray-700 mb-2">Suggested Outreach:</p>
                  <p className="text-gray-800 italic">{lead.outreachMessage}</p>
                </div>
                <button
                  onClick={() => copyToClipboard(lead.outreachMessage, index)}
                  className="flex-shrink-0 p-2 hover:bg-white rounded-lg transition-colors group"
                >
                  {copiedId === index ? (
                    <span className="text-xs text-green-600 font-medium">Copied!</span>
                  ) : (
                    <Copy className="w-4 h-4 text-gray-400 group-hover:text-blue-600 transition-colors" />
                  )}
                </button>
              </div>
            </div>

            {/* Risk Flags */}
            {lead.riskFlags && lead.riskFlags.length > 0 && (
              <div className="flex items-center space-x-2 mb-4">
                <AlertCircle className="w-4 h-4 text-amber-500" />
                <div className="flex flex-wrap gap-2">
                  {lead.riskFlags.map((flag, i) => (
                    <span key={i} className="text-xs px-2 py-1 bg-amber-50 text-amber-700 rounded-full">
                      {flag.replace(/_/g, ' ')}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Actions */}
            <div className="flex items-center justify-between pt-4 border-t border-gray-100">
              <div className="flex items-center space-x-3">
                {lead.propertyDetails && (lead.propertyDetails.propertyCount || lead.propertyDetails.location) && (
                  <div className="text-sm text-gray-600">
                    {lead.propertyDetails.propertyCount && (
                      <span className="font-medium">{lead.propertyDetails.propertyCount} properties</span>
                    )}
                    {lead.propertyDetails.location && (
                      <span className="ml-2">in {lead.propertyDetails.location}</span>
                    )}
                  </div>
                )}
              </div>
              
              <a
                href={lead.postUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 px-4 py-2 bg-white border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
              >
                <ExternalLink className="w-4 h-4" />
                <span className="text-sm font-medium">View on Facebook</span>
              </a>
            </div>
          </div>
        </div>
      ))}

      <style jsx>{`
        @keyframes slideDown {
          from {
            opacity: 0;
            max-height: 0;
          }
          to {
            opacity: 1;
            max-height: 200px;
          }
        }
        .animate-slideDown {
          animation: slideDown 0.3s ease-out;
        }
      `}</style>
    </div>
  );
}
