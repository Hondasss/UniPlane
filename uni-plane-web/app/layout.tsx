import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'SkyFly Airlines - Reserva de Voos',
  description: 'Sistema de reserva de voos online - SkyFly Airlines',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
