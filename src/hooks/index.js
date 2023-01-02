import { useEffect, useRef } from "react";

const useOutsideClick = (ref, onClickOutside) => {
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (!onClickOutside || !ref.current || ref.current.contains(e.target))
        return;
      onClickOutside();
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [ref]);
};

const useInterval = (callback, delay) => {
  const savedCallback = useRef();

  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  useEffect(() => {
    function tick() {
      savedCallback.current();
    }
    if (delay !== null) {
      let id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  }, [delay]);
};

export { useOutsideClick, useInterval };
