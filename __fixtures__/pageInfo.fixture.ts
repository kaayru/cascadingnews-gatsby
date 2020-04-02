import { PageInfo } from '../src/generated/graphql';

const fixture: PageInfo = {
  currentPage: 1,
  hasPreviousPage: false,
  hasNextPage: true,
  itemCount: 10,
  pageCount: 2,
  perPage: 5,
};

export default fixture;
