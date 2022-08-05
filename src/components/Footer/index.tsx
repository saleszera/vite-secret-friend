import { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

import bags from '../../assets/images/bags.svg';
import { useParticipantsList } from '../../state/hooks/useParticipantsList';
import { useSort } from '../../state/hooks/useSort';
import { Footer as StyledFooter } from './styles';

export const Footer = () => {
  const participants = useParticipantsList();

  const { t } = useTranslation();

  const navigate = useNavigate();

  const sort = useSort();

  const handleStart = useCallback(() => {
    sort();
    navigate('/raffle');
  }, [navigate, sort]);

  return (
    <StyledFooter>
      <button
        type="button"
        disabled={participants.length < 3}
        onClick={handleStart}
      >
        {t('configuration:startGame')}
      </button>
      <img src={bags} alt="shopping bags" />
    </StyledFooter>
  );
};
