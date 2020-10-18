import React from 'react';

import ErrorBoundary from './error_boundary.component';
import { render, screen } from '@testing-library/react';

// test('should return error', () => {
//     const testError = new Error('1');

//     expect(ErrorBoundary.getDerivedStateFromError(testError)).toEqual({
//         hasError: true,
//     });
// });

test('should return placeholder in case of error inside - key is not provided', () => {
    const ErrorComponent = () => {
        throw new Error()
      }

    const { getByText } = render(
        <ErrorBoundary>
            <ErrorComponent />
        </ErrorBoundary>
    );

    expect(getByText('Something went wrong...'));
});
