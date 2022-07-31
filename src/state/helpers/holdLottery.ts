import shuffle from 'just-shuffle';

export function holdLottery(participants: string[]) {
  const total = participants.length;

  const shuffleParticipants = shuffle(participants);

  const result = new Map<string, string>();

  for (let index = 0; index < total; index += 1) {
    const friendIndex = index === total - 1 ? 0 : index + 1;
    result.set(shuffleParticipants[index], shuffleParticipants[friendIndex]);
  }

  return result;
}
