import { Loader2, Search, Sparkles } from 'lucide-react';

export default function LoadingState() {
  return (
    <div className="flex flex-col items-center justify-center py-20">
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full blur-xl opacity-30 animate-pulse"></div>
        <div className="relative bg-white rounded-full p-6 shadow-lg">
          <Loader2 className="w-12 h-12 text-blue-600 animate-spin" />
        </div>
      </div>
      
      <div className="mt-8 text-center">
        <h3 className="text-lg font-semibold text-gray-900 mb-2">
          Scanning Facebook Groups
        </h3>
        <p className="text-gray-600 mb-4">
          Finding and analyzing potential leads...
        </p>
        
        <div className="flex items-center justify-center space-x-6 text-sm text-gray-500">
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            <span>Searching posts</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse animation-delay-500"></div>
            <span>Analyzing intent</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse animation-delay-1000"></div>
            <span>Generating insights</span>
          </div>
        </div>
      </div>

      <style jsx>{`
        .animation-delay-500 {
          animation-delay: 0.5s;
        }
        .animation-delay-1000 {
          animation-delay: 1s;
        }
      `}</style>
    </div>
  );
}
