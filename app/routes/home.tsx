import type { Route } from "./+types/home";
import { Welcome } from "../welcome/welcome";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Resumind" },
    { name: "description", content: "Smart feedback for your dream job!" },
  ];
}

export default function Home() {
  return  (
      <main>
        <section>
          <div>
            <h1>Track your Applications & Resume Ratings</h1>
          </div>
        </section>
      </main>
    );
}
