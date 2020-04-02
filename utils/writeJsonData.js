const path = require('path');
const fs = require('fs');

const writeJsonData = ({ data, paths, perPage = 20, rootDir }) => {
  const { nodes: posts, totalCount } = data;
  const dir = path.join(rootDir, 'public', 'paginated-data', ...paths);
  fs.mkdirSync(dir, { recursive: true });

  const pagesCount = Math.ceil(totalCount / perPage);

  Array.from({ length: pagesCount }).forEach((_, index) => {
    const page = index + 1;
    const begin = (page - 1) * perPage;
    const end = begin + perPage;
    fs.writeFileSync(
      path.resolve(dir, `${page}.json`),
      JSON.stringify({
        nodes: posts.slice(begin, end),
        pageInfo: { hasNextPage: page < pagesCount },
      }),
    );
  });
};

module.exports = { writeJsonData };
