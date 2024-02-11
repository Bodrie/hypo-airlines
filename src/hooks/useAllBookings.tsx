import { useState, useEffect } from "react";
import { BookingListT } from "../types/types";
import { getAllBookings } from "../services/getAllBookings";

export const useAllBookings = () => {
  const [allBookings, setAllBookings] = useState<BookingListT[]>([]);

  useEffect(() => {
    getAllBookings().then((res) => setAllBookings(res));
  }, []);

  return allBookings;
};
