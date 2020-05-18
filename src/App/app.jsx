import React from 'react';
import { Calculator } from 'components'; //components is the path alias created by webpack (https://webpack.js.org/configuration/resolve/)
import { NumberProvider } from 'components';

function App() {
  return (
    < NumberProvider>
      <Calculator />
    </NumberProvider>
  );
}

export default App;
