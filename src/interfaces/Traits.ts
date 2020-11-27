import { User } from "./User";
import { Game } from "./Game";

import { CharacterAttributes, SkillComplexcity, SkillTraining } from "./Character";

export enum TraitTraits {
    
}


export interface Traits {
    traitName: string;
    traitOpposed: boolean;
    traitPositiveName?: string;
    traitNegativeName?: string;
    traitXPperRank: number|[number];
    traitRanks?: number|[number]; 
}
