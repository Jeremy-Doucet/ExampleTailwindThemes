import React from 'react';

/** Renders error text under form inputs */
export function ErrorText({ children, ...props }) {
  return (
    <div className="text-error text-sm text-right mt-1" {...props}>
      {children}
    </div>
  );
}
