import React from 'react';
import styled from 'styled-components';
import { tuple } from 'utils/type';

const ButtonTypes = tuple('default', 'primary', 'link');
export type ButtonType = typeof ButtonTypes[number];
// const ButtonShapes = tuple('circle', 'circle-outline', 'round');
// type ButtonShape = typeof ButtonShapes[number];
const ButtonHTMLTypes = tuple('submit', 'button', 'reset');
export type ButtonHTMLType = typeof ButtonHTMLTypes[number];

interface BaseButtonProps {
  loading?: boolean;
  // shape?: ButtonShape;
  // size?: SizeType;
  onClick?: React.MouseEventHandler<HTMLElement>;
}

type NativeButtonProps = {
  type?: ButtonType;
  htmlType?: ButtonHTMLType;
} & BaseButtonProps;
type StyledButtonProps = {
  styleType?: ButtonType;
} & BaseButtonProps;

export type ButtonProps = Partial<NativeButtonProps>;

const BaseStyledButton = styled.button<StyledButtonProps>`
  height: 32px;
  padding: 2px 15px;
  border-radius: 2px;
  border: 1px solid ${({ theme }) => theme.border.default.color};
  background-color: #fff;
`;

const Button: React.FC<ButtonProps> = (props) => {
  const { children, loading, type, htmlType, ...rest } = props;

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
    <BaseStyledButton
      type={htmlType}
      onClick={handleClick}
      styleType={type}
      {...rest}
    >
      {typeof children === 'string' ? <span>{children}</span> : children}
    </BaseStyledButton>
  );
};

Button.defaultProps = {
  loading: false,
  htmlType: 'button' as ButtonProps['htmlType'],
};

export default Button;
