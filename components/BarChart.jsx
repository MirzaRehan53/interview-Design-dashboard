"use client";

const BarChart = ({ data, type = "sales" }) => {
  if (type === "sales") {
    const maxValue = Math.max(...data.map((d) => d.value), 1);

    return (
      <div className="flex items-end justify-between space-x-1 h-24 px-2">
        {data.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center w-full max-w-[60px]"
          >
            <div
              className="relative w-full bg-gray-400"
              style={{ height: "80px" }}
            >
              <div
                className="absolute bottom-0 w-full bg-gray-300  transition-all duration-300"
                style={{
                  height: `${Math.max((item.value / maxValue) * 100, 2)}%`,
                  minHeight: item.value > 0 ? "4px" : "0px",
                }}
                title={`${item.label}: $${item.value.toLocaleString()}`}
              />
            </div>
            <span className="text-xs text-gray-500 mt-2 font-medium">
              {item.label}
            </span>
          </div>
        ))}
      </div>
    );
  }

  // Regional distribution bars
  const maxValue = Math.max(...data.map((d) => d.value), 1);

  return (
    <div className="space-y-3 px-2">
      {data.map((item, index) => (
        <div key={index} className="flex items-center space-x-3">
          <span className="text-sm text-gray-600 w-12 font-medium">
            {item.label}
          </span>
          <div className="flex-1 bg-gray-400  h-3 relative">
            <div
              className="bg-gray-300 h-3  transition-all duration-300"
              style={{
                width: `${Math.max((item.value / maxValue) * 100, 5)}%`,
                minWidth: item.value > 0 ? "20px" : "0px",
              }}
              title={`${item.label}: ${item.value} customers`}
            />
          </div>
          <span className="text-xs text-gray-400 w-8 text-right">
            {item.value}
          </span>
        </div>
      ))}
    </div>
  );
};

export default BarChart;
