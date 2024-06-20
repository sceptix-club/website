import { DomainDock } from "@/components/DomainDock";
import { ScrollTextReveal } from "@/components/ScrollTextReveal";

export default function Home() {
  return (
    <>
      <div className="h-screen border flex justify-center items-center"></div>
      <ScrollTextReveal />
      <div className="h-screen border">About Us</div>
      <div className="h-screen">
        <DomainDock />
      </div>
    </>
  );
}
