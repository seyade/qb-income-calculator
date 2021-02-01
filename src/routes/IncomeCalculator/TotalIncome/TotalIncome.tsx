import React, { ReactElement } from 'react';
import './TotalIncome.scss';

export interface TotalIncomeProps {
  title?: string;
  totalIncome: string;
}

function TotalIncome({ title, totalIncome }: TotalIncomeProps): ReactElement {
  return (
    <div className="total-income">
      <h4 className="total-income__title">{title}</h4>
      <span className="total-income__result">&pound;{totalIncome}</span>
    </div>
  );
}

export default TotalIncome;
