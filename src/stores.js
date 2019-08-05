import React from "react";
import { createStore } from "./createStore";
import { curry } from 'lodash';

const storeContext = React.createContext(null);

export const StoreProvider = ({ children }) => {
  const stores = createStore();

  return (
    <storeContext.Provider value={stores}>{children}</storeContext.Provider>
  );
};

export const useStores = () => {
  const stores = React.useContext(storeContext);

  if (!stores) {
    throw new Error("You have forgot to use StoreProvider");
  }
  return stores;
};

export const connect = curry((mapStateToProps, mapDispatchToProps, Component) => {
  const wrapped = props => {
    const { state, dispatch } = useStores();

    return (
      <Component
        {...mapStateToProps(state)}
        {...mapDispatchToProps(dispatch)}
      />
    );
  };

  return wrapped;
});
