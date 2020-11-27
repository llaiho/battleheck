import { CharacterAttributes, SkillComplexcity, SkillTraining } from "../interfaces/Character";
import { Skill, SKILLID } from "../interfaces/Skill";




export enum SPECS_AFFILIATION {
    DAVION = "Davion"
}

export enum SPECS_TECHNICAN {
    AERO = "aeronautics"
}

export enum SPECS_GUNNERY {
    MECH = "mech"
}

export enum SPECS_TACTICS {
    INFANTRY = "infantry"
}

export enum SPECS_PILOTING {
    AEROSPACE       = "aerospace",      // aerospace fighters, small crafts
    AIR_VEHICLE     = "air vehicle",    // atmosphere crafts
    BATTLESUIT      = "battlesuit",
    GROUND_VEHICLE  = "ground vehicle",
    MECH            = "mech",
    PROTOMECH       = "protomech",
    RAIL_VEHICLE    = "rail vehicle",
    SPACECRAFT      = "spacecraft"      // dropships, jumpships, warships, space stations
}


export enum SPECS_MEDICAL {
    GENERAL = "general",
    VETERINARY = "veterinary"
}

export enum SPECS_SECURITY {
    ELECTRONIC = "electronic",
    MECHANICAL = "mechanical"
}

export enum SPECS_ROGUE {
    PICKPOCKET = "pick pocket",
    QUICKDRAW = "quickdraw",
    SLEIGHT = "sleight of hand"
}