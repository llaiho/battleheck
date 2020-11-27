import { render } from '@testing-library/react';
// import App from './App';
import { getSkillRank, getAttributeRank } from './Character';

test('skill XP to rank tests', () => {
  

    expect(getSkillRank(-1)).toBe(-1);
    expect(getSkillRank(0)).toBe(-1);
    expect(getSkillRank(19)).toBe(-1);
  
    expect(getSkillRank(20)).toBe(0);
    expect(getSkillRank(21)).toBe(0);
    expect(getSkillRank(29)).toBe(0);
  
    expect(getSkillRank(30)).toBe(1);
    expect(getSkillRank(49)).toBe(1);
  
    expect(getSkillRank(50)).toBe(2);
    expect(getSkillRank(79)).toBe(2);
  
    expect(getSkillRank(80)).toBe(3);
    expect(getSkillRank(119)).toBe(3);
  
    expect(getSkillRank(120)).toBe(4);
    expect(getSkillRank(169)).toBe(4);
  
    expect(getSkillRank(170)).toBe(5);
    expect(getSkillRank(229)).toBe(5);
  
    expect(getSkillRank(230)).toBe(6);
    expect(getSkillRank(299)).toBe(6);
    
    expect(getSkillRank(300)).toBe(7);
    expect(getSkillRank(379)).toBe(7);
  
    expect(getSkillRank(380)).toBe(8);
    expect(getSkillRank(469)).toBe(8);
    
    expect(getSkillRank(470)).toBe(9);
    expect(getSkillRank(569)).toBe(9);
  
    expect(getSkillRank(570)).toBe(10);
});



test('attribute XP to rank tests', () => {
  

    expect(getAttributeRank(-1)).toBe(-1);

    expect(getAttributeRank(0)).toBe(0);
    expect(getAttributeRank(99)).toBe(0);

    expect(getAttributeRank(100)).toBe(1);
    expect(getAttributeRank(199)).toBe(1);

    expect(getAttributeRank(200)).toBe(2);
    expect(getAttributeRank(299)).toBe(2);

    expect(getAttributeRank(300)).toBe(3);
    expect(getAttributeRank(399)).toBe(3);

    expect(getAttributeRank(400)).toBe(4);
    expect(getAttributeRank(499)).toBe(4);

    expect(getAttributeRank(500)).toBe(5);
    expect(getAttributeRank(599)).toBe(5);

    expect(getAttributeRank(600)).toBe(6);
    expect(getAttributeRank(699)).toBe(6);

    expect(getAttributeRank(2000)).toBe(20);
    expect(getAttributeRank(2099)).toBe(20);

});