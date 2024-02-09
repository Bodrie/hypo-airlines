//@ts-nocheck
import { BookingT } from "../types/types";

export const postBooking = async (bookingData: BookingT): Promise<Response> => {
  const API = import.meta.env.VITE_APP_API;

  try {
    const response = await fetch(`${API}/bookings/create`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(bookingData),
    });

    if (!response.ok) {
      return response.text();
    }

    return response.json();
  } catch (error) {
    return error;
  }
};
