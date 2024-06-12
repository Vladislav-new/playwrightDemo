//форматирование текста где входная строка всегда будет возвращаться с большой буквы
export const capitalizeFirstLetter = (string: string): string => string.charAt(0).toUpperCase() + string.slice(1);