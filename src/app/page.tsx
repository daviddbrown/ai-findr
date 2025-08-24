import type { Metadata } from "next";
import { site } from "@/config/site";

export const metadata: Metadata = {
  title: "Find the Best AI Tools",
  description: "Discover, compare, and choose the right AI tools for your workflow.",
  alternates: { canonical: "/" },
  openGraph: {
    images: [
      {
        url: "/api/og?title=Find%20the%20Best%20AI%20Tools",
        width: 1200,
        height: 630,
        alt: `${site.name} - Find the Best AI Tools`,
      },
    ],
  },
  twitter: {
    images: [
      {
        url: "/api/og?title=Find%20the%20Best%20AI%20Tools",
        alt: `${site.name} - Find the Best AI Tools`,
      },
    ],
  },
};
import { AppContainer } from "@/components/layout/AppContainer";
import { HomeClient } from "@/components/home/HomeClient";

export default function Home() {
  return (
    <AppContainer>
      <main className="flex-1 w-full mx-auto flex flex-col gap-8">
        <HomeClient />
      </main>
    </AppContainer>
  );
}
