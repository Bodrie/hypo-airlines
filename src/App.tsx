import { useState, useEffect } from "react";
import { useScroll } from "./hooks/useScroll";
import { BookingForm, AllBookings } from "./components";
import { getAllBookings } from "./services/getAllBookings";
import { BookingListT } from "./types/types";
import "./App.scss";

function App() {
  const [currentBookings, setCurrentBookings] = useState<BookingListT[]>([]);
  const [generalState, setGeneralState] = useState({
    page: 0,
    total: -1,
    loading: false,
  });

  const loadMoreBookings = async () => {
    if (generalState.loading) return;
    setGeneralState((prev) => ({ ...prev, loading: true }));

    const res = await getAllBookings(generalState.page, 5);

    if (generalState.total === currentBookings.length) return;
    setGeneralState((prev) => ({ ...prev, total: Number(res.totalCount) }));
    setCurrentBookings((prevBookings) => [...prevBookings, ...res.list]);
    setGeneralState((prev) => ({
      ...prev,
      page: prev.page + 1,
      loading: false,
    }));
  };

  const handleScroll = () => {
    const { scrollTop, clientHeight, scrollHeight } = document.documentElement;

    if (scrollTop + clientHeight >= scrollHeight - 100) {
      loadMoreBookings();
    }
  };

  useScroll(handleScroll, [generalState.loading]);

  useEffect(() => {
    loadMoreBookings();
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
