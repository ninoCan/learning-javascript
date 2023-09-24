// AnimalStrip.test.js

import React from 'react';
import { render } from '@testing-library/react';
import AnimalStrip from './AnimalStrip';

test('renders three animal images', () => {
  const { container } = render(<AnimalStrip />);
  const animalImages = container.querySelectorAll('.animal img');
  expect(animalImages).toHaveLength(3);
});

test('renders the correct animal images', () => {
  const { container } = render(<AnimalStrip />);
  const animalImages = container.querySelectorAll('.animal img');
  const expectedAnimalImages = [
    'assets/dolphin.jpg',
    'assets/lobster.jpg',
    'assets/starfish.jpg',
  ];

  animalImages.forEach((image, index) => {
    expect(image).toHaveAttribute('src', expectedAnimalImages[index]);
    expect(image).toHaveAttribute('alt', expect.any(String));
  });
});
