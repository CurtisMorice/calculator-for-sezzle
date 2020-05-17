import React from 'react';
import { Calculator } from 'components';
import { NumberProvider } from 'components';
function App() {
  return (

    < NumberProvider>
      <Calculator />
    </NumberProvider>
  );
}

export default App;
