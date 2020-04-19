import styled from 'styled-components';

import { rhythm, scale } from 'src/utils/typography';

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

export const TextInput = styled.input`
  background: #ffffff;
  border: 1px solid var(--secondaryTextColor);
  margin-right: ${rhythm(0.5)};
  font-size: ${scale(2 / 16).fontSize};
  line-height: ${scale(2 / 16).lineHeight};
  padding: ${rhythm(0.2)} ${rhythm(0.4)};
`;

export const Button = styled.button`
  background: var(--linkColor);
  color: #ffffff;
  border: 2px solid var(--linkColor);
  cursor: pointer;
  font-size: ${scale(2 / 16).fontSize};
  line-height: ${scale(2 / 16).lineHeight};
  padding: ${rhythm(0.2)} ${rhythm(0.4)};

  &:hover {
    background: var(--linkColorActive);
    border-color: var(--linkColorActive);
  }
`;

export const PageTitle = styled.h1`
  margin-top: ${rhythm(0.5)};
  font-size: ${scale(8 / 16).fontSize};
  line-height: ${scale(8 / 16).lineHeight};
`;

export const Count = styled.span`
  color: var(--secondaryTextColor);
  font-size: ${scale(4 / 16).fontSize};
`;

export const PageContent = styled.div`
  background: var(--blockBackgroundColor);
  padding: ${rhythm(1)};
`;
