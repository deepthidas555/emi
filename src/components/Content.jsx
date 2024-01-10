import React, { useState } from 'react'

import Slider from '@mui/material/Slider';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import './Content.css'

import { Box } from '@mui/material';

function valuetext(value: number) {
    return `${value}°C`;
  }
  

function Content() {

    const [amount,setAmount]=useState(0)
    const [year,setYear]=useState(0)
    const [rate,setRate]=useState(0)
  return (
   <>
   <div className="content">

    {/* loan amount*/}

    <Box sx={{ width: 1000 }}>
        <p>Loan amount</p>
      <Slider
        size="small"
        defaultValue={100000}
        aria-label="Small"
        valueLabelDisplay="auto"
        step={10}
        max={1000000}
        className='amount'
        
      />
      <p>Year</p>

           <Slider
        aria-label="Temperature"
        defaultValue={1}
        getAriaValueText={valuetext}
        valueLabelDisplay="auto"
        step={1}
        marks
        min={0}
        max={30}
        className='year'
      />

      <p>Interest rate</p>
  <TextField label="%" size='sm' />
  <h3></h3>
  <Button variant="contained" >Submit</Button>
         </Box>
      {/* <Slider defaultValue={50} aria-label="Default" valueLabelDisplay="auto" /> */}



{/* interest rate */}




{/* duration */}




   </div>
   </>
  )
}

export default Content