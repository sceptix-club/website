import Image from "next/image";
import { Domain } from "@/components/Domain";

export default function Home() {
  return (
    <>
      <div className="h-screen">Hero Section</div>
      <div className="h-screen">Hero Section</div>
      <div className="h-screen">
        <h1>Domains</h1>
        {/* <Domain /> */}
      </div>
    </>
  );
}
