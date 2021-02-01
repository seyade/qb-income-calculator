import React, { ReactElement } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLink, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import {
  faFacebook,
  faLinkedin,
  faPinterest,
  faInstagram,
  faYoutube,
} from '@fortawesome/free-brands-svg-icons';
import './Social.scss';

export interface SocialProps {
  title?: string;
}

function Social({ title }: SocialProps): ReactElement {
  return (
    <aside className="ui-social">
      <h4 className="ui-social__title">{title}</h4>
      <nav className="ui-social__nav">
        <a href="/" className="ui-social__link" target="_blank">
          <FontAwesomeIcon icon={faFacebook} />
        </a>
        <a href="/" className="ui-social__link" target="_blank">
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
        <a href="/" className="ui-social__link" target="_blank">
          <FontAwesomeIcon icon={faPinterest} />
        </a>
        <a href="/" className="ui-social__link" target="_blank">
          <FontAwesomeIcon icon={faInstagram} />
        </a>
        <a href="/" className="ui-social__link" target="_blank">
          <FontAwesomeIcon icon={faYoutube} />
        </a>
        <a href="/" className="ui-social__link" target="_blank">
          <FontAwesomeIcon icon={faEnvelope} />
        </a>
        <a href="/" className="ui-social__link" target="_blank">
          <FontAwesomeIcon icon={faLink} />
        </a>
      </nav>
    </aside>
  );
}

export default Social;
