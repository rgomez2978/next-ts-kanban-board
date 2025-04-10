import { FC, useReducer } from 'react';
import { UIContext, UIReducer } from './';

export interface UIState {
  sidemenuOpen: boolean;
  isAddingEntry: boolean;
  isDraggingEntry: boolean;
}

const UI_INITIAL_STATE: UIState = {
  sidemenuOpen: false,
  isAddingEntry: false,
  isDraggingEntry: false,
}

export const UIProvider: FC = ({ children }) => {
  const [state, dispatch] = useReducer(UIReducer, UI_INITIAL_STATE);

  const openSideMenu = () => dispatch({ type: 'UI - Open Sidebar' })
  const closeSideMenu = () => dispatch({ type: 'UI - Close Sidebar' })

  const setIsAddingEntry = (isAddingEntry: boolean) => {
    dispatch({ type: 'UI - Adding Entry', payload: isAddingEntry });
  }

  const startDraggingEntry = () => {
    dispatch({ type: 'UI - Start Dragging Entry' });
  }

  const endDraggingEntry = () => {
    dispatch({ type: 'UI - End Dragging Entry' });
  }

  return (
    <UIContext.Provider value={{
      ...state,

      //Metodos
      openSideMenu,
      closeSideMenu,
      setIsAddingEntry,
      startDraggingEntry,
      endDraggingEntry,
    }}>
      {children}
    </UIContext.Provider>
  )
};