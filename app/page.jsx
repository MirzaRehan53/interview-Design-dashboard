"use client";
import { useState } from "react";
import Header from "../components/Header";
import StatsCard from "../components/StatsCards";
import BarChart from "../components/BarChart";
import CustomerTable from "../components/CustomerTable";

// Sample data (same as provided)
const salesData = [
  {
    name: "John Doe",
    contact: "+1-202-555-0123",
    lastInteraction: "2025-05-20",
    status: "active",
    salesPerMonth: [
      { month: "January", sales: 2500 },
      { month: "February", sales: 2400 },
      { month: "March", sales: 2300 },
      { month: "April", sales: 2600 },
      { month: "May", sales: 2700 },
      { month: "June", sales: 2800 },
      { month: "July", sales: 2900 },
      { month: "August", sales: 3000 },
      { month: "September", sales: 3100 },
      { month: "October", sales: 3200 },
      { month: "November", sales: 3300 },
      { month: "December", sales: 3400 },
    ],
    region: "north",
  },
  {
    name: "Jane Smith",
    contact: "+1-202-555-0189",
    lastInteraction: "2025-04-15",
    status: "inactive",
    salesPerMonth: [
      { month: "January", sales: 400 },
      { month: "February", sales: 450 },
      { month: "March", sales: 500 },
      { month: "April", sales: 600 },
      { month: "May", sales: 550 },
      { month: "June", sales: 580 },
      { month: "July", sales: 620 },
      { month: "August", sales: 640 },
      { month: "September", sales: 700 },
      { month: "October", sales: 720 },
      { month: "November", sales: 750 },
      { month: "December", sales: 800 },
    ],
    region: "south",
  },
  {
    name: "Carlos Ramirez",
    contact: "+1-202-555-0175",
    lastInteraction: "2025-05-01",
    status: "active",
    salesPerMonth: [
      { month: "January", sales: 900 },
      { month: "February", sales: 950 },
      { month: "March", sales: 1000 },
      { month: "April", sales: 1100 },
      { month: "May", sales: 1050 },
      { month: "June", sales: 1150 },
      { month: "July", sales: 1200 },
      { month: "August", sales: 1300 },
      { month: "September", sales: 1350 },
      { month: "October", sales: 1400 },
      { month: "November", sales: 1500 },
      { month: "December", sales: 1600 },
    ],
    region: "east",
  },
  {
    name: "Ava Brown",
    contact: "+1-202-555-0138",
    lastInteraction: "2025-05-24",
    status: "active",
    salesPerMonth: [
      { month: "January", sales: 1400 },
      { month: "February", sales: 1450 },
      { month: "March", sales: 1500 },
      { month: "April", sales: 1550 },
      { month: "May", sales: 1600 },
      { month: "June", sales: 1650 },
      { month: "July", sales: 1700 },
      { month: "August", sales: 1750 },
      { month: "September", sales: 1800 },
      { month: "October", sales: 1850 },
      { month: "November", sales: 1900 },
      { month: "December", sales: 1950 },
    ],
    region: "west",
  },
  {
    name: "Liam Wilson",
    contact: "+1-202-555-0190",
    lastInteraction: "2025-03-20",
    status: "inactive",
    salesPerMonth: [
      { month: "January", sales: 300 },
      { month: "February", sales: 350 },
      { month: "March", sales: 400 },
      { month: "April", sales: 420 },
      { month: "May", sales: 450 },
      { month: "June", sales: 480 },
      { month: "July", sales: 500 },
      { month: "August", sales: 520 },
      { month: "September", sales: 550 },
      { month: "October", sales: 580 },
      { month: "November", sales: 600 },
      { month: "December", sales: 650 },
    ],
    region: "north",
  },
  {
    name: "Olivia Johnson",
    contact: "+1-202-555-0104",
    lastInteraction: "2025-05-10",
    status: "active",
    salesPerMonth: [
      { month: "January", sales: 1100 },
      { month: "February", sales: 1120 },
      { month: "March", sales: 1150 },
      { month: "April", sales: 1200 },
      { month: "May", sales: 1220 },
      { month: "June", sales: 1250 },
      { month: "July", sales: 1270 },
      { month: "August", sales: 1300 },
      { month: "September", sales: 1320 },
      { month: "October", sales: 1350 },
      { month: "November", sales: 1380 },
      { month: "December", sales: 1400 },
    ],
    region: "south",
  },
  {
    name: "Noah Martin",
    contact: "+1-202-555-0181",
    lastInteraction: "2025-05-18",
    status: "active",
    salesPerMonth: [
      { month: "January", sales: 800 },
      { month: "February", sales: 820 },
      { month: "March", sales: 850 },
      { month: "April", sales: 870 },
      { month: "May", sales: 900 },
      { month: "June", sales: 920 },
      { month: "July", sales: 950 },
      { month: "August", sales: 970 },
      { month: "September", sales: 1000 },
      { month: "October", sales: 1030 },
      { month: "November", sales: 1050 },
      { month: "December", sales: 1100 },
    ],
    region: "east",
  },
];

export default function Dashboard() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Calculate quarterly sales data
  const quarterlySalesData = salesData.reduce(
    (acc, person) => {
      person.salesPerMonth.forEach((monthData, index) => {
        if (index < 3) acc[0].value += monthData.sales; // Q1: Jan-Mar
        else if (index < 6) acc[1].value += monthData.sales; // Q2: Apr-Jun
        else if (index < 9) acc[2].value += monthData.sales; // Q3: Jul-Sep
        else acc[3].value += monthData.sales; // Q4: Oct-Dec
      });
      return acc;
    },
    [
      { label: "Q1", value: 0 },
      { label: "Q2", value: 0 },
      { label: "Q3", value: 0 },
      { label: "Q4", value: 0 },
    ]
  );

  // Calculate regional distribution
  const regionCounts = salesData.reduce((acc, person) => {
    acc[person.region] = (acc[person.region] || 0) + 1;
    return acc;
  }, {});

  const regionalData = [
    { label: "North", value: regionCounts.north || 0 },
    { label: "South", value: regionCounts.south || 0 },
    { label: "East", value: regionCounts.east || 0 },
    { label: "West", value: regionCounts.west || 0 },
  ];

  // Calculate total sales
  const totalSales = salesData.reduce((total, person) => {
    const personTotal = person.salesPerMonth.reduce(
      (sum, month) => sum + month.sales,
      0
    );
    return total + personTotal;
  }, 0);

  // Format total sales as currency
  const formattedTotalSales = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 0,
  }).format(totalSales);

  // Format customer data for table
  const customerTableData = salesData.map((person) => ({
    name: person.name,
    contact: person.contact,
    lastInteraction: person.lastInteraction,
    status: person.status,
  }));

  return (
    <div className="min-h-screen bg-gray-50">
      <Header
        onMenuToggle={() => setIsMenuOpen(!isMenuOpen)}
        isMenuOpen={isMenuOpen}
      />

      <main className="px-4 lg:px-6 py-6 max-w-6xl mx-auto">
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
          <p className="text-sm text-gray-600 mt-1">
            Overview of your sales performance and customer interactions.
          </p>
        </div>

        <div className="mb-8">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">
            Sales Performance
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <StatsCard
              title="Quarterly Sales"
              value={formattedTotalSales}
              change="+15%"
            >
              <BarChart data={quarterlySalesData} type="sales" />
            </StatsCard>

            <StatsCard
              title="Customer Distribution by Region"
              value={`${salesData.length} Customers`}
              change="+5%"
            >
              <BarChart data={regionalData} type="regional" />
            </StatsCard>
          </div>
        </div>

        <div>
          <CustomerTable customers={customerTableData} />
        </div>
      </main>
    </div>
  );
}
