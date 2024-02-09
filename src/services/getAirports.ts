export const getAirports = async () => {
  const API = import.meta.env.VITE_APP_API;

  try {
    const response = await fetch(`${API}/airports`);

    if (!response.ok) {
      return response.text();
    }

    return response.json();
  } catch (error) {
    console.error("Error while getting airports:", error);
  }
};
