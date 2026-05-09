import type { Metadata } from 'next';
import './globals.css';
import './diagnostic-overrides.css';

export const metadata: Metadata = {
  title: 'Danish Devgan | Manufacturing Engineering & Industrial Systems Consultant',
  description:
    'Manufacturing engineering consultant helping industrial businesses reduce downtime, improve throughput, control capex, and protect EBITDA.',
  metadataBase: new URL('https://danishdevgan.com'),
  openGraph: {
    title: 'Danish Devgan | Manufacturing Engineering Consultant',
    description:
      'Find hidden factory profit leaks across downtime, throughput, capex, maintenance, safety, flow, and process systems.',
    url: 'https://danishdevgan.com',
    siteName: 'Danish Devgan',
    type: 'website',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
