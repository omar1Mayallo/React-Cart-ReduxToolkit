import {useState, useEffect} from "react";

export const useChangeHeaderStyleOnScroll = () => {
  const [headerStyleChanged, setHeaderStyleChanged] = useState(false);
  const changeScroll = () => {
    if (window.scrollY > 70) {
      setHeaderStyleChanged(true);
    } else {
      setHeaderStyleChanged(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", changeScroll);
    return () => {
      window.removeEventListener("scroll", changeScroll);
    };
  }, [headerStyleChanged]);

  return headerStyleChanged;
};
