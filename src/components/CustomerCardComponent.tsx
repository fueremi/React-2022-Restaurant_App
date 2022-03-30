import { useState } from "react";
import { useDispatch } from "react-redux";
import { addFoodToCustomer } from "../features/customerSlice";

interface CustomerCardTypes {
  id: string;
  name: string;
  food: string[];
}

const CustomerCardComponent = ({ id, name, food }: CustomerCardTypes) => {
  const dispatch = useDispatch();
  const [customerFood, setCustomerFood] = useState("");
  return (
    <div className="py-2 px-3 rounded shadow-lg bg-gradient-to-b from-indigo-300 to-teal-300 w-full min-h-[72px]">
      <div className="text-lg font-bold">{name}</div>
      <div>
        {food.map((item) => {
          return <span className="mr-2">{item}</span>;
        })}
      </div>
      <div className="ml-auto text-right">
        <input
          type="text"
          className="px-2 py-1 border border-slate-200 rounded text-sm mb-2 inline-block"
          value={customerFood}
          onChange={(e) => setCustomerFood(e.target.value)}
        />
        <button
          className="px-2 py-1 bg-gradient-to-b from-indigo-300 to-teal-300 rounded shadow inline-block text-sm hover:opacity-60"
          onClick={() => {
            if (!customerFood) return;
            dispatch(addFoodToCustomer({ id, food: customerFood }));
            setCustomerFood("");
          }}
        >
          Add
        </button>
      </div>
    </div>
  );
};

export default CustomerCardComponent;
