import { useRef, useState } from "react";

const useRefState: <T extends any>(
  initial: T
) => [{ current: T }, (initial: T) => void] = (initial) => {
  const [data, setData] = useState(initial);
  const dataRef = useRef(data);
  dataRef.current = data;

  return [dataRef, setData];
};

export default useRefState;
