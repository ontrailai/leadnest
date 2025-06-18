import { Search, ArrowRight, RefreshCw } from 'lucide-react';

export default function EmptyState() {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-12 text-center">
      <div className="max-w-md mx-auto">
        <div className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-full p-6 w-24 h-24 mx-auto mb-6 flex items-center justify-center">
          <Search className="w-12 h-12 text-gray-400" />
        </div>
        
        <h3 className="text-xl font-semibold text-gray-900 mb-2">
          No leads found
        </h3>
        <p className="text-gray-600 mb-6">
          We couldn't find any posts matching your search criteria in the selected Facebook groups.
        </p>
        
        <div className="space-y-4">
          <div className="bg-blue-50 rounded-lg p-4 text-left">
            <h4 className="font-medium text-gray-900 mb-2">Try these tips:</h4>
            <ul className="space-y-2 text-sm text-gray-700">
              <li className="flex items-start">
                <ArrowRight className="w-4 h-4 text-blue-500 mr-2 mt-0.5 flex-shrink-0" />
                <span>Use broader search terms like "property manager" or "need help"</span>
              </li>
              <li className="flex items-start">
                <ArrowRight className="w-4 h-4 text-blue-500 mr-2 mt-0.5 flex-shrink-0" />
                <span>Try a different city with more active real estate groups</span>
              </li>
              <li className="flex items-start">
                <ArrowRight className="w-4 h-4 text-blue-500 mr-2 mt-0.5 flex-shrink-0" />
                <span>Remove specific phrases that might be too restrictive</span>
              </li>
            </ul>
          </div>
          
          <button
            onClick={() => window.location.reload()}
            className="inline-flex items-center space-x-2 px-6 py-3 bg-white border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
          >
            <RefreshCw className="w-4 h-4" />
            <span className="font-medium">Try Again</span>
          </button>
        </div>
      </div>
    </div>
  );
}
