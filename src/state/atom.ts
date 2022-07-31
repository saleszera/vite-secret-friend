import { atom } from 'recoil';

export const participantsList = atom<string[]>({
  key: 'participantsList',
  default: [],
});

export const errorState = atom<string>({
  key: 'errorState',
  default: '',
});

export const secretFriendResult = atom<Map<string, string>>({
  key: 'secretFriendResult',
  default: new Map(),
});
