'use client';

import { ReactNode } from 'react';
import { StyledContainer } from '@/library/_components/layout/_styled/SC_layout_container';

export function Container({ children }: { children: ReactNode }) {
  return <StyledContainer>{children}</StyledContainer>;
}
