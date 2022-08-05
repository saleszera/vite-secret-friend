import { useTranslation } from 'react-i18next';

import hero from '../../assets/images/hero.svg';
import logo from '../../assets/images/logo.svg';
import { flags } from '../../util';
import { Translation } from '../Translation';
import { Header as Container } from './styles';

export const Header = () => {
  const { t } = useTranslation();

  return (
    <>
      <Translation flags={flags} />
      <Container>
        <div aria-label={t('header:raffleAriaLabel')}>
          <img src={logo} alt={t('header:raffleSecretFriend')} />
        </div>

        <img src={hero} alt={t('header:participant')} />
      </Container>
    </>
  );
};
