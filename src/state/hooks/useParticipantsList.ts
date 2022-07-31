import { useRecoilValue } from 'recoil';

import { participantsList } from '../atom';

export const useParticipantsList = () => useRecoilValue(participantsList);
