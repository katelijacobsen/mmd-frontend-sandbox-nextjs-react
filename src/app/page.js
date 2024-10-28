import Button from "@/components/Button"; //default export
import { FaBeer } from "react-icons/fa"; //main export
// se page lidt ligesom en index.html
export default function Home() {
  //rendere på serveren
  return (
    <div>
      <FaBeer className="button"/>
      <Button />
    </div>
  );
}
// se forskel mellem server og client componenter. Hvornår skal det ene blive valgt i frem for andet ?
