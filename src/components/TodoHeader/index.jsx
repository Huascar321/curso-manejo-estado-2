import React from 'react';

function TodoHeader({ children }) {
  return(
    <header>
      <h1>やること</h1>
      {children}
    </header>
  );
}

export { TodoHeader };