import { BookingT } from "../types/types";

export const postBooking = async (
  bookingData: BookingT
): Promise<Response | any> => {
  const API = import.meta.env.VITE_APP_API;
  const API_TOKEN = import.meta.env.VITE_APP_API_TOKEN;

  try {
    const response = await fetch(`${API}/bookings/create?authToken=${API_TOKEN}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(bookingData),
    });

    if (!response.ok) {
      return { isError: true, error: await response.text() };
    }

    return response.json();
  } catch (error) {
    return { isError: true, error: error };
  }
};
