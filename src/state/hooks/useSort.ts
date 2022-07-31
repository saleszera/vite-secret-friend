import { useSetRecoilState } from 'recoil';

import { secretFriendResult } from '../atom';
import { holdLottery } from '../helpers/holdLottery';
import { useParticipantsList } from './useParticipantsList';

export const useSort = () => {
  const participants = useParticipantsList();

  const setResult = useSetRecoilState(secretFriendResult);

  return () => {
    const secretFriends = holdLottery(participants);

    setResult(secretFriends);
  };
};
