import { createContext } from 'react'

interface ContextProps {
  sidemenuOpen: boolean;
  isAddingEntry: boolean;
  isDraggingEntry: boolean;

  //Metodos
  openSideMenu: () => void;
  closeSideMenu: () => void;
  setIsAddingEntry: (isAddingEntry: boolean) => void;
  startDraggingEntry: () => void;
  endDraggingEntry: () => void;
}

export const UIContext = createContext({} as ContextProps)