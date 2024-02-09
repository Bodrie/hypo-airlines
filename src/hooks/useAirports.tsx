import { useState, useEffect } from "react";
import { AirportsT } from "../types/types";
import { getAirports } from "../services/getAirports";

export const useAirports = () => {
  const [airports, setAirports] = useState<AirportsT[]>([]);

  useEffect(() => {
    getAirports().then((res) => setAirports(res));
  }, []);

  return airports;
};
