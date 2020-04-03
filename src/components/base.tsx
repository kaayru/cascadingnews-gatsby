import styled from 'styled-components';

import { rhythm, LINK_COLOR, LINK_COLOR_ACTIVE } from 'src/utils/typography';

export const FlatList = styled.ul`
  display: flex;
  list-style: none;
  margin-left: 0;
  margin-bottom: 0;

  & > li {
    padding-right: ${rhythm(4 / 16)};
    margin-bottom: 0;
  }
`;

export const PostList = styled.ul`
  list-style: none;
  margin-left: 0;
`;

export const LoadMoreButton = styled.button`
  background: ${LINK_COLOR};
  color: #ffffff;
  border: 2px solid ${LINK_COLOR};
  cursor: pointer;

  &:hover {
    background: ${LINK_COLOR_ACTIVE};
    border-color: ${LINK_COLOR_ACTIVE};
  }
`;
