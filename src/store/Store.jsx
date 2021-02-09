import React from "react";
const initalState = {
  isMessageLoading: false,
  open: false,
};

const emailReducer = (state, action) => {
  switch (action.type) {
    case "EMAIL_SENT_LOADING": {
      return {
        isMessageLoading: true,
      };
    }
    case "EMAIL_SENT_SUCCESS": {
      return {
        isMessageLoading: false,
        isMessageSent: true,
        open: true,
        severity: "success",
        message: "Your message was successfully sent!",
      };
    }
    case "EMAIL_SENT_FAILED": {
      return {
        isMessageSentFail: true,
        open: true,
        severity: "error",
        message: "Your message was unsuccessful!",
      };
    }

    case "CLOSE_ALERT": {
      return {
        open: action.closeAlert,
      };
    }
    default: {
      return;
    }
  }
};
function Store({ children }) {
  const [state, dispatch] = React.useReducer(emailReducer, initalState);
  return (
    <Context.Provider value={[state, dispatch]}>{children}</Context.Provider>
  );
}

export const Context = React.createContext(initalState);
export default Store;
