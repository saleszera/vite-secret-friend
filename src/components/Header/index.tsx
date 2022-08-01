import hero from '../../assets/images/hero.svg';
import { Header as Container } from './styles';

export const Header = () => (
  <Container>
    <div aria-label="raffler logo" />

    <img src={hero} alt="participant with a gift in your hands" />
  </Container>
);
