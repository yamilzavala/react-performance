import { useState, useEffect } from "react";

type State =
  | {
      status: "fetching" | "fetched";
    }
  | {
      status: "error";
      error: Error;
    };

export const useUser = (src: string) => {
  const [state, setState] = useState<State>({ status: "fetching" });

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

  setState({ status: "error" });

  setState({ status: "loading", error: new Error("error") });

  setState({ status: "loaded", error: new Error("error") });

  if (state.status === "error") {
    console.error(state.error);
  }
};
