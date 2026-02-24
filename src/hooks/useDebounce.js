import { useEffect, useState } from 'react';

function useDebounce(value, delayMs) {
  if (delayMs === void 0) { delayMs = 1000; }
  let [debouncedValue,setDebouncedValue] = useState(value);


  useEffect(function () {
    let timer = setTimeout( () =>{
      setDebouncedValue(value);
    }, delayMs);
    return ()=>  clearTimeout(timer);
  }, [value, delayMs]);
  return debouncedValue;
}

export default useDebounce;