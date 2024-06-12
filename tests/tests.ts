import { test as base } from '@playwright/test';
import { ContextPagesFixture, contextPagesFixture } from '../fixtures/contextPages';
import { PlaywrightPagesFixture, playwrightPagesFixture } from '../fixtures/playwrightPages';
import { combineFixtures } from '../utils/fixtures';

//позволяет использовать предварительно настроенные объекты и контексты в тестах,
//этот подход упрощает управление фикстурами и их повторное использование в тестах
export const searchTest = base.extend<ContextPagesFixture, PlaywrightPagesFixture>(
  combineFixtures(contextPagesFixture, playwrightPagesFixture)
);