import React from 'react';
import { useEffect, useState } from 'react';
import Pagination from '@mui/material/Pagination';
import {Box, Stack, Typography} from '@mui/material';
import { exerciseOptions, fetchData } from '../utils/fetchData';
import ExerciseCard from './ExerciseCard';


const Exercises = ({ exercises,bodyPart, setExercises}) => {
  
  console.log(exercises);
  if (!exercises) return 'Loading...';
  
  return (
    <Box id='exercises'
      sx={{mt: {ig:'110px'}}}
      mt='50px'
      p='20px'
    
    >
      <Typography variant='h3'>
        Showing Results
      </Typography>
      <Stack direction='row'
        sx={{
          gap:{
            lg:'110px', xs:'50px'
          }
        }}
        flexWrap='wrap' justifyContent='center'
      >
        
        {exercises?.map((exercise, index)=>{
          return(            
            
            <ExerciseCard key={index} exercise={exercise}/>
          );
        })}
      </Stack>
    </Box>
  )
}

export default Exercises