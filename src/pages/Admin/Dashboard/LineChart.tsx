import React from "react";
import { ResponsiveLine } from "@nivo/line";
import * as Styled from "./Dashboard.styled";
import { mockLineData } from "./data";

const addNewMonthData = (lineData) => {
    const currentDate = new Date();
    const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    const currentMonth = monthNames[currentDate.getMonth()];
    const currentYear = currentDate.getFullYear();
    const newMonthLabel = `${currentMonth} ${currentYear}`;

    lineData.forEach((line) => {
        const lastEntry = line.data[line.data.length - 1];
        const lastMonthLabel = lastEntry.x;

        // Only add new data if the last entry is not for the current month
        if (lastMonthLabel !== newMonthLabel) {
            const newYValue = Math.floor(Math.random() * 300); // Generate random y value for demo
            line.data.push({ x: newMonthLabel, y: newYValue });
        }
    });

    return lineData;
};

const LineChart = ({ isDashboard = false }) => {
    const colors = { primary: "#151542" };
    const data = addNewMonthData(mockLineData);

    return (
        <ResponsiveLine
            data={data}
            theme={{
                axis: {
                    domain: {
                        line: {
                            stroke: colors.primary,
                        },
                    },
                    legend: {
                        text: {
                            fill: colors.primary,
                        },
                    },
                    ticks: {
                        line: {
                            stroke: colors.primary,
                            strokeWidth: 1,
                        },
                        text: {
                            fill: colors.primary,
                        },
                    },
                },
                legends: {
                    text: {
                        fill: colors.primary,
                    },
                },
                tooltip: {
                    container: {
                        color: colors.primary,
                    },
                },
            }}
            colors={{ datum: "color" }}
            margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
            xScale={{ type: "point" }}
            yScale={{
                type: "linear",
                min: "auto",
                max: "auto",
                stacked: true,
                reverse: false,
            }}
            yFormat=" >-.2f"
            curve="catmullRom"
            axisTop={null}
            axisRight={null}
            axisBottom={{
                tickSize: 0,
                tickPadding: 5,
                tickRotation: 0,
                legend: isDashboard ? undefined : "Months",
                legendOffset: 36,
                legendPosition: "middle",
            }}
            axisLeft={{
                tickValues: 5,
                tickSize: 3,
                tickPadding: 5,
                tickRotation: 0,
                legend: isDashboard ? undefined : "Value",
                legendOffset: -40,
                legendPosition: "middle",
            }}
            enableGridX={false}
            enableGridY={false}
            pointSize={8}
            pointColor={{ theme: "background" }}
            pointBorderWidth={2}
            pointBorderColor={{ from: "serieColor" }}
            pointLabelYOffset={-12}
            useMesh={true}
            legends={[
                {
                    anchor: "bottom-right",
                    direction: "column",
                    justify: false,
                    translateX: 100,
                    translateY: 0,
                    itemsSpacing: 0,
                    itemDirection: "left-to-right",
                    itemWidth: 80,
                    itemHeight: 20,
                    itemOpacity: 0.75,
                    symbolSize: 12,
                    symbolShape: "circle",
                    symbolBorderColor: "rgba(0, 0, 0, .5)",
                    effects: [
                        {
                            on: "hover",
                            style: {
                                itemBackground: "rgba(0, 0, 0, .03)",
                                itemOpacity: 1,
                            },
                        },
                    ],
                },
            ]}
        />
    );
};

export default LineChart;
