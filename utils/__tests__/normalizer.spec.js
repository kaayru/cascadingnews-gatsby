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

  it('Should set yoast_title and yoast_meta on tag pages', () => {
    const entities = [
      {
        __type: 'wordpress__PAGE',
        slug: 'tag-page',
        yoast_meta: [
          { name: 'description', content: 'some content for description for {tagName}' },
        ],
        yoast_title: 'some title for {tagName}',
      },
      { __type: 'wordpress__TAG', name: 'React Native' },
    ];
    const posts = normalizer({
      entities,
    });
    expect(posts[1]).toEqual(
      expect.objectContaining({
        yoast_title: 'some title for React Native',
        yoast_meta: [
          { name: 'description', content: 'some content for description for React Native' },
        ],
      }),
    );
  });

  it('Should not set yoast attributes if master tag page is not found', () => {
    const entities = [{ __type: 'wordpress__TAG', name: 'React Native' }];
    const posts = normalizer({
      entities,
    });
    expect(posts[0]).toEqual(entities[0]);
  });
});
