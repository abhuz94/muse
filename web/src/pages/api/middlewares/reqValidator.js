import { validationResult } from 'express-validator';

export default function reqValidator(req, _, next) {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    next({ status: 400, message: errors.array() });
  } else {
    next();
  }
}
