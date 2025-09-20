import React, { useEffect, useState } from "react";
import { Box, Button, Stack, TextField, Typography } from "@mui/material";

import { fetchData, exerciseOptions } from "../test";

import HorizontalScrollbar from "./HorizontalScrollbar";



const SearchExercises = ({setExercises,bodyPart, setBodyPart}) => {
    // state for the search input
    const [search, setSearch] = useState('');


    // when the user opens we have to show the categories
    // by using the bodyPartList we can display the different categories
    const [bodyParts, setBodyParts] = useState([]);

    useEffect(() => {

        const fetchExercisesData = async () => {
            const bodyPartsData = await fetchData('https://exercisedb.p.rapidapi.com/exercises/bodyPartList', exerciseOptions);
            setBodyParts(['all', ...bodyPartsData]);
        }
        // we are calling the function as soon as the app loads
        fetchExercisesData();
    },[])



    // to handle the onclick event on the button
    const handleSearch = async () => {

        if(search){

            const exercisesData = await fetchData('https://exercisedb.p.rapidapi.com/exercises', exerciseOptions);
            // console.log(exercisesData);

            const searchedExercises = exercisesData.filter(
                 (exercise) => exercise.name.toLowerCase().includes(search)
                 ||  exercise.target.toLowerCase().includes(search)
                 ||  exercise.equipment.toLowerCase().includes(search)
                 ||  exercise.bodyPart.toLowerCase().includes(search)
                );

                setSearch('');
                setExercises(searchedExercises);
        }
    }


    return(
        <Stack alignItems="center" mt="37px" 
        justifyContent="center" p="20px" >

            <Typography fontWeight={700} sx={{fontSize:{lg:"44px", xs:"30px"}}} 
            mb ="50px" textAlign="center">
                Awesome Exercises You <br/> Should Know
            </Typography>

            <Box position="relative" mb="72px">
                <TextField
                   sx={{input : {fontWeight:'700',
                                 border:'none',
                                 borderRadius:'4px'},

                        width:{lg:'800px',xs:'350px'},
                        backgroundColor:'#ffff',
                        borderRadius:"40px"  }}
                   height = "72px"

                   value= {search}
                   onChange={(e) => setSearch(e.target.value.toLowerCase())}
                   
                   placeholder="Search Exercises"
                   type="text"
                />

                <Button sx={{
                      bgcolor:"#ff2625",
                      color:"#ffff",
                      textTransform:"none", width:{lg:"175px", xs:"80px"},
                      fontSize:{lg:'20px', xs:'14px'}, height:'56px',position:'absolute',right:0}}

                      onClick={handleSearch}
                    >Search</Button>
            </Box>
            {/* for BodyParts category horizontalscrollbar */}
            <Box sx={{position:'relative', width:'100%', p:'20px'}}>
                {/* it is using the prop data */}
                <HorizontalScrollbar data={bodyParts} 
                bodyPart={bodyPart} setBodyPart={setBodyPart}/>
                
            </Box>
        </Stack>
    )
}

export default SearchExercises;