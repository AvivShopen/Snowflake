import { useScrollTrigger } from "@mui/material";
import React, { MutableRefObject, ReactNode, useEffect, useState } from "react";

export default function useLazy(
  ref: MutableRefObject<HTMLElement | undefined>,
  element?: ReactNode
) {
  const [show, setShow] = useState<boolean>(false);
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    target: ref.current,
  });

  useEffect(() => {
    if (trigger) {
      setShow(true);
    }
  }, [trigger]);

  return element ? show && element : show;
}
