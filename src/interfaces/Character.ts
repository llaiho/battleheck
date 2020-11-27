import { User } from "./User";
import { Game } from "./Game";
import { Skill } from "./Skill";
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

    //      attributes 
    // !! number is XP, not rank !!

    
    str: number;    // strenght
    bod: number;    // body (constitution)
    rfl: number;    // reflex
    dex: number;    // dexterity
    int: number;    // intelligence
    wis: number;    // wisdom
    cha: number;    // charisma
    edg: number;    // edge (luck)


    // skills

    skillList: [Skill];

}


export function getIndexFromValueArray(num: number, list: number[]): number {

    for(let i = 0; i < list.length ; i++ ) {
        if(list[i] > num) {
            return i - 1;
        }
    }
    return ( list.length - 1 );
}

export function getSkillRank(xp: number): number {
    return getIndexFromValueArray(xp, [20, 30, 50, 80, 120, 170, 230, 300, 380, 470, 570]);
}

export function getAttributeRank(xp: number): number {
    return Math.floor((xp / 100));
}
