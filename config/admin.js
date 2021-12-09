module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '333b97e1bb0ee7c6bc18c572f0940fd6'),
  },
});
