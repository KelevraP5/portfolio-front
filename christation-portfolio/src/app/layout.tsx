
import "styles/globals.css";

import { abrilFatface } from "./styles/fonts";

import { BackgroundProvider } from "../contexts/HomeBgContext";
import LayoutClient from "@/src/app/layoutClient";

type RootLayoutProps = Readonly<{
  children : React.ReactNode;
}>

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="fr" className={abrilFatface.variable}>
      <body className="antialiased" suppressHydrationWarning={true}>
          <BackgroundProvider>
            <LayoutClient>{children}</LayoutClient>
          </BackgroundProvider>
      </body>
    </html>
  )
}