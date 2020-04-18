const getDomainFromLink = link => {
  try {
    const { hostname } = new URL(link);
    return hostname;
  } catch (e) {
    return '';
  }
};

const forceSecureLink = link => link.replace('http://', 'https://');

const isVideoLink = link => {
  try {
    const videoProviders = ['www.youtube.com'];
    const { hostname } = new URL(link);
    return videoProviders.some(provider => hostname === provider);
  } catch (e) {
    return false;
  }
};

export const normalizer = ({ entities }) => {
  const masterTagPage = entities.find(
    entity => entity.__type === 'wordpress__PAGE' && entity.slug === 'tag-page',
  );

  const replaceTagName = (str, tagName) => str.replace('{tagName}', tagName);

  return entities.map(entity => {
    if (entity && entity.__type === 'wordpress__POST') {
      return {
        ...entity,
        source: getDomainFromLink(entity.link),
        link: forceSecureLink(entity.link),
        isVideo: isVideoLink(entity.link),
      };
    }

    if (masterTagPage && entity && entity.__type === 'wordpress__TAG') {
      return {
        ...entity,
        yoast_title: replaceTagName(masterTagPage.yoast_title, entity.name),
        yoast_meta: masterTagPage.yoast_meta.map(meta => ({
          ...meta,
          content: replaceTagName(meta.content, entity.name),
        })),
      };
    }
    return entity;
  });
};
