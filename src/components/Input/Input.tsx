import React, { ReactElement } from 'react';
import './Input.scss';

export interface InputProps {
  label?: string;
  id?: string;
  placeholder?: string;
  type?: string;
  value?: string;
  onChange?: any;
}

function Input({
  label,
  id,
  placeholder,
  value,
  onChange,
  type,
}: InputProps): ReactElement {
  return (
    <span className="ui-input">
      <label className="ui-input__label" htmlFor={id}>
        <span className="ui-input__label-text">{label}</span>
        <input
          id={id}
          type={type}
          className="ui-input__field"
          placeholder={placeholder}
          value={value}
          onChange={onChange}
        />
      </label>
    </span>
  );
}

export default Input;
