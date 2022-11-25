import React, { useState } from 'react';
import Page from './page/Page';
import SidePanel from './componentListSideBar/SidePanel';
import Head from './components/head/head';

function App() {
  const [ toShow, setToShow ] = useState('UI');
  const [ JSONValue, setJSON ] = useState({});

  return (
    <div className="App">
      <Head setToShow={setToShow} setJSON={setJSON} />
      <div className='content'>
        <SidePanel />
        <Page toShow={toShow} setToShow={setToShow} JSONValue={JSONValue} />
      </div>
    </div>
  );
}

export default App;
