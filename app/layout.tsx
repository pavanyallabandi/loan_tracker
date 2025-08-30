import { ReactNode } from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import theme from '../theme';

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <ChakraProvider theme={theme}>{children}</ChakraProvider>
      </body>
    </html>
  );
}
