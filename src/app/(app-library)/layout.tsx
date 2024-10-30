import { Container } from '@/library/_components/layout/Container';

export default function WebsiteLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <Container>{children}</Container>;
}
