import './globals.css';
import { Manrope } from 'next/font/google';

const manrope = Manrope({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
});

export const metadata = {
  title: 'INNOVATE WEB SOLUTIONS',
  description: 'Free Landing Page For Commercial Use',
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt">
      <body className={manrope.className}>
        {children}
      </body>
    </html>
  );
}
