'use client';

import Tabs from '@/components/base/Tabs/Tabs';

export default function Home() {
  return (
    <main className='w-full'>
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
