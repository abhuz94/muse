/* eslint-disable react/no-danger */
/* eslint-disable react/jsx-props-no-spreading */

import React, { useState } from 'react';

import PropertyControlledComponent from '../PropertyControlledComponent';
import Textarea from './Textarea';

function Template(args) {
  const [value, setValue] = useState('');

  return (
    <div>
      <Textarea {...args} value={value} onInput={setValue} />
      <PropertyControlledComponent shouldRender={value}>
        <pre className="mt-4 italic text-sm text-gray-400" dangerouslySetInnerHTML={{ __html: value }} />
      </PropertyControlledComponent>
    </div>
  );
}

export default {
  title: 'Design System/Atoms/Textarea',
  component: Textarea,
};

export const Default = Template.bind({});
Default.args = { id: 'textarea' };
