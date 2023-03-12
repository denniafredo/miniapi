const response = {};

response.ok = function (value) {
  return {
    length: value?.length,
    status: 200,
    data: value,
  };
};
response.nodata = function () {
  return {
    message: "No data found",
    status: 200,
    data: [],
  };
};
response.created = function (value) {
  return {
    length: value?.length,
    status: 201,
    data: value,
  };
};
response.error = function (value) {
  return {
    message: value,
    status: 500,
  };
};
response.deleted = function (value) {
  return {
    message: value + " data deleted",
    status: 200,
  };
};
response.updated = function (value) {
  return {
    message: value + " data updated",
    status: 200,
  };
};
module.exports = response;
