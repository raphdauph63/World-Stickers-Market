import { teams } from "@/data/teams";
import TeamCard from "@/components/TeamCard";

export default function TeamsPage() {
  return (
    <main className="container">

      <h1>Toutes les équipes</h1>

      <div className="teamsGrid">

        {teams.map((team) => (

          <TeamCard
            key={team.id}
            {...team}
          />

        ))}

      </div>

    </main>
  );
}
