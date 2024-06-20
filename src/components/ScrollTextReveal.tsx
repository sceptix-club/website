import TextReveal from "@/components/magicui/text-reveal";

export async function ScrollTextReveal() {
  return (
    <div className="z-10 flex min-h-min h-min items-center justify-center  bg-white dark:bg-black">
      <TextReveal text="Liberate the Mind." className="font-fira_sans" />
    </div>
  );
}
