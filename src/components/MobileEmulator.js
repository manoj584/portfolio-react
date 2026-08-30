import React, { useState } from 'react';

const MobileEmulator = ({ appUrl, title, description }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);

  const handleLoad = () => {
    setIsLoading(false);
    setError(false);
  };

  const handleError = () => {
    setIsLoading(false);
    setError(true);
  };

  return (
    <div className="w-full max-w-md mx-auto">
      {/* Phone Frame */}
      <div className="relative mx-auto border-gray-800 bg-gray-800 border-[14px] rounded-[2.5rem] h-[600px] w-[300px] sm:h-[650px] sm:w-[320px] shadow-2xl">
        {/* Notch */}
        <div className="w-[148px] h-[18px] bg-gray-800 top-0 rounded-b-[1rem] left-1/2 -translate-x-1/2 absolute z-20"></div>
        
        {/* Screen */}
        <div className="h-[32px] w-[3px] bg-gray-800 absolute -left-[17px] top-[72px] rounded-l-lg"></div>
        <div className="h-[46px] w-[3px] bg-gray-800 absolute -left-[17px] top-[124px] rounded-l-lg"></div>
        <div className="h-[46px] w-[3px] bg-gray-800 absolute -left-[17px] top-[178px] rounded-l-lg"></div>
        <div className="h-[64px] w-[3px] bg-gray-800 absolute -right-[17px] top-[142px] rounded-r-lg"></div>
        
        {/* Screen Content */}
        <div className="rounded-[2rem] overflow-hidden w-full h-full bg-white dark:bg-gray-900 relative">
          {/* Status Bar */}
          <div className="absolute top-0 left-0 right-0 h-12 bg-gradient-to-b from-black/50 to-transparent z-10 flex items-center justify-between px-6 pointer-events-none">
            <span className="text-white text-xs font-medium">9:41</span>
            <div className="flex items-center gap-1">
              <div className="w-4 h-3 bg-white rounded-sm opacity-80"></div>
              <div className="w-6 h-3 bg-white rounded-sm opacity-80"></div>
            </div>
          </div>

          {/* App iframe */}
          <div className="w-full h-full pt-8 box-border">
            {isLoading && (
              <div className="absolute inset-0 flex items-center justify-center bg-gray-100 dark:bg-gray-800 z-0">
                <div className="text-center">
                  <div className="w-12 h-12 border-4 border-accent-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">Loading app...</p>
                </div>
              </div>
            )}
            
            {error && (
              <div className="absolute inset-0 flex items-center justify-center bg-gray-100 dark:bg-gray-800 z-0">
                <div className="text-center p-6">
                  <div className="w-16 h-16 bg-red-100 dark:bg-red-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                    </svg>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 text-sm mb-2">Failed to load app</p>
                  <button 
                    onClick={() => window.open(appUrl, '_blank')}
                    className="text-accent-500 hover:text-accent-600 text-sm font-medium"
                  >
                    Open in new tab
                  </button>
                </div>
              </div>
            )}

            <iframe
              src={appUrl}
              className="w-full h-full border-0"
              style={{ overflow: 'auto', WebkitOverflowScrolling: 'touch' }}
              scrolling="yes"
              onLoad={handleLoad}
              onError={handleError}
              title={title}
              allow="accelerometer; camera; gyroscope; microphone"
              sandbox="allow-same-origin allow-scripts allow-forms allow-popups"
            />
          </div>

          {/* Home Indicator */}
          <div className="absolute bottom-1 left-1/2 -translate-x-1/2 w-32 h-1 bg-gray-800 dark:bg-white rounded-full z-20 pointer-events-none"></div>
        </div>
      </div>

      {/* App Info */}
      <div className="mt-6 text-center">
        <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">{title}</h3>
        <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">{description}</p>
        <a
          href={appUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-4 py-2 bg-accent-500 hover:bg-accent-600 text-white text-sm font-medium rounded-lg transition-colors"
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg>
          Open Full Screen
        </a>
      </div>
    </div>
  );
};

export default MobileEmulator;