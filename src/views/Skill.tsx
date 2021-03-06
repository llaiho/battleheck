import React from "react";
import { Skill, CharacterSkill, CharacterSkillView } from "../interfaces/Skill";
import { getSkillRank } from "../interfaces/Character";


export const SkillShow = (skill: CharacterSkillView) => {
    return (
        <div>
            {skill.skillPrimaryName}
            {skill.skillPrimaryAttribute}
            {skill.skillSecondaryAttribute}
            {skill.skillTNC}
            {getSkillRank(skill.skillXP)}
        </div>
    );
}

export const SkillEdit = (skill: Skill) => {

}

export const SkillListShow = () => {
    
}


