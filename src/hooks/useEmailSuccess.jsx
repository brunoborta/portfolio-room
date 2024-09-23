import { useContext } from "react";
import { EmailSuccessContext } from "./providers/EmailSuccessProvider";

export const useEmailSuccess = () => {
  const context = useContext(EmailSuccessContext);
  if (context === null) {
    console.warn("useEmailSuccess must be used within an EmailSuccessProvider");
  }
  return context;
};
