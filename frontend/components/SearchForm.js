import { useState, useEffect, useRef } from 'react';
import { Search, Plus, X, Sparkles, ChevronDown } from 'lucide-react';
import defaultPhrases from '@/config/searchPhrases.json';

const cities = [
  { value: 'Austin', label: 'Austin, TX', icon: '🤠' },
  { value: 'Denver', label: 'Denver, CO', icon: '🏔️' },
  { value: 'Miami', label: 'Miami, FL', icon: '🌴' }
];

export default function SearchForm({ onSearch, loading }) {
  const [city, setCity] = useState('Austin');
  const [phrases, setPhrases] = useState(defaultPhrases.slice(0, 5));
  const [useDefaultPhrases, setUseDefaultPhrases] = useState(true);
  const [newPhrase, setNewPhrase] = useState('');
  const [showCityDropdown, setShowCityDropdown] = useState(false);
  const [focusedPhraseIndex, setFocusedPhraseIndex] = useState(null);
  const dropdownRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowCityDropdown(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleAddPhrase = (e) => {
    e.preventDefault();
    if (newPhrase.trim() && !phrases.includes(newPhrase.trim())) {
      setPhrases([...phrases, newPhrase.trim()]);
      setNewPhrase('');
      setUseDefaultPhrases(false);
    }
  };

  const handleRemovePhrase = (index) => {
    const newPhrases = phrases.filter((_, i) => i !== index);
    setPhrases(newPhrases);
    if (newPhrases.length === 0) {
      setPhrases(defaultPhrases.slice(0, 5));
      setUseDefaultPhrases(true);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (phrases.length === 0) {
      alert('Please add at least one search phrase');
      return;
    }
    onSearch({ city, searchPhrases: phrases });
  };

  const selectedCity = cities.find(c => c.value === city);

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
      <div className="space-y-8">
        {/* City Selection */}
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-3">
            Target Location
          </label>
          <div className="relative" ref={dropdownRef}>
            <button
              type="button"
              onClick={() => setShowCityDropdown(!showCityDropdown)}
              className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl flex items-center justify-between hover:bg-gray-100 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500"
              disabled={loading}
            >
              <div className="flex items-center space-x-3">
                <span className="text-2xl">{selectedCity.icon}</span>
                <span className="font-medium text-gray-900">{selectedCity.label}</span>
              </div>
              <ChevronDown className={`w-5 h-5 text-gray-400 transition-transform ${showCityDropdown ? 'rotate-180' : ''}`} />
            </button>
            
            {showCityDropdown && (
              <div className="absolute z-10 w-full mt-2 bg-white border border-gray-200 rounded-xl shadow-lg overflow-hidden animate-slideDown">
                {cities.map(c => (
                  <button
                    key={c.value}
                    type="button"
                    onClick={() => {
                      setCity(c.value);
                      setShowCityDropdown(false);
                    }}
                    className={`w-full px-4 py-3 flex items-center space-x-3 hover:bg-gray-50 transition-colors ${
                      city === c.value ? 'bg-blue-50' : ''
                    }`}
                  >
                    <span className="text-2xl">{c.icon}</span>
                    <span className="font-medium text-gray-900">{c.label}</span>
                    {city === c.value && (
                      <svg className="w-5 h-5 text-blue-600 ml-auto" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    )}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Search Phrases */}
        <div>
          <div className="flex items-center justify-between mb-3">
            <label className="block text-sm font-semibold text-gray-700">
              Search Phrases
            </label>
            <button
              type="button"
              onClick={() => {
                if (useDefaultPhrases) {
                  setPhrases([]);
                  setUseDefaultPhrases(false);
                  setTimeout(() => inputRef.current?.focus(), 100);
                } else {
                  setPhrases(defaultPhrases.slice(0, 5));
                  setUseDefaultPhrases(true);
                }
              }}
              className="flex items-center space-x-2 text-sm text-blue-600 hover:text-blue-700 transition-colors"
            >
              <div className={`relative w-12 h-6 rounded-full transition-colors ${useDefaultPhrases ? 'bg-blue-600' : 'bg-gray-300'}`}>
                <div className={`absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full shadow-sm transition-transform ${useDefaultPhrases ? 'translate-x-6' : ''}`} />
              </div>
              <span>{useDefaultPhrases ? 'Using defaults' : 'Custom phrases'}</span>
            </button>
          </div>

          <div className="space-y-3">
            {/* Phrase Pills */}
            <div className="flex flex-wrap gap-2">
              {phrases.map((phrase, index) => (
                <div
                  key={index}
                  onMouseEnter={() => setFocusedPhraseIndex(index)}
                  onMouseLeave={() => setFocusedPhraseIndex(null)}
                  className={`group relative inline-flex items-center px-3 py-1.5 bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-200 rounded-full text-sm font-medium text-gray-700 transition-all hover:shadow-md ${
                    focusedPhraseIndex === index ? 'scale-105' : ''
                  }`}
                >
                  <span>{phrase}</span>
                  {!useDefaultPhrases && (
                    <button
                      type="button"
                      onClick={() => handleRemovePhrase(index)}
                      className="ml-2 -mr-1 p-0.5 rounded-full hover:bg-red-100 transition-colors"
                    >
                      <X className="w-3 h-3 text-gray-400 hover:text-red-600" />
                    </button>
                  )}
                </div>
              ))}
            </div>

            {/* Add New Phrase */}
            {!useDefaultPhrases && (
              <div className="flex items-center space-x-2">
                <div className="relative flex-1">
                  <input
                    ref={inputRef}
                    type="text"
                    value={newPhrase}
                    onChange={(e) => setNewPhrase(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && handleAddPhrase(e)}
                    className="w-full px-4 py-2 pr-10 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Add a search phrase..."
                    disabled={loading}
                  />
                  {newPhrase && (
                    <button
                      type="button"
                      onClick={handleAddPhrase}
                      className="absolute right-2 top-1/2 -translate-y-1/2 p-1 rounded-md hover:bg-gray-100 transition-colors"
                    >
                      <Plus className="w-4 h-4 text-blue-600" />
                    </button>
                  )}
                </div>
              </div>
            )}
          </div>

          <p className="text-xs text-gray-500 mt-2">
            {useDefaultPhrases ? 'Using optimized phrases for property management leads' : `${phrases.length} custom phrase${phrases.length !== 1 ? 's' : ''} added`}
          </p>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={loading || phrases.length === 0}
          className="relative w-full group"
        >
          <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl blur opacity-70 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
          <div className="relative w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 px-6 rounded-xl font-semibold text-lg hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-3 transition-all">
            {loading ? (
              <>
                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                <span>Scanning Facebook...</span>
              </>
            ) : (
              <>
                <Search className="w-5 h-5" />
                <span>Run Lead Scan</span>
                <Sparkles className="w-4 h-4" />
              </>
            )}
          </div>
        </button>
      </div>

      <style jsx>{`
        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-slideDown {
          animation: slideDown 0.2s ease-out;
        }
      `}</style>
    </form>
  );
}
