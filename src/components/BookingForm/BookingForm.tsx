import { useState } from "react";
import { Select, DatePicker } from "../../components";
import { BookingListT, BookingT } from "../../types/types";
import { postBooking } from "../../services/postBooking";
import { reverseDateFormat } from "../../utils/reverseDateFormat";
import { currentDate } from "../../utils/currentDate";
import { addOneDay } from "../../utils/addOneDay";
import arrowRightIcon from "../../assets/arrow-right.png";
import "./bookingForm.scss";

type BookingFormProps = {
  currentBookings: BookingListT[];
  setCurrentBookings: (data: BookingListT[]) => void;
};

const BookingForm = ({
  currentBookings,
  setCurrentBookings,
}: BookingFormProps) => {
  const initialInputState = {
    firstName: "",
    lastName: "",
    departureAirportId: 0,
    arrivalAirportId: 0,
    departureDate: "",
    returnDate: "",
  };

  const [inputValues, setInputValues] = useState<BookingT>(initialInputState);
  const [error, setError] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setError("");
    const { name, value } = e.target;
    const selectFieldIds = ["arrivalAirportId", "departureAirportId"];
    const datePickerIds = ["departureDate", "returnDate"];

    if (selectFieldIds.includes(name))
      setInputValues((prev) => ({
        ...prev,
        [name]: Number(value),
      }));
    else if (datePickerIds.includes(name))
      setInputValues((prev) => ({
        ...prev,
        [name]: reverseDateFormat(value),
      }));
    else
      setInputValues((prev) => ({
        ...prev,
        [name]: value,
      }));
  };

  const handleBookingSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (
      inputValues.arrivalAirportId === 0 ||
      inputValues.departureAirportId === 0
    ) {
      setError("Departure/Arrival airports are requred!");
      return;
    }

    if (inputValues.arrivalAirportId === inputValues.departureAirportId) {
      setError("Departure/Arrival airports should be different!");
      return;
    }

    postBooking(inputValues).then((res) => {
      if (res.isError) {
        setError(res.error);
      } else {
        setInputValues(initialInputState);
        const updatedBookings = [...currentBookings, res];
        setCurrentBookings(updatedBookings);
      }
    });
  };

  return (
    <form className="booking-form" onSubmit={handleBookingSubmit}>
      <p className="form-heading">Book a flight</p>
      <div className="inputs-container">
        <input
          className="field"
          type="text"
          placeholder="First name"
          name="firstName"
          value={inputValues.firstName}
          onChange={handleChange}
          required
        />
        <input
          className="field"
          type="text"
          placeholder="Last name"
          name="lastName"
          value={inputValues.lastName}
          onChange={handleChange}
          required
        />
        <Select
          className="field select"
          name="departureAirportId"
          id="departureAirportId"
          placeholderText="Departure Airport"
          onChangeHandler={handleChange}
          required
          value={inputValues.departureAirportId}
        />
        <Select
          className="field select"
          name="arrivalAirportId"
          id="arrivalAirportId"
          placeholderText="Arrival Airport"
          onChangeHandler={handleChange}
          required
          value={inputValues.arrivalAirportId}
        />
        <div className="pickers-wrapper">
          <DatePicker
            displayValue={inputValues.departureDate}
            displayPlaceholder="Departure Date"
            onChangeHandler={handleChange}
            pickerInputName="departureDate"
            pickerMinDate={currentDate()}
          />
          <img src={arrowRightIcon} alt="Arrow right" className="icon" />
          <DatePicker
            displayValue={inputValues.returnDate}
            displayPlaceholder="Return Date"
            onChangeHandler={handleChange}
            pickerInputName="returnDate"
            pickerMinDate={
              addOneDay(inputValues.departureDate) || currentDate(1)
            }
          />
        </div>
      </div>
      <button type="submit" className="btn">
        Book now
      </button>
      <span className="error">{error}</span>
    </form>
  );
};

export default BookingForm;
