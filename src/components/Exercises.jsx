import React from 'react';
import { useEffect, useState } from 'react';
import Pagination from '@mui/material/Pagination';
import {Box, Stack, Typography} from '@mui/material';
import { exerciseOptions, fetchData } from '../utils/fetchData';
import ExerciseCard from './ExerciseCard';


const Exercises = ({ exercises,bodyPart, setExercises}) => {
  
  const [currentPage, setCurrentPage] = useState(1);
  const exercisesPerPage = 9;

  const indexOfLastExercise = currentPage * exercisesPerPage;
  const indexOfFirstExercise = indexOfLastExercise - exercisesPerPage;
  const currentExercises = exercises.slice(indexOfFirstExercise, indexOfLastExercise);

  const paginate = (e, value) => {
    setCurrentPage(value);

    window.scrollTo({
      top:1650,
      behavior:'smooth'
    })
  }

  console.log(exercises);
  if (!exercises) return 'Loading...';

  
  return (
    <Box id='exercises'
      sx={{mt: {ig:'110px'}}}
      mt='50px'
      p='20px'
    
    >
      <Typography variant='h3' padding='25px'>
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
        
        {currentExercises?.map((exercise, index)=>{
          return(            
            
            <ExerciseCard key={index} exercise={exercise}/>
          );
        })}
      </Stack>
      <Stack mt='100px' alignItems='center'>
        {exercises.length > exercisesPerPage && (
          <Pagination color='standard'
            shape='rounded'
            defaultPage={1}
            count={Math.ceil(exercises.length / exercisesPerPage)}
            page={currentPage}
            onChange={paginate}
            size='large'
          >

          </Pagination>
        )}
      </Stack>
    </Box>
  )
}

export default Exercises