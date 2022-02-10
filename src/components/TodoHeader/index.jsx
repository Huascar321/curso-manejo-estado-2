import React from 'react';

function TodoHeader({ children, loading }) {
  return(
    <header>
      <h1>やること</h1>
      {
        React.Children
          .toArray(children)
          .map(child => React.cloneElement(child, { loading }))
      }
    </header>
  );
}

export { TodoHeader };