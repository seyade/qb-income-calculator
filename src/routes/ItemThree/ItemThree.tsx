import React, { ReactElement } from 'react';

import Page from '../../components/Page';

export default function ItemThree(): ReactElement {
  return (
    <Page>
      <header>
        <h1>Item Three</h1>
        <h2>Item three sub title</h2>
      </header>
      <main>
        <p>Some content for item three page</p>
      </main>
    </Page>
  );
}
