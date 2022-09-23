import React, {useState} from "react";
import Dogs from './components/Dogs'
import Button from "./components/Button";

function App() {
  //State holds dog data 
  const [ randomDog, setDog ] = React.useState ( {} )
  const handleSubmit = async () =>{
    //random dog url
    const randomDog="https://dog.ceo/api/breeds/image/random";
    
    let wait = await fetch(randomDog);
    let json = await wait.json()
    console.log(json)
    setDog(json)
  }
  //Function to get the dogs now
  
  return (
    <div className="App">
      <h1>Random Doges</h1>
      <Button handleSubmitFromApp={handleSubmit} />
      <Dogs randomDog={randomDog}/>
    </div>
  );
}

export default App;
