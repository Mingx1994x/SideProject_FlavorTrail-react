export const buildPostsParams = (filter) => {
  const params = {};

  if (filter.sort === 'hot') {
    params.likeCount_gte = 100;
  }

  if (filter.sort === 'latest') {
    params._sort = 'createdPostDate';
    params._order = 'desc';
  }

  if (filter.city) {
    params.city = filter.city;
  }

  if (filter.foodType) {
    params.category = filter.foodType;
  }

  return params;
}

