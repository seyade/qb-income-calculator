import React, { ReactNode, ReactElement } from 'react';
import { Link } from 'react-router-dom';

import './Page.scss';
import logo from '../../assets/logo.png';

export interface PageProps {
  title?: string;
  children: ReactNode;
}

function Page({ title, children }: PageProps): ReactElement {
  return (
    <div className="ui-page">
      <article>
        <header className="ui-page__header">
          <Link to="/">
            <img src={logo} alt="quickbook logo" />
          </Link>

          <nav className="ui-page__nav">
            <Link className="ui-page__nav-item" to={'/item-one'}>
              Item 1
            </Link>
            <Link className="ui-page__nav-item" to={'/item-two'}>
              Item 2
            </Link>
            <Link className="ui-page__nav-item" to={'/item-three'}>
              Item 3
            </Link>
          </nav>
        </header>
        <main className="ui-page__content">{children}</main>
      </article>
    </div>
  );
}

export default Page;
