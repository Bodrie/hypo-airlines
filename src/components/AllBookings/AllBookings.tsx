import { useContext } from "react";
import { BookingCard } from "../../components";
import { BookingsContext } from "../../context/BookingsContext";
import { useAirports } from "../../hooks/useAirports";
import "./allBookings.scss";

const AllBookings = () => {
  const { bookings } = useContext(BookingsContext);
  const airports = useAirports();

  return (
    <div className="all-bookings">
      <h2 className="heading">Your current bookings</h2>
      <div className="all-bookings-container">
        {bookings.map((booking) => {
          return (
            <BookingCard
              key={booking.id}
              booking={booking}
              airports={airports}
            />
          );
        })}
      </div>
    </div>
  );
};

export default AllBookings;
