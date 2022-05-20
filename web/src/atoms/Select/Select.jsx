/* eslint-disable react/jsx-props-no-spreading */

import { RiCheckboxCircleFill, RiCloseFill, RiArrowDownSLine } from 'react-icons/ri';
import PropTypes from 'prop-types';
import React from 'react';
import ReactSelect, { components } from 'react-select';
import cs from 'classnames';
import _noop from 'lodash/noop';

import { customTheme, customStyles } from './Select.constants';
import PropertyControlledComponent from '../PropertyControlledComponent';
import LoadingIndicator from '../Loader';

function ClearIndicator({ innerProps: { ref, ...restInnerProps } }) {
  return (
    <div {...restInnerProps} ref={ref}>
      <RiCloseFill
        size={16}
        className={`
          bg-red-200 text-red-800 opacity-75 w-5 h-5 text-bold rounded-2xl cursor-pointer transition-all duration-250
          hover:opacity-100 hover:scale-110
        `}
      />
    </div>
  );
}

function DropdownIndicator({ isFocused }) {
  return (
    <div className={cs(
      'mr-2 flex items-center justify-center text-gray-200 bg-gray-800 w-5 h-5 rounded-2xl transition-rotate duration-200',
      'dropdown-indicator',
      { 'rotate-180': isFocused },
    )}
    >
      <RiArrowDownSLine size={18} />
    </div>
  );
}

function IndicatorsContainer({ children }) {
  return <div className="flex items-center gap-1">{children}</div>;
}

function IndicatorSeparator() { return null; }

function MenuList({ children, ...restProps }) {
  return (
    <components.MenuList {...restProps} className="border-gray-800 border-2 shadow-2xl">
      {children}
    </components.MenuList>
  );
}

function MultiValueRemove(props) {
  return (
    <components.MultiValueRemove {...props}>
      <RiCloseFill className="px-1 flex items-center" size={24} />
    </components.MultiValueRemove>
  );
}

function Option({
  label, innerProps, isDisabled, isSelected,
}) {
  return (
    <div
      {...innerProps}
      className={cs(
        'p-4 flex items-center justify-between text-gray-800 select-none transition-300',
        {
          'bg-green-300 text-green-800': isSelected,
          'hover:bg-gray-100 cursor-pointer': !isSelected && !isDisabled,
        },
        { 'opacity-40 cursor-not-allowed': isDisabled },
      )}
    >
      <span>{label}</span>
      <PropertyControlledComponent shouldRender={isSelected}>
        <span className="text-green-800"><RiCheckboxCircleFill /></span>
      </PropertyControlledComponent>
    </div>
  );
}

const customComponents = {
  DropdownIndicator,
  Option,
  ClearIndicator,
  MenuList,
  IndicatorsContainer,
  IndicatorSeparator,
  MultiValueRemove,
  LoadingIndicator,
};

function Select({
  isClearable, isDisabled, isMulti, isLoading, isSearchable, onChange, options, selected,
}) {
  return (
    <ReactSelect
      className="text-sm"
      closeMenuOnSelect={!isMulti}
      components={customComponents}
      defaultValue={selected}
      name="options"
      options={options}
      styles={customStyles}
      selected={selected}
      theme={customTheme}
      isClearable={isClearable}
      isDisabled={isDisabled}
      isMulti={isMulti}
      isOptionDisabled={(option) => option.isDisabled || false}
      isLoading={isLoading}
      isSearchable={isSearchable}
      onChange={onChange}
    />
  );
}

ClearIndicator.propTypes = {
  innerProps: PropTypes.shape({
    ref: PropTypes.node,
  }).isRequired,
};

DropdownIndicator.propTypes = {
  isFocused: PropTypes.bool.isRequired,
};

IndicatorsContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

Option.propTypes = {
  label: PropTypes.string.isRequired,
  innerProps: PropTypes.shape({}).isRequired,
  isDisabled: PropTypes.bool,
  isSelected: PropTypes.bool,
};

Option.defaultProps = {
  isDisabled: false,
  isSelected: false,
};

MenuList.propTypes = {
  children: PropTypes.node.isRequired,
};

Select.propTypes = {
  options: PropTypes.arrayOf(PropTypes.shape({
    label: PropTypes.string,
    value: PropTypes.string,
  })),
  selected: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.shape({})), PropTypes.shape({})]),
  isMulti: PropTypes.bool,
  isSearchable: PropTypes.bool,
  isLoading: PropTypes.bool,
  isClearable: PropTypes.bool,
  isDisabled: PropTypes.bool,
  onChange: PropTypes.func,
};

Select.defaultProps = {
  options: [],
  selected: [],
  isMulti: false,
  isSearchable: false,
  isLoading: false,
  isClearable: false,
  isDisabled: false,
  onChange: _noop,
};

export default Select;
