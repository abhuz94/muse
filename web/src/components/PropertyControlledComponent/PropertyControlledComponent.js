function PropertyControlledComponent({ shouldRender, children }) {
  return shouldRender ? children : null;
}

export default PropertyControlledComponent;
