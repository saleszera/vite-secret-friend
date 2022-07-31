import { useRecoilValue } from 'recoil';

import { secretFriendResult } from '../atom';

export const useResultRaffle = () => useRecoilValue(secretFriendResult);
