import { useState, useEffect } from "react";
import { AirportsT } from "../types/types";

export const useAirports = () => {
  const API = import.meta.env.VITE_APP_API;
  const [airports, setAirports] = useState<AirportsT[]>([]);

  useEffect(() => {
    const getAirports = async () => {
      try {
        const response = await fetch(`${API}/airports`);

        if (!response.ok) {
          throw new Error("Network response error");
        }

        const data = await response.json();
        setAirports(data);
      } catch (error) {
        console.error("Error while getting airports:", error);
      }
    };

    getAirports();
  }, []);

  return airports;
};
