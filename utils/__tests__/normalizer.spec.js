import { normalizer } from '../normalizer';

describe('Normalizer', () => {
  it('Should add source field to posts', () => {
    const entities = [
      { __type: 'wordpress__POST', link: 'https://www.domain.com/another-article-on-js-fatigue' },
    ];
    const posts = normalizer({
      entities,
    });
    expect(posts[0]).toEqual(expect.objectContaining({ source: 'www.domain.com' }));
  });

  it('Should add empty source field to posts if link is not valid', () => {
    const entities = [
      {
        __type: 'wordpress__POST',
        link: 'www.domain.com/another-article-on-js-fatigue',
      },
    ];
    const posts = normalizer({
      entities,
    });
    expect(posts[0]).toEqual(expect.objectContaining({ source: '' }));
  });

  it('Should not add source field to other post types', () => {
    const entities = [
      { __type: 'wordpress__OTHER', link: 'https://www.domain.com/another-article-on-js-fatigue' },
    ];
    const posts = normalizer({
      entities,
    });
    expect(posts[0]).toEqual(entities[0]);
  });

  it('Should replace http with https in links in posts', () => {
    const entities = [
      { __type: 'wordpress__POST', link: 'http://www.domain.com/another-article-on-js-fatigue' },
    ];
    const posts = normalizer({
      entities,
    });
    expect(posts[0]).toEqual(
      expect.objectContaining({
        link: 'https://www.domain.com/another-article-on-js-fatigue',
      }),
    );
  });

  it('Should not modify links in other post types', () => {
    const entities = [
      { __type: 'wordpress__OTHER', link: 'http://www.domain.com/another-article-on-js-fatigue' },
    ];
    const posts = normalizer({
      entities,
    });
    expect(posts[0]).toEqual(entities[0]);
  });
});