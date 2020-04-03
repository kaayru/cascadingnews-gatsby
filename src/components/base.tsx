import styled from 'styled-components';

import {
  rhythm,
  scale,
  LINK_COLOR,
  LINK_COLOR_ACTIVE,
  SECONDARY_TEXT_COLOR,
} from 'src/utils/typography';

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

export const PageTitle = styled.h1`
  margin-top: ${rhythm(0.5)};
  font-size: ${scale(8 / 16).fontSize};
  line-height: ${scale(8 / 16).lineHeight};
`;

export const Count = styled.span`
  color: ${SECONDARY_TEXT_COLOR};
  font-size: ${scale(4 / 16).fontSize};
`;
