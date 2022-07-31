import { render, screen } from '@testing-library/react';
import { RecoilRoot } from 'recoil';
import { vi, describe, beforeEach, it } from 'vitest';

import { ParticipantsList } from '.';
import { useParticipantsList } from '../../state/hooks/useParticipantsList';

vi.mock('../../state/hooks/useParticipantsList', () => ({
  useParticipantsList: vi.fn(),
}));

describe('A empty participants list', () => {
  beforeEach(() => {
    (useParticipantsList as jest.Mock).mockReturnValue([]);
  });

  it('should be render with an empty array', () => {
    render(
      <RecoilRoot>
        <ParticipantsList />
      </RecoilRoot>
    );

    const itens = screen.queryAllByRole('listitem');
    expect(itens).toHaveLength(0);
  });
});

describe('A participants list filled in', () => {
  const participants = ['Raniery', 'Michele', 'Leticia'];

  beforeEach(() => {
    (useParticipantsList as jest.Mock).mockReturnValue(participants);
  });

  it('should be render participants list', () => {
    render(
      <RecoilRoot>
        <ParticipantsList />
      </RecoilRoot>
    );

    const itens = screen.queryAllByRole('listitem');
    expect(itens).toHaveLength(participants.length);
  });
});
