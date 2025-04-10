import { FC, useReducer } from 'react';
import { EntriesContext, entriesReducer } from './';
import { Entry } from '../../interfaces';
import { v4 as uuidv4 } from "uuid";

export interface EntriesState {
  entries: Entry[];
}

const Entries_INITIAL_STATE: EntriesState = {
  entries: [
    {
      _id: uuidv4(),
      description: '[pending]: Lorem ipsum dolor sit amet consectetur adipisicing elit.?',
      status: 'pending',
      createdAt: Date.now(),
    }, {
      _id: uuidv4(),
      description: '[in-progress]:Aliquam  itaque odit aut adipisci! Animi error cupiditate molestias eveniet quibusdam? Placeat sed, corrupti eos facilis sit excepturi dolorum?',
      status: 'in-progress',
      createdAt: Date.now() - 1000000,
    }, {
      _id: uuidv4(),
      description: '[finished]:Cupiditate molestias eveniet quibusdam? Placeat sed, corrupti eos facilis sit excepturi dolorum?',
      status: 'finished',
      createdAt: Date.now() - 100000,
    }
  ],
}

export const EntriesProvider: FC = ({ children }) => {
  const [state, dispatch] = useReducer(entriesReducer, Entries_INITIAL_STATE);

  const addNewEntry = (description: string) => {
    const newEntry: Entry = {
      _id: uuidv4(),
      description,
      createdAt: Date.now(),
      status: 'pending'
    }

    dispatch({
      type: '[Entries] - Add entry',
      payload: newEntry
    })
  }

  const updateEntry = (entry: Entry) => {
    dispatch({ type: '[Entries] - Update entry', payload: entry })
  }


  return (
    <EntriesContext.Provider value={{
      ...state,
      addNewEntry,
      updateEntry,
    }}>
      {children}
    </EntriesContext.Provider>
  )
};