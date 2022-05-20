import PropTypes from 'prop-types';
import React, { useState } from 'react';
import _noop from 'lodash/noop';

import Button from '../../atoms/Button';
import Label from '../../atoms/Label';
import Textarea from '../../atoms/Textarea';
import Textbox from '../../atoms/Textbox';

function ReviewForm({ onSave }) {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  return (
    <div>
      <div>
        <Label id="review-title">
          <span className="ml-1 uppercase text-gray-400 text-xs font-bold">Title</span>
          <Textbox id="review-title" value={title} onInput={setTitle} />
        </Label>
      </div>
      <div className="mt-8">
        <Label id="review-comment">
          <span className="ml-1 uppercase text-gray-400 text-xs font-bold">Comment</span>
          <Textarea id="review-comment" value={body} placeholder="Enter Text" onInput={setBody} />
        </Label>
      </div>
      <div>
        <Button onClick={() => onSave({ title, body })}>Update</Button>
      </div>
    </div>
  );
}

ReviewForm.propTypes = {
  onSave: PropTypes.func,
};

ReviewForm.defaultProps = {
  onSave: _noop,
};

export default ReviewForm;
