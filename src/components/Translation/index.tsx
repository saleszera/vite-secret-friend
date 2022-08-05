import { useCallback } from 'react';
import { useTranslation } from 'react-i18next';

import { Button, TranslationContainer } from './styles';

interface IFlag {
  title: string;
  flag: string;
  lang: string;
}

interface ITranslation {
  flags: IFlag[];
}

export const Translation = ({ flags }: ITranslation) => {
  const {
    i18n: { changeLanguage, language },
  } = useTranslation();

  const handleChangeLanguage = useCallback(
    (newLanguage: string) => {
      if (language === newLanguage) {
        return;
      }

      changeLanguage(newLanguage);
    },
    [changeLanguage, language]
  );

  return (
    <TranslationContainer>
      {flags.map(({ title, flag, lang }) => (
        <Button
          disabled={language === lang}
          key={title}
          type="button"
          title={title}
          currentLanguage={language === lang}
          onClick={() => handleChangeLanguage(lang)}
        >
          {flag}
        </Button>
      ))}
    </TranslationContainer>
  );
};
