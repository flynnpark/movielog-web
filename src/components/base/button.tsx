import React, { useState } from 'react';
import { tuple } from 'utils/type';

const ButtonTypes = tuple(
  'default',
  'primary',
  'ghost',
  'dashed',
  'link',
  'text'
);
export type ButtonType = typeof ButtonTypes[number];
const ButtonShapes = tuple('circle', 'circle-outline', 'round');
type ButtonShape = typeof ButtonShapes[number];
const ButtonHTMLTypes = tuple('submit', 'button', 'reset');
export type ButtonHTMLType = typeof ButtonHTMLTypes[number];

interface BaseButtonProps {
  loading?: boolean;
  type?: ButtonType;
  shape?: ButtonShape;
  htmlType?: ButtonHTMLType;
}

export type ButtonProps = Partial<BaseButtonProps>;

const Button: React.FC<ButtonProps> = (props: ButtonProps) => {
  const { loading, type, shape, htmlType, ...rest } = props;

  const [innerLoading, setLoading] = useState<boolean>(!!loading);

  return (
    <button type={htmlType} {...rest}>
      Button
    </button>
  );
};

Button.defaultProps = {
  loading: false,
  htmlType: 'button' as ButtonProps['htmlType'],
};

export default Button;
