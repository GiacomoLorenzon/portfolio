import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the academic research profile', () => {
  render(<App />);
  expect(screen.getByRole('heading', { name: /Giacomo Lorenzon/i })).toBeInTheDocument();
  expect(screen.getAllByText(/PhD researcher in applied mathematics and probabilistic machine learning/i).length).toBeGreaterThan(0);
  expect(screen.getByRole('heading', { name: /Publications and Preprints/i })).toBeInTheDocument();
  expect(screen.getAllByRole('link', { name: /arXiv/i })[0]).toHaveAttribute('href', 'https://arxiv.org/abs/2609.33377');
});
