import { User } from "./User";
import { Game } from "./Game";

import { CharacterAttributes, SkillComplexcity, SkillTraining } from "./Character";
// import { SPECS_AFFILIATION, SPECS_ACROBATICS, SPECS_TECHNICAN, SPECS_TACTICS, SPECS_GUNNERY, } from "../data/specialization";
// import { SPECS_LIST } from "../data/skills";
import { SKILL_SPECS } from "../data/specialization";


export enum SKILL_SPECIALIZATION {
//    TECHNICAN = SPECS_TECHNICAN.AERO
}



export enum SKILLID {
    GUNNERY = "gunnery",
    PILOT = "pilot",
    TECHNICAN = "technican",
}

export interface Skill {
    skillID: SKILLID;
    skillPrimaryName: string;
    skillPrimaryAttribute: CharacterAttributes;
    skillSecondaryAttribute?: CharacterAttributes;
    skillTNC: [SkillComplexcity, SkillTraining];    
    skillTiered: boolean;
//    skillStandardSpecializationOptions?: SPECS_AFFILIATION | SPECS_ACROBATICS | SPECS_TECHNICAN | SPECS_GUNNERY | SPECS_TACTICS ;
    skillStandardSpecializationOptions? : SKILL_SPECS;
}

export interface CharacterSkill {
    id: string;
    skillID: SKILLID;
    skillXP: number;
    skillSpecialization?: string;
}

export interface CharacterSkillView extends Skill, CharacterSkill {
    
}
