import React, { ReactNode, ReactElement } from 'react';
import './Card.scss';

export interface CardProps {
  title?: string;
  children: ReactNode;
}

function Card({ title, children }: CardProps): ReactElement {
  return (
    <div className="ui-card">
      <h3 className="ui-card__title">{title}</h3>
      <section className="ui-card__body">{children}</section>
    </div>
  );
}

export default Card;
