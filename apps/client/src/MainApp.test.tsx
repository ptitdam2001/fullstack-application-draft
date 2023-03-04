/**
 * @vitest-environment jsdom
 */

import { expect, describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';

import { MainApp } from './MainApp';

describe('Main Application', () => {
  it('configures a router and displays Login page', async () => {
    render(<MainApp />);
    // by default we have /no-permission
    expect(await screen.findByText(/Signin/)).toBeDefined();
  })
})
