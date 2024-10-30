'use client';

import { NextUIProvider } from '@nextui-org/react';

export function UILibraryProvider({ children }: { children: React.ReactNode }) {
  return <NextUIProvider>{children}</NextUIProvider>;
}
