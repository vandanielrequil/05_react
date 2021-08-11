import React, {useState} from "react";
import './App.css';
import FirstComponent from './FirstComponent';

function App() {

  const [inputText,setInputText] = useState('feel free to type something');



  return (
    <div className="App">
      <input default = 'feel free to type something' value={inputText} onClick={e => e.target.value =''} onChange={ e => setInputText(e.target.value)}/>
      <FirstComponent textToShow={inputText}/>
    </div>
  );
}

export default App;
