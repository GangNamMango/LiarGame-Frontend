import React, { createContext, useContext, useReducer } from "react";

export const PopUpStateContext = createContext();
export const PopUPDispatchContext = createContext();

const todoReducer = (state, action) => {
  switch (action.type) {
    case "PopUp":
      return !state;
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
};

export const PopUpProvider = ({ children }) => {
  const [PopUp, dispatch] = useReducer(todoReducer, false);

  return (
    <PopUpStateContext.Provider value={PopUp}>
      <PopUPDispatchContext.Provider value={dispatch}>
        {children}
      </PopUPDispatchContext.Provider>
    </PopUpStateContext.Provider>
  );
};
