const { StatusCodes } = require("http-status-codes");
const { ErrorResponse } = require('../utils/common');
function validateCreateRequest(req, res, next) {
  if (!req.body.modelNumber) {
    ErrorResponse.message = 'Something went wrong while creating airplane';
    ErrorResponse.error = {explanation:
          "Model number not found in the incoming request in the correct form"}
    // return res.status(StatusCodes.BAD_REQUEST)
    // .json({
    //   success: false,
    //   message: "Something went wrong while creating airplane",
    //   data: {},
    //   error: {
    //     explanation:
    //       "Model number not found in the incoming request in the correct form",
    //   },
    // });
        return res
                .status(StatusCodes.BAD_REQUEST)
                .json(ErrorResponse);
  }
  next();//else call the next middleware (the controller will be the next middleware)
}

module.exports = {
  validateCreateRequest
}