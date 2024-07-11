import Image from "next/image";
import MobileNavBar from "./components/Home/mobile-navbar/MobileNavBar";
import Landing from "./components/Home/landing/landing";

export default function Home() {
  return (
    <>
      <main>
        <MobileNavBar />
        <Landing />
      </main>
    </>
  );
}
