import React from 'react';
import Drawer from '@mui/material/Drawer';
import { Box } from '@mui/material';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import WorkIcon from '@mui/icons-material/Work';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import Collapse from '@mui/material/Collapse';

const Sidebar = () => {
  const [open, setOpen] = React.useState(false);

  const handleSubMenuToggle = () => {
    setOpen(!open);
  };

  return (
    // <Drawer
    //   variant="permanent"
    //   sx={{
    //     width: 240,
    //     flexShrink: 0,
    //     '& .MuiDrawer-paper': {
    //       width: 240,
    //       boxSizing: 'border-box',
    //     },
    //     color:'#323439'
    //   }}
    // >
    <Box sx={{width:300,backgroundColor:'#323439',height:'100vh',color:'#f6f6f6'}}>
      <List>
        <ListItem button>
          <ListItemIcon>
            <HomeIcon sx={{color:'#d5d8e1'}}/>
          </ListItemIcon>
          <ListItemText primary="Option1" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <InfoIcon sx={{color:'#d5d8e1'}} />
          </ListItemIcon>
          <ListItemText primary="Option2" />
        </ListItem>
        <ListItem button onClick={handleSubMenuToggle}>
          <ListItemIcon>
            <WorkIcon sx={{color:'#d5d8e1'}}/>
          </ListItemIcon>
          <ListItemText primary="Option3" />
          {open ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={open} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItem button sx={{ pl: 4 }}>
              <ListItemText primary="Service 1" />
            </ListItem>
            <ListItem button sx={{ pl: 4 }}>
              <ListItemText primary="Service 2" />
            </ListItem>
          </List>
        </Collapse>
      </List>
      <Divider />
      {/* Add more items or sections as needed */}
    {/* </Drawer> */}
    </Box>
  );
};

export default Sidebar;
