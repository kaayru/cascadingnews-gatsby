import fs from 'fs';

import { writeJsonData } from '../writeJsonData';

jest.mock('fs');
describe('WriteJsonData', () => {
  it('Should write one file per chunk of data', () => {
    const data = {
      nodes: Array.from({ length: 42 }, (_, index) => ({ id: index + 1 })),
      totalCount: 42,
    };
    writeJsonData({ data, paths: ['dir1', 'dir2'], perPage: 5, rootDir: '/' });

    expect(fs.writeFileSync).toHaveBeenCalledTimes(9);
    expect(fs.writeFileSync).toHaveBeenNthCalledWith(
      1,
      '/public/paginated-data/dir1/dir2/1.json',
      JSON.stringify({
        nodes: data.nodes.slice(0, 5),
        pageInfo: { hasNextPage: true },
      }),
    );
    expect(fs.writeFileSync).toHaveBeenNthCalledWith(
      9,
      '/public/paginated-data/dir1/dir2/9.json',
      JSON.stringify({
        nodes: data.nodes.slice(40, 42),
        pageInfo: { hasNextPage: false },
      }),
    );
  });
});
