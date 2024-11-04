'use client';

import styled from 'styled-components';
import { Button as HeadlessButton, ButtonProps as HeadlessProps } from '@headlessui/react';
import { ReactNode } from 'react';

export interface ButtonProps extends HeadlessProps {
  icon?: any;
  variant?: 'outlined' | 'ghost' | 'default';
  htmlType?: 'button' | 'reset' | 'submit';
  children?: ReactNode;
}
export const CustomButton = styled(HeadlessButton)<ButtonProps>`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  padding: ${({ theme }) => theme.smallPadding};
`;

function AppButton(props: ButtonProps) {
  const { children, icon, htmlType, variant, ...rest } = props;
  return (
    <CustomButton {...rest}>
      {icon && <span>{icon}</span>}
      <span>{children}</span>
    </CustomButton>
  );
}

export default AppButton;
