import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "./app/store";
import ReservationCardComponent from "./components/ReservationCardComponent";
import { addReservation } from "./features/reservationSlice";

const App = () => {
  const [reservationName, setReservationName] = useState("");

  const reservations = useSelector(
    (state: RootState) => state.reservations.value
  );

  const dispatch = useDispatch();

  const handleAddReservations = () => {
    if (!reservationName) return;
    dispatch(addReservation(reservationName));
    setReservationName("");
  };

  return (
    <div className="max-w-4xl mx-auto min-h-screen  py-4 px-6 flex">
      <div className="w-56 px-6">
        <div className="text-lg font-bold">Reservations</div>
        <div className="flex flex-col justify-between h-3/4">
          <div>
            {reservations.map((name, index) => {
              return <ReservationCardComponent name={name} index={index} />;
            })}
          </div>
          <div>
            <input
              type="text"
              className="px-2 py-1 border border-slate-200 rounded text-sm w-full mb-2"
              placeholder="name ..."
              value={reservationName}
              onChange={(e) => setReservationName(e.target.value)}
            />
            <button
              className="px-2 py-1 bg-gradient-to-b from-indigo-300 to-teal-300 rounded w-full shadow text-sm"
              onClick={handleAddReservations}
            >
              Add
            </button>
          </div>
        </div>
      </div>
      <div className="w-full">
        <div className="text-lg font-bold">On Restaurant</div>
        <div className="py-2 px-3 rounded shadow-lg bg-gradient-to-b from-indigo-300 to-teal-300 w-full min-h-[72px]">
          <div>Zasvia</div>
          <div className="ml-auto text-right">
            <input
              type="text"
              className="px-2 py-1 border border-slate-200 rounded text-sm mb-2 inline-block"
            />
            <button className="px-2 py-1 bg-gradient-to-b from-indigo-300 to-teal-300 rounded shadow inline-block text-sm hover:opacity-60">
              Add
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
