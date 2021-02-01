import React, { ReactElement } from 'react';

import Card from '../../components/Card';
import Social from '../../components/Social';
import Calculator from './Calculator';
import Faq from '../../components/Faq';

import { config } from '../../services/accordion.config';

import './income-calculator.scss';

export default function IncomeCalculator(): ReactElement {
  return (
    <div className="income-calculator">
      <Card title="The QuickBooks calculator">
        <Calculator />
        <Social title="Share my results" />
      </Card>
      <Faq data={config} title="Frequently asked questions" />
    </div>
  );
}
