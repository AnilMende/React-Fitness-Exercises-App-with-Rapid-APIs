import React, { useState } from "react";
import {Box} from '@mui/material';
import HeroBanner from "../components/HeroBanner";
import SearchExercises from "../components/SearchExercises";
import Exercises from "../components/Exercises";
const Home = () => {

    // the reason why we are using these states in home is that
    // the change in Home component will result in the change of all other components
    const [bodyPart, setBodyPart] = useState(['all']);

    // to store the searched Exercises
    const [exercises, setExercises] = useState([]);

    return(
        <Box>
            <HeroBanner />
            <SearchExercises 
               setExercises={setExercises} 
               bodyPart={bodyPart} 
               setBodyPart={setBodyPart}
               />
            <Exercises
               exercises={exercises}
               setExercises={setExercises} 
               bodyPart={bodyPart} 
            />
        </Box>
    )
}
export default Home;