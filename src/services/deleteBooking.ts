export const deleteBooking = async (bookingId: number) => {
  const API = import.meta.env.VITE_APP_API;
  const API_TOKEN = import.meta.env.VITE_APP_API_TOKEN;

  try {
    const response = await fetch(
      `${API}/bookings/delete/${bookingId}?authToken=${API_TOKEN}`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    if (!response.ok) {
      throw new Error(`Status: ${response.status}`);
    }
    return response;
  } catch (error) {
    console.error("Error deleting booking:", error);
  }
};
