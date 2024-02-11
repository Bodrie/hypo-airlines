import { useAllBookings } from "./hooks/useAllBookings";
import { BookingForm, AllBookings } from "./components";
import "./App.scss";

function App() {
  useAllBookings();

  return (
    <div className="App">
      <h1 className="heading">Welcome to Hypo Airlines</h1>
      <BookingForm />
      <AllBookings />
    </div>
  );
}

export default App;
