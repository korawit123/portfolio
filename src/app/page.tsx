import Image from "next/image";
import { Navbar }   from "./(components)/Navbar";

export default function Home() {
  return (
    <main className="mx-auto max-w-6xl">
      <Navbar/>
      <Image className="ml-[60%] mt-20" src="/mancoding2.png" alt="" width="400" height="0"></Image>
      
    </main>
  );
}
