export function successResponse(res, data) {
  res.setHeader('content-type', 'application/json');
  res.end(JSON.stringify({ status: 'Operation successful!', data }));
}

export function errorResponse(res, errorMessage) {
  res.setHeader('content-type', 'application/json');
  res.end(JSON.stringify({ status: 'Error occured:', message: errorMessage }));
}
