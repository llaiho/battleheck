
import { CharacterAttributes, SkillComplexcity, SkillTraining } from "../interfaces/Character";
import { Skill, SKILLID } from "../interfaces/Skill";
import { SKILL_SPECS } from "./specialization";



const SKILLS: Skill[] = [


    {
        skillID: SKILLID.GUNNERY,
        skillPrimaryName: "gunnery",
        skillPrimaryAttribute: CharacterAttributes.RFL,
        skillSecondaryAttribute: CharacterAttributes.DEX,
        skillTNC: [SkillComplexcity.Simple, SkillTraining.Advanced],
        skillTiered: false,
        skillStandardSpecializationOptions: ( SKILL_SPECS.AEROSPACE, SKILL_SPECS.AIR_VEHICLE, SKILL_SPECS.BATTLESUIT,
                                            SKILL_SPECS.GROUND_VEHICLE, SKILL_SPECS.MECH, SKILL_SPECS.PROTOMECH, 
                                            SKILL_SPECS.SEA_VEHICLE, SKILL_SPECS.SPACECRAFT, SKILL_SPECS.TURRET)
    },

    {
        skillID: SKILLID.PILOT,
        skillPrimaryName: "pilot",
        skillPrimaryAttribute: CharacterAttributes.RFL,
        skillSecondaryAttribute: CharacterAttributes.DEX,
        skillTNC: [SkillComplexcity.Simple, SkillTraining.Advanced],
        skillTiered: false,
        skillStandardSpecializationOptions: ( SKILL_SPECS.AEROSPACE, SKILL_SPECS.AIR_VEHICLE, SKILL_SPECS.BATTLESUIT,
                                             SKILL_SPECS.MECH, SKILL_SPECS.PROTOMECH, SKILL_SPECS.SPACECRAFT)
    },

    {
        skillID: SKILLID.TECHNICAN,
        skillPrimaryName: "technican",
        skillPrimaryAttribute: CharacterAttributes.DEX,
        skillSecondaryAttribute: CharacterAttributes.INT,
        skillTNC: [SkillComplexcity.Complex, SkillTraining.Advanced],
        skillTiered: false,
        skillStandardSpecializationOptions: ( SKILL_SPECS.AERONAUTICS, SKILL_SPECS.CYBERNETICS, SKILL_SPECS.ELECTRONIC,
                                             SKILL_SPECS.JET, SKILL_SPECS.MECHANICAL, SKILL_SPECS.MYOMER)
    },
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

 