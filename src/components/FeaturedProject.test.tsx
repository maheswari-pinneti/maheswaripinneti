import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { FeaturedProject } from './FeaturedProject';
import { projects } from '../content/projects';

describe('FeaturedProject', () => {
  it('renders the featured project title', () => {
    render(
      <MemoryRouter>
        <FeaturedProject />
      </MemoryRouter>
    );
    expect(screen.getByText(projects[0].title)).toBeTruthy();
    expect(screen.getByText('View Case Study')).toBeTruthy();
  });
});
