import React from 'react'
import Navbar from '../Navbar/Navbar'
import { Box,Button,Checkbox,Divider,TextField, Typography } from '@mui/material'
import FormLabel from '@mui/material/FormLabel';
import FormControl from '@mui/material/FormControl';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormHelperText from '@mui/material/FormHelperText';

const DocumentUpload = () => {
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
 
  return (
   

    
  250px",
    },
  }} />
  <Box sx={{display:"flex",flexDirection:"row" ,marginLeft:'360px',marginTop:'30px',fontSize:'18px',fontWeight:'bold'}}><Divider/>OR<Divider/></Box>

  <Button variant='contained'sx={{width:"300px",height:"60px",fontSize:"22px",backgroundColor:'#002447',marginLeft:'230px',marginTop:'30px'}}>Upload Document</Button>
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
        <FormHelperText sx={{fontSize:'8px'}}>Please select at least one language</FormHelperText>
      </FormControl>

  </Box>
 </Box>
 <Button variant="contained" sx={{width:"250px", height:'60px', marginLeft:"45%",marginTop:'5%',backgroundColor:'#002447'}}>Translate</Button>
    </Box>  <Box sx={{}}>
 <Navbar/>
 <Box sx={{display:'flex',flexDirection:'row',alignItem:'center',justifyContent:'center', marginTop:"5%"}}>
  <Box sx={{width:'60vw',borderRight:1,display:'flex',flexDirection:'column',height:"100%",justifyContent:"center"}}>
  <Typography sx={{fontSize:'18px'}}>Enter text to translate:</Typography>
    <TextField sx={{ width:"800px"}}  inputProps={{
    style: {
      height: "
  )
}

export default DocumentUpload
