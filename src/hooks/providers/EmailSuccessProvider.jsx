import { createContext, useState } from "react";

export const EmailSuccessContext = createContext(null);

export const EmailSuccessProvider = ({ children }) => {
  const [emailSuccess, setEmailSuccess] = useState(false);

  return (
    <EmailSuccessContext.Provider value={{ emailSuccess, setEmailSuccess }}>
      {children}
    </EmailSuccessContext.Provider>
  );
};
