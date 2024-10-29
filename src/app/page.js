import AcceptCookies from "@/components/AcceptCookies"; //default export
// se page lidt ligesom en index.html
export default function Home() {
  //rendere på serveren
  return (
    <div>
      <AcceptCookies />
    </div>
  );
}
// se forskel mellem server og client componenter. Hvornår skal det ene blive valgt i frem for andet ?
