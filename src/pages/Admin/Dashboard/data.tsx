import { showReveneSummary } from "@/services/orderAPI";
import { useEffect, useState } from "react";

const mockLineData = () => {

  const [revenes, setRevenes] = useState<any>([]);

  const fetchData = async () => {
    try {
      const responseRevenes = await showReveneSummary();
      const { data: reveneData } = responseRevenes.data;
      const formattedOrders = reveneData.OrderResults
        .map((order: any) => ({
          month: order.month,
          revenue: order.revenue,
        }));

      setRevenes(formattedOrders);
    } catch (error) {
      console.error("Failed to fetch infor:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const colors = { green: "#15F5BA", pink: "#FF9EAA", purple: "#912BBC" };
  const mockLineData = [
    {
      id: "Diamond",
      color: colors.purple,
      data: [
        { x: revenes.month, y: revenes.revenue },

        // { x: "Nov 2023", y: 35 },
        // { x: "Dec 2023", y: 14 },
        // { x: "Jan 2024", y: 50 },
        // { x: "Feb 2024", y: 80 },
        // { x: "Mar 2024", y: 90 },
        // { x: "Apr 2024", y: 120 },
        // { x: "May 2024", y: 150 },
      ],
    },
    // {
    //   id: "Jewelry",
    //   color: colors.pink,
    //   data: [
    //     { x: "Nov 2023", y: 299 },

    //     // { x: "Nov 2023", y: 299 },
    //     // { x: "Dec 2023", y: 251 },
    //     // { x: "Jan 2024", y: 60 },
    //     // { x: "Feb 2024", y: 90 },
    //     // { x: "Mar 2024", y: 100 },
    //     // { x: "Apr 2024", y: 130 },
    //     // { x: "May 2024", y: 160 },
    //   ],
    // },
  ];
  return (
    { mockLineData }
  );

};

export default mockLineData;