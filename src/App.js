import React from 'react';
import { useState } from 'react';
import styled from 'styled-components';
import './App.css';


const CountButton=styled.button`
background-color:red;
`;

const App = () => {
  const [count,setCount]=useState(0);
 
 const increase=()=>{
  setCount(count+1)
 }
  return (
    <div className='App-header'>

    <div>{count}</div>
    <CountButton onClick={increase}>count</CountButton>
    </div>
  )
}

export default App