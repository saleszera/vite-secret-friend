import { render } from '@testing-library/react';
import { RecoilRoot } from 'recoil';
import { vi, describe, it, expect } from 'vitest';

import { Configuration } from '.';

const mockNavigation = vi.fn();

vi.mock('react-router-dom', () => ({
  useNavigate: () => mockNavigation,
}));

describe('Configuration page', () => {
  it('should be able correctly render', () => {
    const { container } = render(
      <RecoilRoot>
        <Configuration />
      </RecoilRoot>
    );

    expect(container).toMatchSnapshot();
  });
});
