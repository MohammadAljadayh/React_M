import React from 'react';
import { useState,useEffect } from 'react';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import styled from "styled-components";

const Container = styled.div`
 

  height: 70vh;
  position: relative;
  align-items: center;
  justify-content: center;
  margin-left: 30%;
`;





const Title = styled.h2`
    color:black;
   
    padding-top: 5%;
    margin-right: 2%;
`;
const Title1 = styled.h3`
    color:black;
    padding-top: 1%;
    margin-right: 2%;
`;



  function Part3 () {

  const [count, setCount] = useState(1);
  const [factorial1, setfactorial] = useState();

  useEffect(() => {
    const timeout = setTimeout(() => {
      setCount(count + 1);
      setfactorial(factorial(count+1))

    }, 3000);

    return () => {
      clearTimeout(timeout);
    };
  }, [count]);



  const handelinput= (e)=>{
    const numValue = parseInt(document.querySelector('input').value);
    setfactorial(factorial(numValue));
    setCount(numValue);

  }


  function factorial(n){
    let answer = 1;
    if (n === 0 || n === 1){
      return answer;
    }else{
      for(let i = n; i >= 1; i--){
        answer = answer * i;
      }
      return answer;
    }  
  }


  return (

    <Container  >

 
 <Stack spacing={0} direction="row">
 <Title1 > Insert A number :</Title1>  
 <TextField id="c" label="Outlined" variant="outlined" />
 </Stack>
 <br/>
  <Button style={{left:'20%', padding:'10px'}} variant="contained" placeholder='count' onClick={handelinput}>Calculate</Button>

  <Title> The Factorial for {count} ={factorial1} </Title>   

    </Container>


  );
}
  
    
  

  export default Part3 ;