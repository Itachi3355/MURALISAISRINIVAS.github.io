import React, { Suspense } from 'react';

const ChartWindow = React.lazy(() => import('./ChartWindow'));

export default function ChartWindowLoader(props) {
  return (
    <Suspense fallback={
      <div className="bg-gray-800 rounded-lg p-4 h-full">
        <div className="text-gray-300">Loading chart...</div>
      </div>
    }>
      <ChartWindow {...props} />
    </Suspense>
  );
}
