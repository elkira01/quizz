'use client';

import styled from 'styled-components';
import { useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import { TextReveal } from '@/components/base/Reveal/TextReveal';

const SC_Component = styled.div`
  height: 42px;

  p {
    height: 42px;
    max-width: ${({ theme }) => theme.maxContainerWidth};
    margin-inline: auto;
    text-align: center;
    font-weight: 500;
    font-size: 1rem;
    color: white;
    text-transform: uppercase;
    padding-block: 10px;
  }
`;

export function NotificationHeader({ messages, themeColor }: { messages: any[]; themeColor: any }) {
  const renderContent = (index: number) => {
    const content = createRoot(document.querySelector('.content') as any);
    content.render(<TextReveal message={messages[index]} />);
  };
  const updateContent = () => {
    let index = 0;

    setInterval(() => {
      index = (index + 1) % messages.length;
      renderContent(index);
    }, 5000);
  };

  useEffect(() => {
    renderContent(0);
    updateContent();
  }, []);

  return (
    <SC_Component style={{ background: themeColor }}>
      <p className='content'></p>
    </SC_Component>
  );
}
