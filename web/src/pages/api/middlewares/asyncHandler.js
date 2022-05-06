import _get from 'lodash/get';

const { error } = console;

export default function asyncHandler(callback) {
  return async (req, res, next) => {
    try {
      await callback(req, res, next);
    } catch (err) {
      const status = _get(err, 'statusCode', 500);
      const message = _get(err, 'details.description', 'internal server error');

      error(`error in asynHanlder, reason: ${err.message}`);

      next({ status, message });
    }
  };
}
