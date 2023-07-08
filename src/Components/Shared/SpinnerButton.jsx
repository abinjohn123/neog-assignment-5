import { useEffect, useRef } from 'react';

import { noop } from '../../utils';

const SpinnerButton = ({
  children,
  type = 'button',
  className,
  isLoading = false,
  disabled = false,
  onClick = noop,
  ...restProps
}) => {
  const contentRef = useRef(null);

  useEffect(() => {
    if (isLoading) contentRef.current.style.visibility = 'hidden';
    else contentRef.current.style.visibility = 'visible';
  }, [isLoading]);

  return (
    <button
      className={`btn spinner-btn ${className} ${
        disabled || isLoading ? 'disabled' : ''
      }`}
      type={type}
      disabled={disabled || isLoading}
      onClick={onClick}
      {...restProps}
    >
      {isLoading && (
        <div className="spinner-container">
          <div className="spinner"></div>
        </div>
      )}
      <div className="content" ref={contentRef}>
        {children}
      </div>
    </button>
  );
};

export default SpinnerButton;
