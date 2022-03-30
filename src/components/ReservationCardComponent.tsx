import { useDispatch } from "react-redux";
import { removeReservation } from "../features/reservationSlice";

interface ReservationCardComponentTypes {
  name: string;
  index: number;
}

const ReservationCardComponent = ({
  name,
  index,
}: ReservationCardComponentTypes) => {
  const dispatch = useDispatch();
  return (
    <div
      className="py-2 px-3 bg-gradient-to-b from-indigo-300 to-teal-300 rounded shadow-lg mb-2"
      onClick={() => {
        dispatch(removeReservation(index));
      }}
    >
      {name}
    </div>
  );
};

export default ReservationCardComponent;
