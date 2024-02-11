import datePickerIcon from "../../assets/date-picker.png";
import "./datePicker.scss";

type DatePickerProps = {
  displayValue: string;
  displayPlaceholder: string;
  pickerInputName: string;
  pickerMinDate: string;
  onChangeHandler: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const DatePicker = ({
  displayValue,
  displayPlaceholder,
  onChangeHandler,
  pickerInputName,
  pickerMinDate,
}: DatePickerProps) => {
  return (
    <div className="datepicker-container">
      <input
        type="text"
        value={displayValue}
        className="field"
        readOnly
        placeholder={displayPlaceholder}
      />
      <span className="datepicker-toggle">
        <img className="datepicker-toggle-button" src={datePickerIcon} alt="Date picker calendar" />
        <input
          className="datepicker-input"
          name={pickerInputName}
          type="date"
          onChange={onChangeHandler}
          required
          min={pickerMinDate}
        />
      </span>
    </div>
  );
};

export default DatePicker;
