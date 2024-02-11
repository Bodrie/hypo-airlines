import { useEffect } from "react";
import { getAllBookings } from "../services/getAllBookings";

export const useAllBookings = (pageIndex = 0, pageSize = 5) => {
  useEffect(() => {
    getAllBookings(pageIndex, pageSize).then((res) =>
      localStorage.setItem("bookings", JSON.stringify(res.list))
    );
  }, []);
};
