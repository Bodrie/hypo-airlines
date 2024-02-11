import { createContext, useEffect, useState } from "react";
import { BookingListT } from "../types/types";

type BookingsContextProps = {
  children: string | JSX.Element | JSX.Element[];
};

type BookingContextT = {
  bookings: BookingListT[];
  addBooking: (newBooking: BookingListT) => void;
  removeBooking: (id: number) => void;
};

export const BookingsContext = createContext<BookingContextT>(null!);

export const BookingsContextProvider = ({ children }: BookingsContextProps) => {
  const [currentBookings, setCurrentBookings] = useState<BookingListT[]>(
    JSON.parse(localStorage.getItem("bookings")!)
  );

  const addBooking = (newBooking: BookingListT) => {
    const updatedBookings = [...currentBookings, newBooking];
    setCurrentBookings(updatedBookings);
  };

  const removeBooking = (bookingId: number) => {
    const updatedBookings = currentBookings.filter(
      (booking) => booking.id !== bookingId
    );
    setCurrentBookings(updatedBookings);
  };

  useEffect(() => {
    localStorage.setItem("bookings", JSON.stringify(currentBookings));
  }, [currentBookings]);

  return (
    <BookingsContext.Provider
      value={{ bookings: currentBookings, addBooking, removeBooking }}
    >
      {children}
    </BookingsContext.Provider>
  );
};
