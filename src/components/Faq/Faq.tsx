import React, { ReactElement } from 'react';
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from 'react-accessible-accordion';

import './Faq.scss';

export interface Config {
  heading: string;
  body: string;
}

export interface FaqProps {
  data: Config[];
  title?: string;
}

function Faq({ data, title }: FaqProps): ReactElement {
  return (
    <section className="ui-faq">
      <h4 className="ui-faq__title">{title}</h4>

      <Accordion
        className="ui-faq__content"
        allowMultipleExpanded={true}
        allowZeroExpanded={true}
      >
        {data.map(config => {
          return (
            <AccordionItem className="ui-faq__item">
              <AccordionItemHeading className="ui-faq__item-heading">
                <AccordionItemButton className="ui-faq__item-heading-button">
                  {config.heading}
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel className="ui-faq__item-panel">
                <p>{config.body}</p>
              </AccordionItemPanel>
            </AccordionItem>
          );
        })}
      </Accordion>
    </section>
  );
}

export default Faq;
