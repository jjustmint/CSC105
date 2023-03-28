import { useState } from 'react'
import Nav from './components/Nav'
import './App.css'
import Content from './components/Content'
import Sidebar from './components/Sidebar'
import Rightbar from './components/Rightbar'
import { Grid } from '@mui/material'

function App() {
  return (
    <div className="App">
      <Nav />
      <Grid container direction="row" spacing={2} pt={2}>
        <Grid item xs={4}>
          <Sidebar />
        </Grid>
        <Grid item xs={12} md={4}>
          <Content />
        </Grid>
        <Grid item xs={4}>
          <Rightbar />
        </Grid>
      </Grid>
    </div>
  );
}

export default App
