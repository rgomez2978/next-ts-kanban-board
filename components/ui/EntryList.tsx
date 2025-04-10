import { List, Paper } from "@mui/material"
import { EntryListItem } from "./EntryListItem"
import { EntryStatus } from "../../interfaces"
import { DragEvent, FC, useContext, useMemo } from "react";
import { UIContext, EntriesContext } from "../../context";

import styles from './EntryLIst.module.css';

interface Props {
  status: EntryStatus;
}


export const EntryList: FC<Props> = ({ status }) => {

  const { entries, updateEntry } = useContext(EntriesContext)

  const { isDraggingEntry, endDraggingEntry } = useContext(UIContext)


  const entriesByStatus = useMemo(() => entries.filter(entry => entry.status === status), [entries, status]);

  const onDropEntry = (event: DragEvent<HTMLDivElement>) => {
    const id = event.dataTransfer.getData('text')
    const entry = entries.find(e => e._id === id)!;
    entry.status = status;
    updateEntry(entry);
    endDraggingEntry();
  }

  const allowDropEntry = (event: DragEvent<HTMLDivElement>) => {
    event.preventDefault();
  }

  return (
    // TODO: aqui se hara el drop

    <div
      onDrop={onDropEntry}
      onDragOver={allowDropEntry}
      className={isDraggingEntry ? styles.dragging : ''}
    >
      <Paper sx={{
        height: 'calc(100vh - 210px)',
        overflowX: 'hidden',
        overflowY: '',
        backgroundColor: 'transparent',
        padding: '10px 15px'
      }}>
        {/* TODO: Cambiara si se hace drag o no */}
        <List sx={{
          opacity: isDraggingEntry ? 0.3 : 1,
          transition: 'all .3s'
        }}>
          {
            entriesByStatus.map(entry => (
              <EntryListItem key={entry._id} entry={entry} />
            ))
          }

          {/* <EntryListItem />
          <EntryListItem />
          <EntryListItem /> */}
        </List>
      </Paper>
    </div>
  )
}

