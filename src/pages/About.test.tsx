import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { About } from './About';
import { experience } from '../content/experience';

describe('About Page', () => {
  it('renders the experience timeline correctly', () => {
    render(
      <MemoryRouter>
        <About />
      </MemoryRouter>
    );
    
    // Check main heading
    expect(screen.getByText('ENGINEER BEHIND THE INTERFACE')).toBeTruthy();

    // Check if the first job is rendered
    expect(screen.getByText(experience[0].role)).toBeTruthy();
    expect(screen.getByText(experience[0].company)).toBeTruthy();
    
    // Check if technologies are mapped
    experience[0].technologies.forEach(tech => {
      expect(screen.getAllByText(tech).length).toBeGreaterThan(0);
    });
  });
});
