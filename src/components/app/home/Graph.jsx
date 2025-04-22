import { useRef, useEffect, useState } from "react";
import Chart from "chart.js/auto";
import Calender from "../../global/DatePicker";
import { useGraph } from "../../../hooks/api/Get";
import moment from "moment";
import { GraphSkeleton } from "../../global/Skeleton";

const SubscriptionChart = () => {
  const chartRef = useRef(null);
  const chartInstance = useRef(null);
  const [activePoint, setActivePoint] = useState(null);
  const [update, setUpdate] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  const currentYear = new Date().getFullYear();

  const { data, loading } = useGraph(
    `/api/admin/monthly-subscription`,
    {
      startDate: startDate ? moment(startDate).format("YYYY-MM-DD") : "",
      endDate: endDate ? moment(endDate).format("YYYY-MM-DD") : "",
    },
    update
  );

  // Extract labels and data from API response
  const chartLabels = data?.monthlySales ? Object.keys(data.monthlySales) : [];
  const chartValues = data?.monthlySales
    ? Object.values(data.monthlySales).map((val) => val)
    : [];

  useEffect(() => {
    if (chartRef.current && chartLabels.length) {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }

      const ctx = chartRef.current.getContext("2d");

      chartInstance.current = new Chart(ctx, {
        type: "line",
        data: {
          labels: chartLabels,
          datasets: [
            {
              label: "Sales",
              data: chartValues,
              borderColor: "#5BAFEB",
              backgroundColor: "#5BAFEB",
              tension: 0.4,
              pointRadius: 0,
              pointHoverRadius: 6,
              pointBackgroundColor: "#5BAFEB",
              pointHoverBackgroundColor: "#5BAFEB",
              pointBorderWidth: 0,
            },
          ],
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          interaction: {
            mode: "index",
            intersect: false,
          },
          plugins: {
            tooltip: {
              enabled: false,
            },
            legend: {
              display: false,
            },
          },
          scales: {
            x: {
              grid: {
                display: false,
                drawBorder: false,
              },
              ticks: {
                color: "#6B7280",
                font: { size: 12 },
              },
              border: { display: false },
            },
            y: {
              border: { display: false },
              grid: {
                color: "#F3F4F6",
              },
              ticks: {
                display: false,
                color: "#6B7280",
                font: { size: 12 },
                callback: (value) => value / 1000 + "K",
                stepSize: 40000,
              },
              min: 0,
              max: Math.max(...chartValues, 0) + 100,
            },
          },
          onHover: (event, elements) => {
            if (elements && elements.length) {
              const pointIndex = elements[0].index;

              setActivePoint({
                index: pointIndex,
                value: chartValues[pointIndex],
                label: chartLabels[pointIndex],
              });
            } else {
              setActivePoint(null);
            }
          },
        },
      });
    }

    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }
    };
  }, [chartLabels.length, JSON.stringify(chartValues)]);

  const formatCurrency = (value) => {
    return "$" + value + "k";
  };

  return (
    <>
      {loading ? (
        <GraphSkeleton />
      ) : (
        <div
          className="p-[26.83px]  bg-white rounded-[13.41px] shadow-[13.41px] mt-5 mb-5"
          onMouseLeave={() => setActivePoint(null)}
        >
          <div className="flex justify-between items-center gap-4 mb-10">
            <h2 className="text-[16.77px] leading-[150%] font-[700] text-[#111827] ">
              Subscription
            </h2>
            <div className="flex gap-10 items-center">
              <Calender
                startDate={startDate}
                setStartDate={setStartDate}
                setUpdate={setUpdate}
              />
              <Calender
                startDate={endDate}
                setStartDate={setEndDate}
                setUpdate={setUpdate}
              />
            </div>
          </div>

          <div className="relative h-[400px]">
            <canvas ref={chartRef} />
            {activePoint && (
              <div
                className="absolute pointer-events-none bg-white rounded-lg shadow-lg p-4 z-10"
                style={{
                  left: `calc(${
                    (activePoint.index / (chartLabels.length - 1)) * 100
                  }% - ${activePoint.label === "Jan" ? "20px" : "125px"})`,
                  top: "30%",
                  minWidth: "150px",
                }}
              >
                <div className="text-[#4B5563] text-[10px] font-[500] mb-1">
                  {activePoint.label}, {currentYear}
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 mt-[2px] rounded-full bg-[#5BAFEB] mr-2"></div>
                  <span className="font-[400] text-[#6B7280] text-[13px]">
                    Sales:
                  </span>
                  <span className="font-[600] text-[#a5f584] text-[13px] ml-1">
                    {formatCurrency(activePoint.value)}
                  </span>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default SubscriptionChart;
