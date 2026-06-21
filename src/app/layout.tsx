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
      <head>
        {/* Meta Pixel Code */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '1050591234316762');
              fbq('track', 'PageView');
            `,
          }}
        />
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=1050591234316762&ev=PageView&noscript=1"
          />
        </noscript>
        {/* UTMify Pixel Code */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.pixelId = "6a3873aa4a6789d175a76a3e";
              var a = document.createElement("script");
              a.setAttribute("async", "");
              a.setAttribute("defer", "");
              a.setAttribute("src", "https://cdn.utmify.com.br/scripts/pixel/pixel.js");
              document.head.appendChild(a);
            `,
          }}
        />
      </head>
      <body className="font-body antialiased font-light">
        {children}
        <Toaster />
      </body>
    </html>
  )
}
