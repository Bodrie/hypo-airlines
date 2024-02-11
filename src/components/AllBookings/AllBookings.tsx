import { BookingCard } from "../../components";
import { useAirports } from "../../hooks/useAirports";
import { BookingListT } from "../../types/types";
import "./allBookings.scss";

type AllBookingsProps = {
  currentBookings: BookingListT[];
  setCurrentBookings: (data: BookingListT[]) => void;
};

const AllBookings = ({ currentBookings, setCurrentBookings }: AllBookingsProps) => {
  const airports = useAirports();

  const handleDelete = (id: number) => {
    const updatedBookings = currentBookings.filter(
      (booking) => booking.id !== id
    );
    setCurrentBookings(updatedBookings);
  };

  return (
    <div className="all-bookings">
      <h2 className="heading">Your current bookings</h2>
      <div className="all-bookings-container">
        {currentBookings.map((booking) => {
          return (
            <BookingCard
              key={booking.id}
              booking={booking}
              airports={airports}
              handleDelete={handleDelete}
            />
          );
        })}
      </div>
    </div>
  );
};

export default AllBookings;
