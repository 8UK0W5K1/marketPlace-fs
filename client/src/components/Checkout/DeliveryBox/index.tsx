import React, { ChangeEventHandler } from 'react';

interface DeliveryBoxProps {
  value?: string;
  title?: string;
  message?: string;
  onChange?: ChangeEventHandler;
}

const DeliveryBox: React.FC<DeliveryBoxProps> = ({
  value,
  title,
  message,
  onChange,
}) => {
  console.log(title, value);
  const isSelected = title === value;
  return (
    <label className={`js-check box ${isSelected ? 'active' : ''}`}>
      <input
        type='radio'
        name='delivery'
        value={value}
        onChange={onChange}
        checked={isSelected}
      />
      <h6 className='title'>{title} delivery</h6>
      <p className='text-muted'>{message}</p>
    </label>
  );
};
export default DeliveryBox;
