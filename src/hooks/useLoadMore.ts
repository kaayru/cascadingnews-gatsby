import path from 'path';
import { useState } from 'react';

import { Wordpress__Post, PageInfo } from 'src/generated/graphql';
import { PAGINATED_DATA_DIR } from 'utils/constants';

export type Props = {
  initialPageInfo: PageInfo;
  initialPostsData: Array<Wordpress__Post>;
  paths: Array<string>;
};
export type UseLoadMoreHookData = {
  currentPage: number;
  loadNextPage: () => void;
  pageInfo: PageInfo;
  postsData: Array<Wordpress__Post>;
};
export const useLoadMore = ({
  initialPageInfo,
  initialPostsData,
  paths,
}: Props): UseLoadMoreHookData => {
  const [currentPage, setCurrentPage] = useState(1);
  const [postsData, setPostsData] = useState(initialPostsData);
  const [pageInfo, setPageInfo] = useState(initialPageInfo);

  const loadNextPage = async () => {
    const nextPage = currentPage + 1;
    setCurrentPage(nextPage);

    const filePath = path.join('/', PAGINATED_DATA_DIR, ...paths, `${nextPage}.json`);
    const res = await fetch(filePath);
    const json = await res.json();

    setPostsData(state => [...state, ...json.nodes]);
    setPageInfo(json.pageInfo);
  };
  return {
    currentPage,
    loadNextPage,
    pageInfo,
    postsData,
  };
};
