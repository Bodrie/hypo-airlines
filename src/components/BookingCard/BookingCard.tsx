import { AirportsT, BookingListT } from "../../types/types";
import { deleteBooking } from "../../services/deleteBooking";
import { getPropertyById } from "../../utils/getPropertyById";
import arrowRightIcon from "../../assets/arrow-right.png";
import binIcon from "../../assets/bin-icon.png";
import "./bookingCard.scss";

type BookingCardProps = {
  handleDelete: (id: number) => void;
  booking: BookingListT;
  airports: AirportsT[];
};

const BookingCard = ({ booking, airports, handleDelete }: BookingCardProps) => {
  const {
    id,
    firstName,
    lastName,
    departureAirportId,
    arrivalAirportId,
    departureDate,
    returnDate,
  } = booking;

  const handleDeleteBooking = () => {
    deleteBooking(id).then((res) => {
      if (res?.status === 200) {
        handleDelete(id);
      }
    });
  };

  return (
    <div className="booking-card">
      <div className="left">
        <p className="item">Flight number:</p>
        <p className="item">Destination:</p>
        <p className="item">Passenger:</p>
        <p className="item">Departure:</p>
        <p className="item">Return:</p>
      </div>
      <div className="right">
        <p className="item">{id}</p>
        <p className="item airports">
          {getPropertyById(airports, departureAirportId, "code")}
          <img src={arrowRightIcon} alt="Arrow right" className="icon" />
          {getPropertyById(airports, arrivalAirportId, "code")}
        </p>
        <p className="item">
          {firstName} {lastName}
        </p>
        <p className="item">{departureDate.split("T")[0]}</p>
        <p className="item">{returnDate.split("T")[0]}</p>
      </div>
      <img
        src={binIcon}
        alt="Cancel booking"
        className="cancel icon"
        onClick={handleDeleteBooking}
      />
    </div>
  );
};

export default BookingCard;
