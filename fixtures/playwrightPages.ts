import { Fixtures } from '@playwright/test';
import { PlaywrightHomePage } from '../pages/playwrightHomePage';
import { PlaywrightLanguagesPage } from '../pages/playwrightLanguagesPage';
import { ContextPagesFixture } from './contextPages';

export type PlaywrightPagesFixture = {
  playwrightHomePage: PlaywrightHomePage;
  playwrightLanguagesPage: PlaywrightLanguagesPage;
};

export const playwrightPagesFixture: Fixtures<PlaywrightPagesFixture, ContextPagesFixture> = {
  playwrightHomePage: async ({ contextPage }, use) => {
    const playwrightHomePage = new PlaywrightHomePage(contextPage);
    //экземпляр домашней страницы
    await use(playwrightHomePage);
  },
  playwrightLanguagesPage: async ({ contextPage }, use) => {
    const playwrightLanguagesPage = new PlaywrightLanguagesPage(contextPage);

    await use(playwrightLanguagesPage);
  }
};