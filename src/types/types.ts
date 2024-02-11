export type BookingT = {
  firstName: string;
  lastName: string;
  departureAirportId: number;
  arrivalAirportId: number;
  departureDate: string;
  returnDate: string;
};

export type AirportsT = {
  id: number;
  code: string;
  title: string;
};

export type BookingListT = BookingT & {
  id: number;
};
