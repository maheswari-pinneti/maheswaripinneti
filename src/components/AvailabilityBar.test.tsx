import { render, screen } from '@testing-library/react';
import { AvailabilityBar } from './AvailabilityBar';
import { profile } from '../content/profile';

describe('AvailabilityBar', () => {
  it('renders the availability status from the profile', () => {
    render(<AvailabilityBar />);
    expect(screen.getByText(profile.availability)).toBeTruthy();
  });
});
