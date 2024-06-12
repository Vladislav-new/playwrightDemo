import { Fixtures } from '@playwright/test';

//соединяем фикстуры в одну, чтоб обращаться к только ее элементам
export const combineFixtures = (...args: Fixtures[]): Fixtures =>
  args.reduce((acc, fixture) => ({ ...acc, ...fixture }), {});