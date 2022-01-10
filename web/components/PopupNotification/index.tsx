import * as React from "react";

import Snackbar from "@mui/material/Snackbar";
import MuiAlert, { AlertProps } from "@mui/material/Alert";

interface Props {
  onPopupClose: React.Dispatch<React.SetStateAction<boolean>>;
  isOpen: boolean;
  message: string;
  type: "error" | "warning" | "info" | "success";
}

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
  props,
  ref
) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function PopupNotification({
  onPopupClose,
  isOpen,
  message,
  type,
}: Props) {
  const onClose = () => onPopupClose(false);

  return (
    <Snackbar open={isOpen} autoHideDuration={6000} onClose={onClose}>
      <Alert onClose={onClose} severity={type} sx={{ width: "100%" }}>
        {message}
      </Alert>
    </Snackbar>
  );
}
