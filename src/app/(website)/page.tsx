'use client';

import { Button } from '@/components/base';
import { useAppTheme } from '@/hooks';
import Tabs from '@/components/base/Tabs/Tabs';

export default function Home() {
  const { toggleTheme } = useAppTheme();

  return (
    <main className='w-full'>
      <Button variant='outlined' onClick={toggleTheme}>
        Click Me !!
      </Button>
      <Tabs
        tabs={[
          { label: 'tab 1', key: 'tab-1' },
          { label: 'tab 2', key: 'tab-2' },
          { label: 'tab 3', key: 'tab-3' },
        ]}
      >
        <div>Tab panel 1</div>
        <div>Tab panel 2</div>
        <div>Tab panel 3</div>
      </Tabs>
    </main>
  );
}
