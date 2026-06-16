import type { Metadata } from 'next';
import { Space_Grotesk, Inter, JetBrains_Mono } from 'next/font/google';
import './globals.css';

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains-mono',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Chashman — Mechatronics & Control Engineer',
  description:
    'Mechatronics & Control Engineer specializing in PLC systems, railway signaling, and industrial automation. Based in Lahore, Pakistan.',
  keywords: [
    'Mechatronics Engineer',
    'Control Engineer',
    'PLC Programming',
    'Railway Signaling',
    'Industrial Automation',
    'Pakistan',
    'Siemens PLC',
    'SCADA',
    'HMI',
    'Automation Engineer',
  ],
  authors: [{ name: 'Chashman' }],
  creator: 'Chashman',
  publisher: 'Chashman',
  robots: 'index, follow',
  
  // Open Graph / Facebook
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://chashman.vercel.app',
    siteName: 'Chashman Portfolio',
    title: 'Chashman — Mechatronics & Control Engineer',
    description:
      'Mechatronics & Control Engineer specializing in PLC systems, railway signaling, and industrial automation. Based in Lahore, Pakistan.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Chashman - Mechatronics & Control Engineer',
      },
    ],
  },
  
  // Twitter
  twitter: {
    card: 'summary_large_image',
    title: 'Chashman — Mechatronics & Control Engineer',
    description:
      'Mechatronics & Control Engineer specializing in PLC systems, railway signaling, and industrial automation.',
    images: ['/og-image.png'],
    creator: '@chashman7015',
  },
  
  // Additional metadata
  metadataBase: new URL('https://chashman.vercel.app'),
  alternates: {
    canonical: '/',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${inter.variable} ${jetbrainsMono.variable}`}
    >
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/chashman.webp" />
      </head>
      <body className="bg-background text-text-primary antialiased">{children}</body>
    </html>
  );
}
