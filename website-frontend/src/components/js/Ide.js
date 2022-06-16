import * as React from "react";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Editor from "@monaco-editor/react";
import Navbar from './Components/Navbar';
import { Bars } from 'react-loading-icons'
import '../css/ide.css';
import Axios from 'axios';
import { useState } from 'react';
export default function Ide() {
   
  const [userCode, setUserCode] = useState(``);
 
  
  const [userLang, setUserLang] = useState("python");
 
  
  const [userTheme, setUserTheme] = useState("vs-dark");
 
  
  const [fontSize, setFontSize] = useState(20);
 
  
  const [userInput, setUserInput] = useState("");
 
  
  const [userOutput, setUserOutput] = useState("");
 
  
  const [loading, setLoading] = useState(false);
   const options = {
    fontSize: fontSize
  }
 
  
  function compile() {
    setLoading(true);
    if (userCode === ``) {
      return
    }
 
    
    Axios.post(`http://localhost:8000/compile`, {
      code: userCode,
      language: userLang,
      input: userInput }).then((res) => {
      setUserOutput(res.data.output);
    }).then(() => {
      setLoading(false);
    })
  }
  function clearOutput() {
    setUserOutput("");
  }
  return (
    <div>


  <Grid container>
      
  <Grid item md={8} xs={12}>
    
        <div className="left-container">
           <Navbar
        userLang={userLang} setUserLang={setUserLang}
        userTheme={userTheme} setUserTheme={setUserTheme}
        fontSize={fontSize} setFontSize={setFontSize}
      />
          <Editor
            options={options}
            height="calc(90vh - 50px)"
            width="100%"
            theme={userTheme}
            language={userLang}
            defaultLanguage="python"
            defaultValue="# Enter your code here"
            onChange={(value) => { setUserCode(value) }}
    
          />
          <button className="run-btn" onClick={() => compile()}>
             Run
          </button>
        </div>
    
  </Grid>
  <Grid item md={4} xs={12}>
    
        <div className="right-container">
         <h4 className="h4">Input:</h4>
          <div className="input-box">
            <textarea id="code-inp" onChange=
              {(e) => setUserInput(e.target.value)}>
            </textarea>
          </div>
          <h4 className="h4">Output:</h4>
          {loading ? (
      <Bars/>
          ) : (
            <div className="output-box">
              
              <pre>{userOutput}</pre>
              <button onClick={() => { clearOutput() }}
                 className="clear-btn">
                 Clear
              </button>
            </div>
          )}
          </div>
   
  </Grid>
    </Grid>
      </div>
  );
}
