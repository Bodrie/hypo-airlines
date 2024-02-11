import { useState, useEffect } from "react";
import { BookingForm, AllBookings } from "./components";
import { getAllBookings } from "./services/getAllBookings";
import { BookingListT } from "./types/types";
import "./App.scss";

function App() {
  const [currentBookings, setCurrentBookings] = useState<BookingListT[]>([]);
  const [page, setPage] = useState(0);

  useEffect(() => {
    getAllBookings(page, 5).then((res) => {
      setCurrentBookings(res.list);
      setPage((prevPage) => prevPage + 1);
    });
  }, []);

  return (
    <div className="App">
      <h1 className="heading">Welcome to Hypo Airlines</h1>
      <BookingForm
        currentBookings={currentBookings}
        setCurrentBookings={setCurrentBookings}
      />
      {currentBookings.length ? (
        <AllBookings
          currentBookings={currentBookings}
          setCurrentBookings={setCurrentBookings}
        />
      ) : (
        "Loading..."
      )}
    </div>
  );
}

export default App;
