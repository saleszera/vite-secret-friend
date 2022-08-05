import { render, screen, fireEvent, cleanup } from '@testing-library/react';
import { vi, describe, it, expect } from 'vitest';

import { Translation } from '.';

const mockChangeLanguage = vi.fn();

vi.mock('react-i18next', () => ({
  ...vi.importActual('react-i18next'),
  useTranslation: () => ({
    t: (str: string) => str,
    i18n: {
      language: 'pt-BR',
      changeLanguage: () => new Promise(mockChangeLanguage),
    },
  }),
}));

const flags = [
  { title: 'Português', flag: '🇧🇷', lang: 'pt-BR' },
  { title: 'Inglês', flag: '🇺🇸️️', lang: 'en-US' },
  { title: 'Espanhol', flag: '🇪🇦️️', lang: 'es' },
];

afterEach(() => {
  vi.clearAllMocks();
  cleanup();
});

describe('Translation use case', () => {
  it('Should be able to change language', async () => {
    render(<Translation flags={flags} />);

    const button = screen.getByTitle('Inglês');
    fireEvent.click(button);

    expect(mockChangeLanguage).toHaveBeenCalledTimes(1);
  });
  it('Should not be able to click on the button of current language', () => {
    render(<Translation flags={flags} />);

    const button = screen.getByTitle('Português');

    expect(button).toBeDisabled();
  });
});
