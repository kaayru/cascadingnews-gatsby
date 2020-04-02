import React from 'react';
import { render, act, waitFor } from '@testing-library/react';
import { Props, useLoadMore, UseLoadMoreHookData } from '../useLoadMore';
import { pageInfoFixture, postFixture } from '../../../__fixtures__';

interface GlobalWithFetch extends NodeJS.Global {
  fetch: jest.Mock;
}

function setup(args: Props) {
  const returnVal = {};
  function TestComponent() {
    Object.assign(returnVal, useLoadMore(args));
    return null;
  }
  render(<TestComponent />);
  return returnVal;
}

describe('useLoadMore', () => {
  beforeAll(() => {
    (global as GlobalWithFetch).fetch = jest.fn();
  });
  afterAll(() => {
    (global as GlobalWithFetch).fetch.mockClear();
    delete (global as GlobalWithFetch).fetch;
  });
  it('Should load next page content', async () => {
    const allData = Array.from({ length: 22 }, (_, index) => ({
      ...postFixture,
      id: String(index + 1),
    }));

    const fetchPage2Mock = {
      json: () => Promise.resolve({ nodes: allData.slice(5, 10), pageInfo: { hasNextPage: true } }),
    };
    const fetchPage3Mock = {
      json: () =>
        Promise.resolve({ nodes: allData.slice(10, 15), pageInfo: { hasNextPage: true } }),
    };
    const fetchPage4Mock = {
      json: () =>
        Promise.resolve({ nodes: allData.slice(15, 20), pageInfo: { hasNextPage: true } }),
    };
    const fetchPage5Mock = {
      json: () =>
        Promise.resolve({ nodes: allData.slice(20, 22), pageInfo: { hasNextPage: false } }),
    };

    jest.spyOn(global as GlobalWithFetch, 'fetch').mockResolvedValueOnce(fetchPage2Mock);
    jest.spyOn(global as GlobalWithFetch, 'fetch').mockResolvedValueOnce(fetchPage3Mock);
    jest.spyOn(global as GlobalWithFetch, 'fetch').mockResolvedValueOnce(fetchPage4Mock);
    jest.spyOn(global as GlobalWithFetch, 'fetch').mockResolvedValueOnce(fetchPage5Mock);

    const initialPostsData = allData.slice(0, 5);
    const initialPageInfo = { ...pageInfoFixture, hasNextPage: true };

    const nextPageData = setup({
      paths: ['dir1', 'dir2'],
      initialPostsData,
      initialPageInfo,
    }) as UseLoadMoreHookData;

    act(() => {
      nextPageData.loadNextPage();
    });

    await waitFor(() => expect(nextPageData.postsData).toEqual(allData.slice(0, 10)));
    expect(nextPageData.currentPage).toEqual(2);
    expect(nextPageData.pageInfo).toEqual({ hasNextPage: true });

    act(() => {
      nextPageData.loadNextPage();
    });

    await waitFor(() => expect(nextPageData.postsData).toEqual(allData.slice(0, 15)));
    expect(nextPageData.currentPage).toEqual(3);
    expect(nextPageData.pageInfo).toEqual({ hasNextPage: true });

    act(() => {
      nextPageData.loadNextPage();
    });
    await waitFor(() => expect(nextPageData.postsData).toEqual(allData.slice(0, 20)));
    expect(nextPageData.currentPage).toEqual(4);
    expect(nextPageData.pageInfo).toEqual({ hasNextPage: true });

    act(() => {
      nextPageData.loadNextPage();
    });
    await waitFor(() => expect(nextPageData.postsData).toEqual(allData));
    expect(nextPageData.currentPage).toEqual(5);
    expect(nextPageData.pageInfo).toEqual({ hasNextPage: false });
  });
});
