import { useEffect, useState } from "react";
const useResize = (): number => {
  const [width, setWidth] = useState<number>(window.innerWidth);
  function handleResize() {
    setWidth(window.innerWidth);
  }

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return width;
};

export default useResize;
