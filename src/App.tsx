import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Button } from "@material-ui/core";
import { MyForm } from "./views/testview";
import { Skill } from './interfaces/Skill';
// import { MyForm } from "./views/benForm";

interface Props {
  skillList: Skill[];
}

function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.tsx</code> and save to reload.
    //     </p>
    //     <p>
    //       <Button>testi</Button>
          
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>



    <div style={{ textAlign: "center" }}><MyForm onSubmit={() => {}}/></div>

  //  <div><Rootview/></div>

  //  <Rootview />
    
  );
}

 export default App;
