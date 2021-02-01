import React, { ReactElement } from 'react';

import Page from '../../components/Page';

export default function ItemOne(): ReactElement {
  return (
    <Page>
      <header>
        <h1>Item One</h1>
        <h2>Item one sub title</h2>
      </header>
      <main>
        <p>Some content for item one page</p>
      </main>
    </Page>
  );
}
