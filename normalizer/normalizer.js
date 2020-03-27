const getDomainFromLink = link => {
  try {
    const { hostname } = new URL(link);
    return hostname;
  } catch (e) {
    return '';
  }
};

const normalizer = ({ entities }) =>
  entities.map(entity => {
    if (entity && entity.__type === 'wordpress__POST') {
      return {
        ...entity,
        source: getDomainFromLink(entity.link),
      };
    }
    return entity;
  });

module.exports = {
  normalizer,
};
