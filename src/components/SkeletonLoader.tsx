import React from 'react';

export const SkeletonLoader: React.FC = () => {
  return (
    <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-100 animate-pulse">
      <div className="flex flex-col gap-3">
        <div>
          <div className="h-5 bg-gray-200 rounded w-2/3 mb-3"></div>
          <div className="h-4 bg-gray-200 rounded-full w-1/4"></div>
        </div>
        <div className="space-y-3 mt-4">
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 rounded-full bg-gray-200 shrink-0"></div>
            <div className="h-4 bg-gray-200 rounded w-3/4"></div>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 rounded-full bg-gray-200 shrink-0"></div>
            <div className="h-4 bg-gray-200 rounded w-1/2"></div>
          </div>
        </div>
      </div>
    </div>
  );
};
