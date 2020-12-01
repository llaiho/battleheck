import React, { FC } from "react";
import { TextField, Card, Grid, Button } from "@material-ui/core";
import { makeStyles, createStyles, Theme } from "@material-ui/core";
import { Formik, Form, Field, FieldArray } from "formik";

import { MyField } from "./MyField";
import { values } from "mobx";
import { CharacterSkill, CharacterSkillView, Skill, SKILLID } from '../interfaces/Skill';
import { SkillShow, SkillEdit } from "./Skill";

import SKILLS from "../data/skills";
import { SKILL_SPECS } from "../data/specialization";
import { Character, getAttributeRank, getSkillRank } from "../interfaces/Character";
import { parse } from "path";

import { useCardStyles } from "../styles/CardStyle";

interface Values {
    firstName: string;
    lastName: string;
    email: string;

}


const char: Character = {
    characterID: "sdfsdf",
    str: 300,    // strenght
    bod: 300,    // body (constitution)
    rfl: 300,    // reflex
    dex: 300,    // dexterity
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


const viewSkills: CharacterSkillView[] = char.skillList.reduce((skv: CharacterSkillView[], cs: CharacterSkill) => {
	const skill = SKILLS.find((s: Skill) => s.skillID === cs.skillID);
	if (!skill) return skv;
	const view: CharacterSkillView = { ...cs, ...skill };
	skv.push(view);
	return skv;
}, []);


//let skillList: Skill[];


interface Props {
    character: Character;
    onSubmit: (values: Values) => void;        
}


interface SkillProps {
    skills: Skill[];

}

const SPACING: string = "  ";

const addSkillToList = (skill: string) => {

}

export const MyForm: React.FC<Props> = ( props ) => {

    const classes = useCardStyles();

    return (
        <Formik
        initialValues = {{ ...props.character }}
        onSubmit = {values => {
           /*  onSubmit(values); */
        }}>
            
 
            {({values}) => (
            <Form>
                <div>
                <Field
                        {...(getAttributeRank(values.dex))} 
                        {...console.log((getAttributeRank(values.dex)))}
                        placeholder="shit name"
                        component={MyField}
                        type="number"
                    />                

                </div>
                <Button type="button">add skill</Button>

                <div>
                <Field
                        name="dex"
                        placeholder="test shit"
                        component={MyField}
                    />
                </div>

                <div>
                    
                    <Card>
                        <Grid container direction="row" justify="space-around"  alignItems="center" >
                            <Grid>
                            STR {(getAttributeRank(values.str))} {}
                            </Grid><Grid>
                            BOD {(getAttributeRank(values.bod))} {} 
                            </Grid><Grid>
                            RFL {(getAttributeRank(values.rfl))} {}
                            </Grid><Grid>
                            DEX {(getAttributeRank(values.dex))} {}
                            </Grid><Grid>
                            INT {(getAttributeRank(values.int))} {}
                            </Grid><Grid>
                            WIS {(getAttributeRank(values.wis))} {} 
                            </Grid><Grid>
                            CHA {(getAttributeRank(values.cha))} {}
                            </Grid><Grid>
                            EDG {(getAttributeRank(values.edg))} {} 
                            </Grid>
                        </Grid>
                    </Card>
                    
                </div>


{/*                 <div>
                    <Card>
                    STR {(getAttributeRank(values.str))} {}
                    BOD {(getAttributeRank(values.bod))} {} 
                    RFL {(getAttributeRank(values.rfl))} {}
                    DEX {(getAttributeRank(values.dex))} {} 
                    INT {(getAttributeRank(values.int))} {}
                    WIS {(getAttributeRank(values.wis))} {}  
                    CHA {(getAttributeRank(values.cha))} {}
                    EDG {(getAttributeRank(values.edg))} {}  
                    </Card>
                </div> */}

                <div>
             <Field name="name" /> 
              <FieldArray
                name="skillList"
                render={() => (
                  <>
                    {values.skillList.map((s: CharacterSkill, i: number) => {
                      return (
                        <div key={s.skillID}>
                            {console.log("id: " + ((values.skillList[i].id)))}
                            {console.log("SkillID: " + ((values.skillList[i].skillID)))}
                            {console.log("getSkillRank: " + getSkillRank((values.skillList[i].skillXP)))}
                            <Field name={values.skillList[i].skillID} />
                          <Field name={values.skillList[i].skillXP} type="number" />
                          <Field {...values.skillList[i].skillID} />
                          <Field {...values.skillList[i].skillXP} type="number" />
                        </div>
                      );
                    })}
                  </>
                )}
              />
                </div>

                <div>
                    <Field
                        name="lastName"
                        placeholder="last name"
                        component={MyField}
                    />
                </div>

                <div>
                    <Field name="email" placeholder="email" component={MyField} />
                </div> 
                <Button type="submit">submit</Button>
            </Form>
            )} 

        </Formik>
    );
    
}; 


/*

import { Field, FieldArray, Formik } from "formik";
import * as React from "react";
import "./styles.css";

interface Skill {
  id: string;
  name: string;
  value: number;
}

interface Char {
  name: string;
  skills: Skill[];
}

export default function App() {
  const c: Char = {
    name: "foo Bar",
    skills: [
      {
        id: "sk-1",
        name: "Jump",
        value: 3
      },
      {
        id: "sk-2",
        name: "Dive",
        value: 2
      }
    ]
  };

  return (
    <div className="App">
      <Formik initialValues={{ ...c }} onSubmit={(val) => {}}>
        {({ values }) => {
          console.log(values);
          return (
            <>
              <Field name="name" />
              <FieldArray
                name="skills"
                render={() => (
                  <>
                    {values.skills.map((s: Skill, i: number) => {
                      return (
                        <div key={s.id}>
                          <Field name={skills[${i}].name} />
                          <Field name={skills[${i}].value} type="number" />
                        </div>
                      );
                    })}
                  </>
                )}
              />
            </>
          );
        }}
      </Formik>
    </div>
  );
}

*/