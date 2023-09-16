import React from 'react';
import Drawer from '@mui/material/Drawer';
import UploadFileIcon from '@mui/icons-material/UploadFile';
import { Box } from '@mui/material';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';


import Collapse from '@mui/material/Collapse';
import { Button,Checkbox,TextField, Typography } from '@mui/material'
import FormLabel from '@mui/material/FormLabel';
import FormControl from '@mui/material/FormControl';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormHelperText from '@mui/material/FormHelperText';
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';
import PermIdentityOutlinedIcon from '@mui/icons-material/PermIdentityOutlined';
import FolderCopyOutlinedIcon from '@mui/icons-material/FolderCopyOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import InfoIcon from '@mui/icons-material/Info';
const DocumentUpload1 = () => {
  const [open, setOpen] = React.useState(false);
  const [state, setState] = React.useState({
    Hindi: true,
    Telugu: false,
    Tamil: false,
    Gujurati:false,
    Bengali:false,
    Marathi:false
  });

  const handleChange = (event) => {
    setState({
      ...state,
      [event.target.name]: event.target.checked,
    });
    console.log(state);
  };
  const { Hindi, Telugu, Tamil, Gujurati, Bengali, Marathi  } = state;
 
  const handleSubMenuToggle = () => {
    setOpen(!open);
  };

  return (

    <Box sx={{display:'flex', flexDirection:"row"}}>
    <Box sx={{width:"18vw",backgroundColor:'#323439',height:'100vh',color:'#f6f6f6'}}>
      <List>
      <ListItem sx={{display:'flex', flexDirection:"column",alignItems:'center',justifyContent:'center',marginBottom:"20px"}}>
      <AccountCircleRoundedIcon sx={{color:'#d5d8e1',fontSize:"120px"}} />
      <Typography sx={{fontSize:"18px"}}>Shreyas Rana</Typography>
      </ListItem>
        <ListItem button>
          <ListItemIcon>
            <PermIdentityOutlinedIcon sx={{color:'#d5d8e1'}}/>
          </ListItemIcon>
          <ListItemText primary="Profile" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <FolderCopyOutlinedIcon sx={{color:'#d5d8e1'}} />
          </ListItemIcon>
          <ListItemText primary="Document" />
        </ListItem>

        <ListItem button>
          <ListItemIcon>
            <DeleteOutlineIcon sx={{color:'#d5d8e1'}} />
          </ListItemIcon>
          <ListItemText primary="Trash" />
        </ListItem>


        <ListItem button sx={{marginTop:'400px'}}>
        <ListItemText primary="Log Out" />
          <ListItemIcon>
            <LogoutOutlinedIcon sx={{color:'#d5d8e1',marginLeft:'-140px'}} />
          </ListItemIcon>
         
        </ListItem>
        <ListItem button sx={{}}>
        <ListItemIcon>
            <InfoIcon sx={{color:'#d5d8e1'}} />
          </ListItemIcon>
         
        <ListItemText primary="About Us" sx={{marginLeft:'-20px'}}/>
         
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
    <Box sx={{width:"72vw", paddingLeft:"100px", paddingTop:"80px"}}>
    <Box sx={{}}>
 <Box sx={{display:'flex',flexDirection:'row',alignItem:'center',justifyContent:'center', marginTop:"5%"}}>
  <Box sx={{width:'60vw',borderRight:1,display:'flex',flexDirection:'column',height:"100%",justifyContent:"center"}}>
  <Typography sx={{fontSize:'18px', marginBottom:"8px"}}>Enter text to translate:</Typography>
    <TextField sx={{ width:"800px"}}  inputProps={{
    style: {
      height: "250px",
    },
  }} />
  <Box sx={{display:"flex",flexDirection:"row" ,marginLeft:'360px',marginTop:'30px',fontSize:'18px',fontWeight:'bold'}}><img src='orimage.jpeg' style={{width:'40vw',marginLeft:'-300px'}}></img></Box>

  <Button variant='contained'sx={{width:"250px",height:"50px",fontSize:"22px",backgroundColor:'#002447',marginLeft:'280px',marginTop:'30px',textTransform: "none"}}>Upload document  <UploadFileIcon sx={{marginLeft:'10px'}}/></Button>
  </Box>
  <Box sx={{width:'20vw'}}> 
  
  <FormControl sx={{ m: 3,marginLeft:"150px" }} component="fieldset" variant="standard">
  
        <FormLabel component="legend">Translate to:</FormLabel>
        <FormGroup>
          <FormControlLabel
            control={
              <Checkbox checked={Hindi} onChange={handleChange} name="Hindi" />
            }
            label="Hindi"
            sx={{color:'#002447'}}
          />
          <FormControlLabel
            control={
              <Checkbox checked={Telugu} onChange={handleChange} name="Telugu" />
            }
            label="Telugu"
          />
          <FormControlLabel
            control={
              <Checkbox checked={Tamil} onChange={handleChange} name="Tamil" />
            }
            label="Tamil"
          />
          <FormControlLabel
            control={
              <Checkbox checked={Gujurati} onChange={handleChange} name="Gujurati" />
            }
            label="Gujurati"
          />
          <FormControlLabel
            control={
              <Checkbox checked={Bengali} onChange={handleChange} name="Bengali" />
            }
            label="Bengali"
          />
          <FormControlLabel
            control={
              <Checkbox checked={Marathi} onChange={handleChange} name="Marathi" />
            }
            label="Marathi"
          />
        </FormGroup>
        <FormHelperText sx={{fontSize:'10px'}}>Please select at least one language</FormHelperText>
      </FormControl>

  </Box>
 </Box>
 <Button variant="contained" sx={{width:"150px", height:'40px', marginLeft:"45%",marginTop:'5%',backgroundColor:'#002447',textTransform: "none",fontSize:"22px"}}>Translate </Button>
    </Box> 
    </Box>
    </Box>
  );
};

export default DocumentUpload1;
