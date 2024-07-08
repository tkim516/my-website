import Navbar from "../components/MobileMenu";
import Background from "../components/background";
import Navlink from "../components/Navbar";
import RandomQuote from "../components/random-quote";

export default function Page() {
  return (
    <main className="relative">
      <Navlink></Navlink>
      <Background></Background>
      <div className="absolute">Resume</div>
    </main>
  );
}
