import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Button } from "@material-ui/core";
import { MyForm } from "./views/testview";
import { Skill, SKILLID } from './interfaces/Skill';
import { SKILL_SPECS } from './data/specialization';
import { Character } from './interfaces/Character';
// import { MyForm } from "./views/benForm";

interface Props {
  skillList: Skill[];
}

function App() {

  const char: Character = {
    characterID: "sdfsdf",
    str: 300,    // strenght
    bod: 300,    // body (constitution)
    rfl: 300,    // reflex
    dex: 800,    // dexterity
    int: 300,    // intelligence
    wis: 300,    // wisdom
    cha: 300,    // charisma
    edg: 300,    // edge (luck)
	skillList: [
		{
			id: "ks-1",
			skillID: SKILLID.PILOT,
			skillXP: 20,
			skillSpecialization: SKILL_SPECS.AIR_VEHICLE,
		},
		{
			id: "ks-2",
			skillID: SKILLID.GUNNERY,
			skillXP: 100,
			skillSpecialization: SKILL_SPECS.BATTLESUIT,
		},
	],
};

  return (


    <div style={{ textAlign: "center" }}><MyForm character={char} onSubmit={() => {}}/></div>


  );
}

 export default App;
