import React, { FC, useCallback, useMemo, useReducer } from "react";
// import { ThemeProvider } from "next-themes";

export interface IState {
  displaySidebar: boolean;
}

const initialState = {
  displaySidebar: false,
};

enum Actions {
  OpenSidebar = "OPEN_SIDEBAR",
  CloseSidebar = "CLOSE_SIDEBAR",
}

type Action =
  | {
      type: Actions.OpenSidebar;
    }
  | {
      type: Actions.CloseSidebar;
    };

type Dispatch = (action: Action) => void;

const Context = React.createContext<IState | any>(initialState);

Context.displayName = "UIContext";

function uiReducer(state: IState, action: Action) {
  switch (action.type) {
    case Actions.OpenSidebar: {
      return {
        ...state,
        displaySidebar: true,
      };
    }
    case Actions.CloseSidebar: {
      return {
        ...state,
        displaySidebar: false,
      };
    }
    default:
      return state;
  }
}

export const UIProvider: FC = (props) => {
  const [state, dispatch] = useReducer(uiReducer, initialState);

  const openSidebar = useCallback(
    () => dispatch({ type: Actions.OpenSidebar }),
    [dispatch]
  );
  const closeSidebar = useCallback(
    () => dispatch({ type: Actions.CloseSidebar }),
    [dispatch]
  );
  const toggleSidebar = useCallback(
    () =>
      state.displaySidebar
        ? dispatch({ type: Actions.CloseSidebar })
        : dispatch({ type: Actions.OpenSidebar }),
    [dispatch, state.displaySidebar]
  );
  const closeSidebarIfPresent = useCallback(
    () => state.displaySidebar && dispatch({ type: Actions.CloseSidebar }),
    [dispatch, state.displaySidebar]
  );

  const value = useMemo(
    () => ({
      ...state,
      openSidebar,
      closeSidebar,
      toggleSidebar,
      closeSidebarIfPresent,
    }),
    [state]
  );

  return <Context.Provider value={value} {...props} />;
};

export const useUI = () => {
  const context = React.useContext(Context);
  if (context === undefined) {
    throw new Error(`useUI must be used within a UIProvider`);
  }
  return context;
};

export const UIContext: FC = ({ children }) => (
  <UIProvider>
    {/* <ThemeProvider>{children}</ThemeProvider> */}
    {children}
  </UIProvider>
);
