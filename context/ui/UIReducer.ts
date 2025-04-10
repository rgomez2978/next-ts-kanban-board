import { UIState } from './';

type UIActionType =
  | { type: 'UI - Open Sidebar' }
  | { type: 'UI - Close Sidebar' }
  | { type: 'UI - Adding Entry', payload: boolean }
  | { type: 'UI - Start Dragging Entry' }
  | { type: 'UI - End Dragging Entry' }

export const UIReducer = (state: UIState, action: UIActionType): UIState => {
  switch (action.type) {
    case 'UI - Open Sidebar':
      return {
        ...state,
        sidemenuOpen: true,
      }

    case 'UI - Close Sidebar':
      return {
        ...state,
        sidemenuOpen: false,
      }

    case 'UI - Adding Entry':
      return {
        ...state,
        isAddingEntry: action.payload
      }

    case 'UI - Start Dragging Entry':
      return {
        ...state,
        isDraggingEntry: true
      }

    case 'UI - End Dragging Entry':
      return {
        ...state,
        isDraggingEntry: false
      }


    default:
      return state;
  }
}