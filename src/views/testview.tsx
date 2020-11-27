import React, { FC } from "react";
import { TextField, Card, Grid, Button } from "@material-ui/core";
import { makeStyles, createStyles, Theme } from "@material-ui/core";
import { Formik, Form, Field } from "formik";

import { MyField } from "./MyField";
import { values } from "mobx";
import { Skill } from '../interfaces/Skill';
import { SkillShow, SkillEdit } from "./Skill";


interface Values {
    firstName: string;
    lastName: string;
    email: string;

}

//let skillList: Skill[];

 interface Props {
     onSubmit: (values: Values) => void;    
     
 }


//interface AddSkillToList {
//    addSkill: 
//}

// const [skills];

// const gridSize = 3;

interface SkillProps {
    skills: Skill[];

}

const addSkillToList = (skill: string) => {

}

export const MyForm: React.FC<Props> = ( {onSubmit} ) => {
    return (
        <Formik
        initialValues = {{ skill: "",skill1: "",skill2: "", firstName: "", lastName: "", email: ""}}
        onSubmit = {values => {
           /*  onSubmit(values); */
        }}>

 
            {({values}) => (
            <Form>
            <div>
                <Grid /* container alignItems="center" justify="flex-start" */>

                <Field
                        name="skill"
                        placeholder="skill name"
                        component={MyField}
                        
                    />
                    
                  
                    </Grid>
                    
                </div>
                <Button type="button">add skill</Button>

                <div>
                    <Field
                        name="firstName"
                        placeholder="first name"
                        component={MyField}
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