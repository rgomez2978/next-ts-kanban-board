import { useContext } from 'react';
import { InboxOutlined, MailOutline } from "@mui/icons-material"
import {
  Box,
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography
} from "@mui/material"
import { UIContext } from "../../context/ui"

const menuItems: string[] = [
  'Inbox',
  'Starred',
  'Send Email',
  'Drafts',
]

export const Sidebar = () => {

  const { sidemenuOpen, closeSideMenu } = useContext(UIContext)

  return (
    <Drawer
      anchor="left"
      open={sidemenuOpen}
      onClose={() => closeSideMenu()}
    >
      <Box sx={{ width: '250px' }}>
        <Box sx={{ padding: '5px 10px' }}>
          <Typography variant="h4">Menú</Typography>
          <List>
            {
              menuItems.map((text, index) => (
                <ListItemButton key={index}>
                  <ListItemIcon>
                    {index % 2 ? <InboxOutlined /> : <MailOutline />}
                  </ListItemIcon>
                  <ListItemText primary={text} />
                </ListItemButton>
              ))
            }
          </List>
          <Divider />
          <List>
            {
              menuItems.map((text, index) => (
                <ListItem key={index}>
                  <ListItemIcon>
                    {index % 2 ? <InboxOutlined /> : <MailOutline />}
                  </ListItemIcon>
                  <ListItemText primary={text} />
                </ListItem>
              ))
            }
          </List>
        </Box>
      </Box>
    </Drawer>
  )
}
