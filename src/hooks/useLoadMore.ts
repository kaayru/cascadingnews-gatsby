import path from 'path';
import React, { useState } from 'react';
import { Wordpress__Post, PageInfo } from '../generated/graphql';

export type Props = {
  paths: Array<string>;
  initialPostsData: Array<Wordpress__Post>;
  initialPageInfo: PageInfo;
};
export type UseLoadMoreHookData = {
  currentPage: number;
  loadNextPage: () => void;
  postsData: Array<Wordpress__Post>;
  pageInfo: PageInfo;
};
export const useLoadMore = ({
  paths,
  initialPostsData,
  initialPageInfo,
}: Props): UseLoadMoreHookData => {
  const [currentPage, setCurrentPage] = useState(1);
  const [postsData, setPostsData] = useState(initialPostsData);
  const [pageInfo, setPageInfo] = useState(initialPageInfo);

  const loadNextPage = async () => {
    const nextPage = currentPage + 1;
    setCurrentPage(nextPage);

    const filePath = path.join('/paginated-data', ...paths, `${nextPage}.json`);
    const res = await fetch(filePath);
    const json = await res.json();

    setPostsData(state => [...state, ...json.nodes]);
    setPageInfo(json.pageInfo);
  };
  return {
    currentPage,
    loadNextPage,
    postsData,
    pageInfo,
  };
};
