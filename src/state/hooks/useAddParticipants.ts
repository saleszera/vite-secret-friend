import { useTranslation } from 'react-i18next';

import { useRecoilValue, useSetRecoilState } from 'recoil';

import { errorState, participantsList } from '../atom';

export const useAddParticipants = () => {
  const { t } = useTranslation();

  const setList = useSetRecoilState(participantsList);
  const list = useRecoilValue(participantsList);
  const setError = useSetRecoilState(errorState);

  return (participantName: string) => {
    if (list.includes(participantName)) {
      setError(t('configuration:errorMessage'));

      setTimeout(() => {
        setError('');
      }, 3000);

      return;
    }

    setList((currentList) => [...currentList, participantName]);
  };
};
