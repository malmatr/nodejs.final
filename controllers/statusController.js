const getStatus = (req, res) => {
  res.json({
    status: "OK",
    server: "Running",
    timestamp: new Date(),
  });
};

module.exports = { getStatus };
