import { useDispatch } from "react-redux";
import { addCustomer } from "../features/customerSlice";
import { removeReservation } from "../features/reservationSlice";
import { v4 as uuid } from "uuid";

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
        dispatch(
          addCustomer({
            id: uuid(),
            name,
            food: [],
          })
        );
      }}
    >
      {name}
    </div>
  );
};

export default ReservationCardComponent;
