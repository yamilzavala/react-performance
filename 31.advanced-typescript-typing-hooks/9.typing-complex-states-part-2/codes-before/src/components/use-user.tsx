import { useState, useEffect } from "react";

export const useUser = (src: string) => {
  const [state, setState] = useState({ status: "fetching" });

  useEffect(() => {
    setState({ status: "fetching" });

    let aborted = false;

    fetch(src)
      .then((data) => {
        if (aborted) {
          return;
        }

        //do something with the data

        setState({ status: "fetched" });
      })
      .catch((error) => {
        if (aborted) {
          return;
        }
        setState({ status: "error", error });
      });

    return () => {
      aborted = true;
    };
  }, [src]);

  return state;
};
