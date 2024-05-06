import { LandingBackground, LandingTitle } from "./shared/components/landing";

export default function Home() {
  return (
    <main className="landing-page">
      <LandingTitle />
      <LandingBackground />
    </main>
  );
}
