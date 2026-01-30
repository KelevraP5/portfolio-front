
import "styles/globals.css";

import { abrilFatface } from "./styles/fonts";

import LayoutClient from "app/layoutClient";

type RootLayoutProps = Readonly<{
  children : React.ReactNode;
}>

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="fr" className={abrilFatface.variable}>
      <body className="antialiased" suppressHydrationWarning={true}>
          <LayoutClient>{children}</LayoutClient>
      </body>
    </html>
  )
}