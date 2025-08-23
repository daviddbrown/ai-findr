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
