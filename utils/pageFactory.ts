import { LocatorContext } from '../types/pageFactory/component';

//предназначен для форматирования строкового локатора, заменяя плейсхолдеры в локаторе соответствующими значениями из контекста
export const locatorTemplateFormat = (locator: string, { ...context }: LocatorContext): string => {
  let template = locator;
  for (const [key, value] of Object.entries(context)) {
    template = template.replace(`{${key}}`, value.toString());
  }

  return template;
};