import React, { ReactElement } from 'react';

import Page from '../../components/Page';

export default function ItemTwo(): ReactElement {
  return (
    <Page>
      <header>
        <h1>Item Two</h1>
        <h2>Item two sub title</h2>
      </header>
      <main>
        <p>Some content for item two page</p>
      </main>
    </Page>
  );
}
