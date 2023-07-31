/* eslint-disable @typescript-eslint/no-explicit-any */
import React, {
  CSSProperties,
  ChangeEventHandler,
  FocusEventHandler,
  HTMLInputTypeAttribute,
  MouseEventHandler,
} from 'react';

interface TextProps {
  label?: HTMLInputTypeAttribute;
  name: string;
  type?: HTMLInputTypeAttribute;
  placeholder?: string;
  value?: string;
  style?: CSSProperties;
  children?: React.ReactNode;
  onChange?: FocusEventHandler;
  onClick?: MouseEventHandler;
  onBlur?: FocusEventHandler;
  col?: number;
}

export const Text: React.FC<TextProps> = ({
  label,
  name,
  type = 'text',
  placeholder,
  value,
  style,
  children,
  onChange,
  onClick,
}) => (
  <div className='col form-group col-md' style={style}>
    <label>{label}</label>
    <input
      type={type}
      name={name}
      className='form-control'
      placeholder={placeholder}
      defaultValue={value}
      onBlur={onChange}
      onClick={onClick}
    />
    {children}
  </div>
);

interface RadioProps {
  label: string;
  name: string;
  value?: string;
  onChange: FocusEventHandler;
}

export const Radio: React.FC<RadioProps> = ({
  label,
  name,
  value,
  onChange,
}) => (
  <label className='custom-control custom-radio custom-control-inline'>
    <input
      className='custom-control-input'
      checked={label.toLowerCase() === value}
      type='radio'
      name={name}
      defaultValue={value}
      onChange={() => null}
      onBlur={(e) => onChange(e)}
    />
    <span className='custom-control-label'>{label}</span>
  </label>
);

interface CheckboxProps {
  name?: string;
  children?: React.ReactNode;
  onChange?: FocusEventHandler<HTMLElement>;
}

export const Checkbox: React.FC<CheckboxProps> = ({
  name,
  children,
  onChange,
}) => (
  <label className='custom-control custom-checkbox'>
    <input
      type='checkbox'
      className='custom-control-input'
      name={name}
      onBlur={onChange}
    />
    <div className='custom-control-label'>{children}</div>
  </label>
);

interface TextAreaProps {
  label?: string;
  name?: string;
  style?: CSSProperties;
  value?: string;
  children?: React.ReactNode;
  onChange?: ChangeEventHandler<HTMLElement>;
}

export const TextArea: React.FC<TextAreaProps> = ({
  label,
  name,
  style,
  value,
  onChange,
}) => (
  <div className='form-group' style={style}>
    <label>{label}</label>
    <textarea
      className='form-control'
      rows={1}
      name={name}
      defaultValue={value}
      onChange={onChange}
    ></textarea>
  </div>
);

interface SelectProps {
  label?: string;
  name?: string;
  style?: CSSProperties;
  value?: string;
  children?: React.ReactNode;
  onChange?: ChangeEventHandler<HTMLElement>;
  col?: number;
  options?: string[];
}

export const Select: React.FC<SelectProps> = ({
  value,
  label,
  options,
  col,
  name,
  onChange,
  style,
}) => {
  return (
    <div className={`form-group col-md-${col}`} style={style}>
      <label>{label}</label>
      <select
        id={label}
        className='form-control'
        name={name}
        onChange={() => null}
        onBlur={onChange}
        defaultValue={value}
      >
        <option>Select...</option>
        {options?.map((option, index) => (
          <option key={index}>{option}</option>
        ))}
      </select>
    </div>
  );
};

interface EmailProps {
  label?: string;
  style?: CSSProperties;
  onChange?: ChangeEventHandler;
  col?: number;
}

export const Email: React.FC<EmailProps> = (props: object) => (
  <Text type='email' {...props} name='email'>
    <small className='form-text text-muted'>
      We'll never share your email with anyone else.
    </small>
  </Text>
);

interface PasswordProps {
  props?: object;
  col?: number;
  onChange: ChangeEventHandler;
  label?: string;
  name?: string;
  style?: CSSProperties;
}

export const Password: React.FC<PasswordProps> = (props) => (
  <div className={`form-group col-md-${props.col}`}>
    <Text name='password' type='password' {...props} onBlur={props.onChange} />
  </div>
);

interface ConfirmPasswordProps {
  props?: object;
  col: number;
  onChange: ChangeEventHandler;
  label?: string;
  style?: CSSProperties;
}

export const ConfirmPassword: React.FC<ConfirmPasswordProps> = (props) => (
  <div className={`form-group col-md-${props.col}`}>
    <Text
      name='confirm_password'
      type='password'
      {...props}
      onBlur={props.onChange}
    />
  </div>
);

interface SubmitProps {
  classNamees: string;
  props?: string;
  disabled?: boolean;
  title: string;
}

export const Submit: React.FC<SubmitProps> = (props) => (
  <button
    type='submit'
    className={`btn ${props.classNamees}`}
    disabled={props.disabled}
  >
    {props.title}
  </button>
);
