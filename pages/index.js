import Head from "next/head";
import { useReducer } from "react";

export default function Home() {
  
  const ACTIONTYPES = {
    increase: "increase",
    decrease: "decrease",
  };
  const reducer = (state, action) => {
    switch (action.type) {
      case ACTIONTYPES.increase:
        return {
          count: state.count + 1,
        };
        break;
      case ACTIONTYPES.decrease:
        return {
          count: state.count - 1,
        };
      default:
        return state;
        break;
    }
  };
  const [state, dispatch] = useReducer(reducer, { count: 0 });
  return (
    <div className="overflow-hidden">
      <button
        onClick={() => {
          dispatch({
            type: ACTIONTYPES.increase,
          });
        }}
      >
        increase state
      </button>
      <div>
      {state.count}
      </div>
      <button
        onClick={() => {
          dispatch({
            type: ACTIONTYPES.decrease,
          });
        }}
      >
        decrease
      </button>
    </div>
  );
}
