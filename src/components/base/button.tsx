import React from 'react';
import styled from 'styled-components';
import { tuple } from 'utils/type';

const SizeTypes = tuple('small', 'middle', 'largs');
export type SizeType = typeof SizeTypes[number];
const ButtonTypes = tuple(
  'default',
  'primary',
  'ghost',
  'dashed',
  'link',
  'text'
);
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
  height: ${({ theme }) => theme.size.height.base}px;
  padding: ${({ theme }) => {
    const { max, round } = Math;
    const paddingVertical = max(
      round(((theme.size.height.base - theme.size.font.base) / 2) * 10) / 10 -
        theme.border.width,
      0
    );
    const paddingHorizontal = theme.size.padding.md - 1;
    return `${paddingVertical}px ${paddingHorizontal}px`;
  }};
  border-width: ${({ theme }) => theme.border.width}px;
  border-radius: ${({ theme }) => theme.border.radius}px;
  border-style: ${({ theme }) => theme.border.style};
  border-color: ${({ theme }) => theme.border.color.base};
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
