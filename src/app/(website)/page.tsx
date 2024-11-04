'use client';

import { Button } from '@/components/base';
import useAppTheme from '@/hooks/theme/use-app-theme';

export default function Home() {
  const { toggleTheme } = useAppTheme();

  return (
    <div className='grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]'>
      <main className='flex flex-col gap-8 row-start-2 items-center sm:items-start'>
        <Button className='text-black bg-blue-500 rounded-full' onClick={() => toggleTheme()}>
          Click Me !!
        </Button>
      </main>
    </div>
  );
}
