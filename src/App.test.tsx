import React from 'react';
import { render } from '@testing-library/react';
import App from './App';
import { getSkillRank } from './interfaces/Character';

test('skill XP to rank tests', () => {
  
  expect(getSkillRank(-1)).toBe(-1);
  expect(getSkillRank(0)).toBe(-1);
  expect(getSkillRank(19)).toBe(-1);

  expect(getSkillRank(21)).toBe(0);
  expect(getSkillRank(29)).toBe(0);

  expect(getSkillRank(30)).toBe(1);
  expect(getSkillRank(49)).toBe(1);

  expect(getSkillRank(50)).toBe(2);
  expect(getSkillRank(79)).toBe(2);

  
  

});
