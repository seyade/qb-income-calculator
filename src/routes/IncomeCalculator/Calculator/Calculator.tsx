import React, { useEffect, useCallback, ReactElement } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Input from '../../../components/Input';
import TotalIncome from '../TotalIncome';

import './Calculator.scss';

import {
  incomeState,
  handleSalesIncome,
  handleCommissions,
  handleConstruction,
  handleOtherIncome,
  setTotalIncome,
} from '../../../store/incomeReducer';

export function Calculator(): ReactElement {
  const incomeAppState = useSelector(incomeState);
  const dispatch = useDispatch();

  function parseData(data: any) {
    return isNaN(data) ? 0 : parseFloat(data);
  }

  const handleSubTotal = useCallback(() => {
    const {
      salesIncome,
      commissions,
      construction,
      otherIncome,
    } = incomeAppState;

    const parsedSalesIncome = parseData(salesIncome);
    const parsedCommissions = parseData(commissions);
    const parsedConstruction = parseData(construction);
    const parsedOtherIncome = parseData(otherIncome);

    const subTotal: number =
      parsedSalesIncome +
      parsedCommissions +
      parsedConstruction +
      parsedOtherIncome;

    dispatch(setTotalIncome(subTotal));
  }, [dispatch, incomeAppState]);

  useEffect(() => {
    handleSubTotal();
  }, [dispatch, handleSubTotal, incomeAppState]);

  return (
    <div className="calculator">
      <div className="calculator__input">
        <div className="ui-row">
          <Input
            label="Income from sales"
            id="incomeFromSales"
            placeholder="£0"
            value={incomeAppState.incomeSales}
            onChange={(event: any) =>
              dispatch(handleSalesIncome(event.currentTarget.value))
            }
          />
          <Input
            label="Commissions"
            id="commissions"
            placeholder="£0"
            value={incomeAppState.incomeSales}
            onChange={(event: any) =>
              dispatch(handleCommissions(event.currentTarget.value))
            }
          />
        </div>
        <div className="ui-row">
          <Input
            label="Construction"
            id="construction"
            placeholder="£0"
            value={incomeAppState.incomeSales}
            onChange={(event: any) =>
              dispatch(handleConstruction(event.currentTarget.value))
            }
          />
          <Input
            label="Other income"
            id="otherIncome"
            placeholder="£0"
            value={incomeAppState.incomeSales}
            onChange={(event: any) =>
              dispatch(handleOtherIncome(event.currentTarget.value))
            }
          />
        </div>
      </div>

      <TotalIncome title="Total" totalIncome={incomeAppState.totalIncome} />
    </div>
  );
}

export default Calculator;
