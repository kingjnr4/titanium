export const config = () => ({
  jwt: {
    access: {
      secret: process.env.JWT_ACCESS_SECRET,
      expiresIn: process.env.JWT_ACCESS_EXPIRY,
    },
  },
});