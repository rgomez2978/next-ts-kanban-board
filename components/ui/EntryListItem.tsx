import { DragEvent, FC, useContext } from 'react';
import {
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  Typography
} from '@mui/material';
import { Entry } from '../../interfaces/entry';
import { UIContext } from '../../context';


interface Props {
  entry: Entry;
}


export const EntryListItem: FC<Props> = ({ entry }) => {


  const { startDraggingEntry, endDraggingEntry } = useContext(UIContext)


  const onDragStart = (event: DragEvent<HTMLDivElement>) => {
    event.dataTransfer.setData('text', entry._id)

    // TODO: modificar el estado, para indicar q estoy haciendo drag
    startDraggingEntry();
  }

  const onDragEnd = (event: DragEvent<HTMLDivElement>) => {

    // TODO: cancelar el estado de ondrag
    endDraggingEntry()
  }



  return (
    <Card
      sx={{ marginBottom: '20px ' }}
      draggable
      onDragStart={onDragStart}
      onDragEnd={onDragEnd}
    // Eventos de drag
    >
      <CardActionArea>
        <CardContent>
          <Typography sx={{ whiteSpace: 'pre-line' }}>
            {entry.description}
          </Typography>
        </CardContent>
        <CardActions sx={{ display: 'flex', justifyContent: 'end', paddingRight: 2 }}>
          <Typography variant='body2'>
            Hace 30 min
          </Typography>
        </CardActions>
      </CardActionArea>
    </Card>
  )
}

