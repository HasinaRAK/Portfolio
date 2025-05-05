import type { Metadata } from "next";
import { Geist, Geist_Mono, Anek_Telugu } from "next/font/google";
import "./globals.css";
import { GeistSans } from "geist/font/sans";
import { cn } from "@/lib/utils";

/*for sidebar*/
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { AppSidebar } from "@/app/_components/app-sidebar";
/*End importation sidebar */

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// const anek_talugu = Anek_Telugu({
//   variable: "--font-caption",
//   subsets: ["latin"],
// });

export const metadata: Metadata = {
  title: "Hasina Eric RAKOTOARISOA. Ingénieur Informatique",
  description:
    "Développeur Fullstack NextJS, Tailwindcss, ReactJS, React Native",
};
// export function Layout({ children }: { children: React.ReactNode }) {
//   return (
//     <SidebarProvider>
//       <AppSidebar />
//       <main>
//         <SidebarTrigger />
//         {children}
//       </main>
//     </SidebarProvider>
//   );
// }
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body
        className={cn(
          geistSans.variable,
          geistMono.variable,
          "font-sans h-full"
        )}
      >
        <SidebarProvider>
          <AppSidebar />
          <SidebarInset>
            <main>
              <SidebarTrigger />
              {children}
            </main>
          </SidebarInset>
        </SidebarProvider>
      </body>
    </html>
  );
}
