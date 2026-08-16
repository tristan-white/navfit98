import type { Metadata } from 'next';

export const metadata: Metadata = {
  metadataBase: new URL('https://navfitx.com'),
  title: {
    default: 'NavFitX',
    template: '%s | NavFitX',
  },
  description: 'NavFitX is a modern replacement for NAVFIT98A.',
  keywords: ['NavFitX', 'NAVFIT98A', 'fitness report', 'Navy'],
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'NavFitX',
    description: 'NavFitX is a modern replacement for NAVFIT98A.',
    url: 'https://navfitx.com',
    siteName: 'NavFitX',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'NavFitX',
    description: 'NavFitX is a modern replacement for NAVFIT98A.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
