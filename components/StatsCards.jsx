"use client";
const StatsCard = ({ title, value, change, children }) => {
  return (
    <div className="bg-white rounded-lg border border-gray-200 p-6">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-sm font-medium text-gray-500">{title}</h3>
      </div>
      <div className="mb-4">
        <div className="text-2xl font-bold text-gray-900">{value}</div>
        {change && (
          <div className="text-sm text-green-600 mt-1">
            Last Quarter <span className="font-medium">{change}</span>
          </div>
        )}
      </div>
      {children}
    </div>
  );
};

export default StatsCard;
