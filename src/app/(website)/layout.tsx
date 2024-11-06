import WebsiteLayout from '@/app/(website)/components/layout/WebsiteLayout';

export default function WebsiteRootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <WebsiteLayout>{children}</WebsiteLayout>;
}
