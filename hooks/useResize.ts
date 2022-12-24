import { useEffect, useState } from "react";
const useResize = (): number => {
  const [width, setWidth] = useState<number>(0);
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
