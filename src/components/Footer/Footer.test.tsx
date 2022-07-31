import { fireEvent, render, screen } from '@testing-library/react';
import { RecoilRoot } from 'recoil';
import { vi, describe, it, expect, beforeEach } from 'vitest';

import { Footer } from '.';
import { useParticipantsList } from '../../state/hooks/useParticipantsList';

vi.mock('../../state/hooks/useParticipantsList', () => ({
  useParticipantsList: vi.fn(),
}));

const mockNavigation = vi.fn();
const mockSort = vi.fn();

vi.mock('../../state/hooks/useSort', () => ({
  useSort: () => mockSort,
}));

vi.mock('react-router-dom', () => ({
  useNavigate: () => mockNavigation,
}));

describe('There are not enough participants', () => {
  beforeEach(() => {
    (useParticipantsList as jest.Mock).mockReturnValue([]);
  });

  it('should not be able to start the joke', () => {
    render(
      <RecoilRoot>
        <Footer />
      </RecoilRoot>
    );

    const button = screen.getByRole('button');

    expect(button).toBeDisabled();
  });
});

describe('There are enough participants', () => {
  const participants = ['Raniery', 'Michele', 'Leticia', 'Maria'];

  beforeEach(() => {
    (useParticipantsList as jest.Mock).mockReturnValue(participants);
  });

  it('should be able to navigate after click button', () => {
    render(
      <RecoilRoot>
        <Footer />
      </RecoilRoot>
    );

    const button = screen.getByRole('button');

    expect(button).not.toBeDisabled();
  });

  it('Should be able to start the joke', () => {
    render(
      <RecoilRoot>
        <Footer />
      </RecoilRoot>
    );

    const button = screen.getByRole('button');
    fireEvent.click(button);

    expect(mockNavigation).toHaveBeenCalledTimes(1);
    expect(mockNavigation).toHaveBeenCalledWith('/raffle');
    expect(mockSort).toHaveBeenCalledTimes(1);
  });
});
