import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import DocumentUpload1 from './Components/Document_Upload/DocumentUpload1';
import './App.css';
import Sidebar from './Components/Sidebar/Sidebar';
import { Box } from '@mui/material'
const App = () => {
  return (
    <Box >
        {/* <Navbar/> */}
        {/* <DocumentUpload/> */}
        <DocumentUpload1/>
        {/* <Sidebar/> */}
    </Box>
  )
}

export default App
