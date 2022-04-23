import { useContext } from "react";

import CounterContext from "../context/CounterContext";

const useCounter = () => useContext(CounterContext);

export default useCounter;
