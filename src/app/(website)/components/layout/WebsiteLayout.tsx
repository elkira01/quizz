import { ReactNode } from 'react';
import { NotificationHeader } from '@/components/shared/ui/messages/NotificationHeader';

function WebsiteLayout({ children }: { children: ReactNode }) {
  return (
    <div className='w-full'>
      <NotificationHeader
        messages={[
          'Take advantage of the great promotion for the launching of your new platform !!!',
          '30% off on every books',
        ]}
        themeColor='green'
      />
      {children}
    </div>
  );
}

export default WebsiteLayout;
