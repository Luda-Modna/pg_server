module.exports.paginationUsers = (req, res, next) => {
  const { page = 1, results = 10 } = req.query;
  const pagination = { limit: Number(results), offset: (page - 1) * results };

  req.pagination = pagination;
  next();
};
