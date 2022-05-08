import _get from 'lodash/get';
import _isFunction from 'lodash/isFunction';

const { error } = console;

export default function asyncHandler(callback, errorCallback) {
  return async (req, res, next) => {
    try {
      await callback(req, res, next);
    } catch (err) {
      error(`error in asynHanlder, reason: ${err.message}`);

      if (_isFunction(errorCallback)) {
        errorCallback(err);
      } else {
        const status = _get(err, 'statusCode', 500);
        const message = _get(err, 'details.description', 'internal server error');

        next({ status, message });
      }
    }
  };
}
