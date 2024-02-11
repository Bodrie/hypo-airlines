import { useState } from "react";
import { Select, DatePicker } from "../../components";
import { BookingT } from "../../types/types";
import { reverseDateFormat } from "../../utils/reverseDateFormat";
import { postBooking } from "../../services/postBooking";
import { currentDate } from "../../utils/currentDate";
import { addOneDay } from "../../utils/addOneDay";
import arrowRightIcon from "../../assets/arrow-right.png";
import "./bookingForm.scss";

const BookingForm = () => {
  const [error, setError] = useState("");
  const [inputValues, setInputValues] = useState<BookingT>({
    firstName: "",
    lastName: "",
    departureAirportId: 0,
    arrivalAirportId: 0,
    departureDate: "",
    returnDate: "",
  });

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
    postBooking(inputValues).then((res) => {
      if (res.isError) setError(res.error);
    });
  };

  console.log(inputValues);

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
        />
        <Select
          className="field select"
          name="arrivalAirportId"
          id="arrivalAirportId"
          placeholderText="Arrival Airport"
          onChangeHandler={handleChange}
          required
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
      {error}
      <button type="submit" className="btn">
        Book now
      </button>
    </form>
  );
};

export default BookingForm;
