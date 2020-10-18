import React from 'react';

import { render, screen } from '@testing-library/react';

// import '@babel/polyfill';

import Button from './button.component';

it('should render a button with right text', () => {
    render(<Button classname="testclass" text="TEST" />);

    expect(screen.getByText('TEST'));
});

it('rendered button snapshot', () => {
    const { container } = render(
        <Button classname="testclass" text="TEST" />
    );
    expect(container.firstChild).toMatchSnapshot()
});
