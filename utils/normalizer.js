const getDomainFromLink = link => {
  try {
    const { hostname } = new URL(link);
    return hostname;
  } catch (e) {
    return '';
  }
};

const forceSecureLink = link => link.replace('http://', 'https://');

export const normalizer = ({ entities }) =>
  entities.map(entity => {
    if (entity && entity.__type === 'wordpress__POST') {
      return {
        ...entity,
        source: getDomainFromLink(entity.link),
        link: forceSecureLink(entity.link),
      };
    }
    return entity;
  });
