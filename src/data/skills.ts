
import { CharacterAttributes, SkillComplexcity, SkillTraining } from "../interfaces/Character";
import { Skill, SKILLID } from "../interfaces/Skill";
import { SPECS_TECHNICAN, SPECS_TACTICS } from "./specialization";


const SKILLS: Skill[] = [
    {
        id: SKILLID.PILOT,
        skillPrimaryName: "nimi",
        skillPrimaryAttribute: CharacterAttributes.BOD,
        skillTNC: [SkillComplexcity.Complex, SkillTraining.Basic],
        skillTiered: false,
        skillStandardSpecializationOptions: SPECS_TECHNICAN.AERO,
    }
];

export default SKILLS;

/*
export enum SKILLID {
    SKILL1 ="Taito 1"
}

const SKILLS: Skill[] = [
    {
        id: SKILLID.SKILL1,
        name: "taito",
        description: "Foo bar"
    }
]


export interface Skill {
    id: SKILLID;
    name: string;
    description: string;
}

export interface CharacterSkillValue {
    skillId: SKILLID;
    exp: number;
}


export interface Character {
    name: string;
    skills: CharacterSkillValue[];
}

export interface CharacterSkill extends Skill {
    exp: number;
}


function getCharSkils(char: Character): CharacterSkill[] {

    return char.skills.map((ckv: CharacterSkillValue) => {

        const sk = SKILLS.find((s: Skill) => s.id === ckv.skillId);
        if(!sk) {
            throw new Error(Unknown skill ${ckv.skillId});
        }
        const csk: CharacterSkill = {...sk, exp: ckv.exp};
        return csk;

    });
}
*/

 