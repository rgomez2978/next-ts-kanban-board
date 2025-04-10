import { ChangeEvent, FC, useContext, useState } from 'react'
import { Box, Button, TextField } from '@mui/material'
import { AddCircle, CancelOutlined, SaveOutlined } from '@mui/icons-material';
import { UIContext, EntriesContext } from '../../context';


export const EntryNew: FC = ({ children }) => {

  const { addNewEntry } = useContext(EntriesContext)
  const { isAddingEntry, setIsAddingEntry } = useContext(UIContext)

  const [inputValue, setInputValue] = useState('')
  const [isTouched, setIsTouched] = useState(false)


  const onChangeInput = (event: ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value)
  }

  const onSave = () => {
    if (inputValue.length === 0) return
    addNewEntry(inputValue)
    setIsAddingEntry(false)
    setIsTouched(false)
    setInputValue('')
  }

  return (
    <Box sx={{ marginBottom: 4, paddingX: 1 }}>
      {
        isAddingEntry ? (
          <>
            <TextField
              fullWidth
              autoFocus
              multiline
              sx={{ marginTop: 2, marginBottom: 2 }}
              label='Nueva Entrada'
              placeholder='Nueva Entrada'
              helperText={inputValue.length <= 0 && isTouched && 'Ingrese un valor'}
              value={inputValue}
              onChange={onChangeInput}
              error={inputValue.length <= 0 && isTouched}
              onBlur={() => setIsTouched(true)}
            />
            <Box display='flex' justifyContent='space-between' sx={{ marginBottom: 4 }}>
              <Button
                variant='outlined'
                color='primary'
                startIcon={<CancelOutlined />}
                onClick={() => setIsAddingEntry(false)}
              >
                Cancelar
              </Button>
              <Button
                variant='outlined'
                color='secondary'
                startIcon={<SaveOutlined />}
                onClick={onSave}
              >
                Guardar
              </Button>
            </Box>
          </>
        ) : (
          <>
            <Button
              startIcon={<AddCircle />}
              fullWidth
              variant='outlined'
              onClick={() => setIsAddingEntry(true)}
            >
              Agregar Nueva Tarea
            </Button>
          </>
        )
      }
    </Box>
  )
}
