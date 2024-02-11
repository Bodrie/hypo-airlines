import { SelectHTMLAttributes } from "react";
import { useAirports } from "../../hooks/useAirports";

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  onChangeHandler: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  placeholderText: string;
}

const Select = ({ onChangeHandler, placeholderText, ...rest }: SelectProps) => {
  const airports = useAirports();

  return (
    <select {...rest} onChange={onChangeHandler}>
      <option value={0} disabled>
        {placeholderText}
      </option>
      {airports.map((airport) => {
        return (
          <option key={airport.id} value={airport.id}>
            {airport.title}
          </option>
        );
      })}
    </select>
  );
};

export default Select;
