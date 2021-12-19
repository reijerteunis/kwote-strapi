module.exports = {
    routes: [
      {
        method: 'GET',
        path: '/kwotes/like/:id',
        handler: 'like.like',
      },
      {
        method: 'GET',
        path: '/kwotes/dislike/:id',
        handler: 'like.dislike',
      },
      {
        method: 'GET',
        path: '/randomkwotes/',
        handler: 'like.random',
      },
    ],
  };