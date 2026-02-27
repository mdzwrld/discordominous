import type { Metadata } from "next"
import { Toaster } from "@/components/ui/toaster"
import "./globals.css"

const siteTitle = "Discord Dominus"
const siteDescription =
  "Construa uma máquina privada de dinheiro no Discord. Sem depender de algoritmo, sem implorar por engajamento. Assuma o controle."

export const metadata: Metadata = {
  title: siteTitle,
  description: siteDescription,
  openGraph: {
    title: siteTitle,
    description: siteDescription,
    url: "https://discord-dominus.com", // Replace with actual URL
    siteName: siteTitle,
    images: [
      {
        url: "https://picsum.photos/seed/og/1200/630", // Replace with actual OG image URL
        width: 1200,
        height: 630,
        alt: "Discord Dominus Open Graph Image",
      },
    ],
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
    images: ["https://picsum.photos/seed/og/1200/630"], // Replace with actual Twitter image URL
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <body className="font-body antialiased font-light">
        {children}
        <Toaster />
      </body>
    </html>
  )
}
