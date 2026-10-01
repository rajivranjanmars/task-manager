import React from 'react';
import { render, screen } from '@testing-library/react';
import { expect, test } from 'vitest';
import App from './App';

test('renders the task creation controls', () => {
  render(React.createElement(App));
  expect(screen.getByPlaceholderText('Task Title')).toBeInTheDocument();
  expect(screen.getByPlaceholderText('Task Description')).toBeInTheDocument();
});
