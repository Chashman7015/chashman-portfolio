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
  ],
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
      <body className="bg-background text-text-primary antialiased">{children}</body>
    </html>
  );
}
