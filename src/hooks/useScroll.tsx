import { useEffect } from "react";

export const useScroll = (scrollHandler: () => void, dependencies: any[]) => {
  useEffect(() => {
    window.addEventListener("scroll", scrollHandler);
    return () => {
      window.removeEventListener("scroll", scrollHandler);
    };
  }, dependencies);
};
