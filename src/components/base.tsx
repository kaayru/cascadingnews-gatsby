import styled from 'styled-components';

import { rhythm } from '../utils/typography';

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
