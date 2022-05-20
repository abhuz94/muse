/* eslint-disable react/jsx-props-no-spreading */

import { Range, getTrackBackground, useThumbOverlap } from 'react-range';
import PropTypes from 'prop-types';
import React, { useEffect, useRef, useReducer } from 'react';
import _noop from 'lodash/noop';

const COLORS = ['rgba(229, 231, 235, 1)', 'rgba(31, 41, 55, 1)', 'rgba(229, 231, 235, 1)'];

function RenderTrack({
  children, max, min, props, values,
}) {
  const background = getTrackBackground({
    colors: COLORS,
    min,
    max,
    values,
  });

  return (
    <div
      {...props}
      className="h-1 bg-gray-200"
      style={{ ...props.style, background }}
    >
      {children}
    </div>
  );
}

function RenderThumb({
  props, index, values, rangeRef,
}) {
  const [labelValue, style] = useThumbOverlap(rangeRef, values, index);

  return (
    <div
      {...props}
      className="relative flex items-center justify-center h-7 w-7 text-stone-50 bg-gray-800"
      style={props.style}
    >
      <div
        className="absolute -top-9 px-2 py-1 text-sm bg-gray-800 whitespace-nowrap after:tooltip-arrow"
        style={style}
      >
        {labelValue}
      </div>
      <div className="w-2 h-2 bg-stone-50" />
    </div>
  );
}

function InputRange({
  min, max, values, onChange,
}) {
  const [, forceUpdate] = useReducer((x) => x + 1, 0);
  const rangeRef = useRef();

  // workaround for merge label initial render issue
  useEffect(() => forceUpdate(), []);

  return (
    <Range
      allowOverlap
      min={min}
      max={max}
      values={values}
      ref={rangeRef}
      renderTrack={(props) => <RenderTrack {...props} max={max} min={min} values={values} />}
      renderThumb={({ props, index }) => (
        <RenderThumb
          key={index}
          index={index}
          props={props}
          rangeRef={rangeRef.current}
          values={values}
        />
      )}
      onChange={onChange}
    />
  );
}

InputRange.propTypes = {
  min: PropTypes.number,
  max: PropTypes.number,
  values: PropTypes.arrayOf(PropTypes.number),
  onChange: PropTypes.func,
};

InputRange.defaultProps = {
  min: 0,
  max: 10,
  values: [0, 10],
  onChange: _noop,
};

RenderTrack.propTypes = {
  children: PropTypes.node.isRequired,
  max: PropTypes.number.isRequired,
  min: PropTypes.number.isRequired,
  props: PropTypes.shape({}).isRequired,
  style: PropTypes.shape({}),
  values: PropTypes.arrayOf(PropTypes.number).isRequired,
};

RenderThumb.propTypes = {
  index: PropTypes.number.isRequired,
  props: PropTypes.shape({}).isRequired,
  rangeRef: PropTypes.shape({}),
  style: PropTypes.shape({}),
  values: PropTypes.arrayOf(PropTypes.number).isRequired,
};

RenderTrack.defaultProps = {
  style: null,
};

RenderThumb.defaultProps = {
  rangeRef: null,
  style: null,
};

export default InputRange;
