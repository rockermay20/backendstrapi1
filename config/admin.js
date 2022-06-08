module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '4ae9e1ba149a7f2272f88f6f58863ff8'),
  },
});
