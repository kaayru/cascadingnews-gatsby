import { Wordpress__Post } from 'src/generated/graphql';
import Tag from './tag.fixture';
import { Internal } from './utils.fixture';

const fixture: Wordpress__Post = {
  children: [],
  id: '123',
  internal: Internal,
  link:
    'https://www.freecodecamp.org/news/a-beginners-guide-to-git-how-to-write-a-good-commit-message/',
  date: 'March 27, 2020',
  source: 'www.freecodecamp.org',
  tags: [
    { ...Tag, id: '123' },
    { ...Tag, id: '456' },
  ],
  title: 'A Beginner’s Guide to Git — How to Write a Good Commit Message',
  wordpress_id: 1234,
};

export default fixture;
