import { Hunters } from "@/data/characters";
import CharacterList from "./components/CharacterList";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#fdfdfd] to-[#d4d4d4]/10 opacity-90">
      <main className="flex min-h-screen flex-col items-center justify-between p-4 sm:p-8">
        <CharacterList characters={Hunters} />
      </main>
    </div>
  );
}
