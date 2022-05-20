/* eslint-disable react/jsx-props-no-spreading */

import React from 'react';

import { QUICK_INFO_BADGE_TYPES } from './QuickInfoBadge.constants';
import QuickInfoBadge from './QuickInfoBadge';

function Template(args) {
  return (
    <div className="inline-block">
      <QuickInfoBadge {...args}>70% off</QuickInfoBadge>
    </div>
  );
}

export default {
  title: 'Design System/Atoms/Quick Info Badge',
  component: QuickInfoBadge,
};

export const Success = Template.bind({});
Success.args = { type: QUICK_INFO_BADGE_TYPES.SUCCESS };

export const Warn = Template.bind({});
Warn.args = { type: QUICK_INFO_BADGE_TYPES.WARN };

export const Danger = Template.bind({});
Danger.args = { type: QUICK_INFO_BADGE_TYPES.DANGER };

export const Neutral = Template.bind({});
Neutral.args = { type: QUICK_INFO_BADGE_TYPES.NEUTRAL };
