export const buildPostsParams = (filter) => {
  const params = {};

  if (filter.sort === 'hot') {
    params.likeCount_gte = 100;
  }

  if (filter.sort === 'latest') {
    params._sort = 'createdPostDate';
    params._order = 'desc';
  }

  if (filter.location) {
    params['pickup.city'] = filter.location;
  }

  if (filter.category) {
    params['food.type'] = filter.category;
  }

  return params;
}

