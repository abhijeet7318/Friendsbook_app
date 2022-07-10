const baseUrl =
  process.env.NODE_ENV !== "production"
    ? "http://localhost:3000"
    : "";        //base url for production version

module.exports = baseUrl;
