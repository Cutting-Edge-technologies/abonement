import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import { ImportEntryPoint } from './buildEnvioroments';

const entryPointEnvVariable = process.env.REACT_APP_BUILD_TARGET?.trim().toUpperCase() || '';

ImportEntryPoint(entryPointEnvVariable).then(({default: EntryPoint}) => {
  const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
  );

  root.render(
    <React.StrictMode>
      <EntryPoint />
    </React.StrictMode>
  );
})




// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
