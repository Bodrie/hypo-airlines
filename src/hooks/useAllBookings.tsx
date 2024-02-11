import { useState, useEffect } from "react";
import { BookingListT } from "../types/types";
import { getAllBookings } from "../services/getAllBookings";

export const useAllBookings = (pageIndex = 0, pageSize = 5) => {
  const [allBookings, setAllBookings] = useState<BookingListT[]>([]);

  useEffect(() => {
    getAllBookings(pageIndex, pageSize).then((res) => setAllBookings(res.list));
  }, []);

  return allBookings;
};
