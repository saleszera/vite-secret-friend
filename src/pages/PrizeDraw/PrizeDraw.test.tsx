import { act } from 'react-dom/test-utils';

import { fireEvent, render, screen } from '@testing-library/react';
import { RecoilRoot } from 'recoil';
import { vi, describe, expect, it, beforeEach } from 'vitest';

import { PrizeDraw } from '.';
import { useParticipantsList } from '../../state/hooks/useParticipantsList';
import { useResultRaffle } from '../../state/hooks/useResultRaffle';

vi.mock('../../state/hooks/useParticipantsList', () => ({
  useParticipantsList: vi.fn(),
}));

vi.mock('../../state/hooks/useResultRaffle', () => ({
  useResultRaffle: vi.fn(),
}));

describe('Raffle page', () => {
  const participants = ['Raniery', 'Michele', 'Leticia'];

  const result = new Map([
    ['Raniery', 'Michele'],
    ['Michele', 'Leticia'],
    ['Leticia', 'Raniery'],
  ]);

  beforeEach(() => {
    (useParticipantsList as jest.Mock).mockReturnValue(participants);
    (useResultRaffle as jest.Mock).mockReturnValue(result);
  });

  it('Should be able to show a your secret friend', () => {
    render(
      <RecoilRoot>
        <PrizeDraw />
      </RecoilRoot>
    );

    const options = screen.queryAllByRole('option');

    expect(options).toHaveLength(participants.length + 1); // because there is a default option
  });

  it('should be able to show a secret friend when required', () => {
    render(
      <RecoilRoot>
        <PrizeDraw />
      </RecoilRoot>
    );

    const select = screen.getByPlaceholderText('Selecione o seu nome');
    fireEvent.change(select, { target: { value: participants[0] } });

    const button = screen.getByRole('button');
    fireEvent.click(button);

    const secretFriend = screen.getByRole('alert');
    expect(secretFriend).toBeInTheDocument();
  });

  it('Should be lost name of secret friend after 5 seconds', () => {
    vi.useFakeTimers();

    render(
      <RecoilRoot>
        <PrizeDraw />
      </RecoilRoot>
    );

    const select = screen.getByPlaceholderText('Selecione o seu nome');
    fireEvent.change(select, { target: { value: participants[0] } });

    const button = screen.getByRole('button');
    fireEvent.click(button);

    const secretFriend = screen.getByRole('alert');
    expect(secretFriend).toBeInTheDocument();

    act(() => {
      vi.runAllTimers();
    });

    expect(secretFriend).not.toBeInTheDocument();
  });
});
