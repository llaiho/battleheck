import { User } from "./User";
import { Game } from "./Game";
// import { v4 } from "uuid";


export enum SkillComplexcity {
    "Simple" = "Simple",
    "Complex" = "Complex"
}

export enum SkillTraining {
    "Basic" = "Basic",
    "Advanced" = "Advanced"
}

export enum CharacterAttributes {
    "STR" = "STR",
    "BOD" = "BOD",
    "RFL" = "RFL",
    "DEX" = "DEX",
    "INT" = "INT",
    "WIS" = "WIS",
    "CHA" = "CHA",
    "EDG" = "EDG"
}


const skillTargetNumber = new Map<[SkillComplexcity, SkillTraining], number>();

skillTargetNumber.set([SkillComplexcity.Simple, SkillTraining.Basic], 7);
skillTargetNumber.set([SkillComplexcity.Simple, SkillTraining.Advanced], 8);
skillTargetNumber.set([SkillComplexcity.Complex, SkillTraining.Basic], 8);
skillTargetNumber.set([SkillComplexcity.Complex, SkillTraining.Advanced], 9);

export {
    skillTargetNumber
}


export interface Character {

    characterID: string;
    characterName: string;
    characterNick?: string;
    characterAlias?: [string];
    characterInGame: Game["gameID"];

    // attributes

    
    str: number;    // strenght
    bod: number;    // body (constitution)
    rfl: number;    // reflex
    dex: number;    // dexterity
    int: number;    // intelligence
    wis: number;    // wisdom
    cha: number;    // charisma
    edg: number;    // edge (luck)


    // skills

//    skillAcrobaticsFreeFall_TNC: [number, SkillComplexcity, SkillTraining];     // Target Number / skill Compexcity (Simple/Complex)(Basic/Advanced)
    skillAcrobatics_TNC: [SkillComplexcity.Simple, SkillTraining.Basic];
    skillAcrobatics_LinkedAttribute: CharacterAttributes.RFL;
    skillAcrobaticsFreeFall_XP: number;
    skillAcrobaticsFreeFall_Specialization: string;

//    skillAcrobaticsGymnastics_TNC: [number, SkillComplexcity, SkillTraining];
    skillAcrobaticsGymnastics_XP: number;
    skillAcrobaticsGymnastics_Specialization: string;

    skillActing_TNC: [SkillComplexcity.Complex, SkillTraining.Basic];
    skillActing_LinkedAttribute: CharacterAttributes.CHA;
    skillActing_XP: number;
    skillActing_Specialization: string;

    skillAdministration_TNC: [SkillComplexcity, SkillTraining];  
    skillAdministration_XP: number;
    skillAdministration_Specialization: string;

    skillAppraisal_TNC: [SkillComplexcity, SkillTraining];
    skillAppraisal_XP: number;
    skillAppraisal_Specialization: string;

    skillArchery_TNC: [SkillComplexcity, SkillTraining];
    skillArchery_XP: number;
    skillArchery_Specialization: string;

    skillArt: [SubSkill];
    skillTiers: boolean;

    computersTNC: [number, string, string];



    drivingTNC: [number, string, string];
    drivingGroundTNC_XP: number;
}


export interface SubSkill {

//    skillNameMain: string;
    skillNameSub: string;
    skillTNC: [number, SkillComplexcity, SkillTraining];
    skillXP: number;

}


