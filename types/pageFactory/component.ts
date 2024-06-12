import { Page } from '@playwright/test';

// Определяет тип для контекста локатора
export type LocatorContext = { [key: string]: string | boolean | number };
// Определяет свойства для компонента в рамках тестовой среды
export type ComponentProps = {
  page: Page;
  name?: string;
  locator: string;
};
// Расширяет LocatorContext с необязательным свойством locator,
// что позволяет дополнительно настраивать локаторы в контексте
export type LocatorProps = { locator?: string } & LocatorContext;