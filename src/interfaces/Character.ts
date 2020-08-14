import { User } from "./User";
import { Game } from "./Game";
// import { v4 } from "uuid";

export interface Character {

    characterID: string;
    characterName: string;
    characterNick?: string;
    characterAlias?: [string];
    characterInGame: Game["gameID"];

    // attributes

    strenght: number;
    dexterity: number;


    // skills

    administrationTNC: [number, string, string];  // Target Number / skill Compexcity (Simple/Complex)(Basic/Advanced)
    administration_XP: number;
    administrationSpecialization: string;

    computersTNC: [number, string, string];



    drivingTNC: [number, string, string];
    drivingGroundTNC_XP: number;
}


export interface Skill {

    skillName: string;
    skillSubskills: [string];
    skillTNC: [number, string, string];
    skillTiers: boolean;
    skillXP: skillSubskills[number];

}


