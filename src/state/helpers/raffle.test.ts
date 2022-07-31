import { it, describe, expect } from 'vitest';

import { holdLottery } from './holdLottery';

describe('When a secret friend raffle happend', () => {
  it("shouldn't be able sort a own name", () => {
    const participants = ['Michele', 'Raniery', 'Leticia', 'Maria', 'José'];

    const sort = holdLottery(participants);

    participants.forEach((participant) => {
      const secretFriend = sort.get(participant);
      expect(secretFriend).not.toEqual(participant);
    });
  });
});
