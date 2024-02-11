export const getAllBookings = async (pageIndex: number, pageSize: number) => {
  const API = import.meta.env.VITE_APP_API;
  const API_TOKEN = import.meta.env.VITE_APP_API_TOKEN;

  try {
    const response = await fetch(
      `${API}/bookings?pageIndex=${pageIndex}&pageSize=${pageSize}&authToken=${API_TOKEN}`
    );

    if (!response.ok) {
      return response.text();
    }

    return response.json();
  } catch (error) {
    console.error("Error while getting airports:", error);
  }
};
