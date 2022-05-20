function PropertyControlledComponent({ children, shouldRender }) {
  return shouldRender ? children : null;
}

export default PropertyControlledComponent;
