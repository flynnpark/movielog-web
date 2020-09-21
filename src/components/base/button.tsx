import React from 'react';
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
  onClick?: React.MouseEventHandler<HTMLElement>;
}

export type ButtonProps = Partial<BaseButtonProps>;

const Button: React.FC<ButtonProps> = (props) => {
  const { children, loading, type, shape, htmlType, ...rest } = props;

  const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    const { onClick } = props;
    if (loading) {
      return;
    }
    if (onClick) {
      onClick(e);
    }
  };

  return (
    <button type={htmlType} onClick={handleClick} {...rest}>
      {children}
    </button>
  );
};

Button.defaultProps = {
  loading: false,
  htmlType: 'button' as ButtonProps['htmlType'],
};

export default Button;
