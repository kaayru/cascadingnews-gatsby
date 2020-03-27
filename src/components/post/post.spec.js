/**
 * @jest-environment jsdom
 */

import React from 'react';
import { render } from '@testing-library/react';

import Post from './post';
import postFixture from './post.fixture';

describe('Post', () => {
  it('Should contain source and date', () => {
    const post = { ...postFixture, date: '30 March, 2020', source: 'www.source.com' };
    const { getByTestId } = render(<Post node={post} />);
    expect(getByTestId('post__byon').textContent).toEqual('By www.source.com on 30 March, 2020');
  });
  it('Should only contain date if source is not set', () => {
    const post = { ...postFixture, date: '30 March, 2020', source: null };
    const { getByTestId } = render(<Post node={post} />);
    expect(getByTestId('post__byon').textContent).toEqual('on 30 March, 2020');
  });
  it('Should only contain source if date is not set', () => {
    const post = { ...postFixture, source: 'www.source.com', date: null };
    const { getByTestId } = render(<Post node={post} />);
    expect(getByTestId('post__byon').textContent).toEqual('By www.source.com ');
  });
});
