import { User } from "./User";
import { Game } from "./Game";

import { CharacterAttributes, SkillComplexcity, SkillTraining } from "./Character";
import { SPECS_TECHNICAN, SPECS_TACTICS, SPECS_GUNNERY } from "../data/specialization";


export enum SKILL_SPECIALIZATION {
//    TECHNICAN = SPECS_TECHNICAN.AERO
}



export enum SKILLID {
    PILOT = "nimi"
}

export interface Skill {
    id: SKILLID;
    skillPrimaryName: string;
    skillPrimaryAttribute: CharacterAttributes;
    skillSecondaryAttribute?: CharacterAttributes;
    skillTNC: [SkillComplexcity, SkillTraining];    
    skillTiered: boolean;
    skillStandardSpecializationOptions?: SPECS_TECHNICAN | SPECS_GUNNERY | SPECS_TACTICS ;
}

export interface CharacterSkill extends Skill {
    id: SKILLID;
    skillXP: number;
    skillSpecialization?: string;
}
