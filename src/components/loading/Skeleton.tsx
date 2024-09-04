import { Skeleton } from "@/components/ui/skeleton";

export function SkeletonCard() {
    const skeletons = Array.from({ length: 3 }); // Array with three elements

    return (
        <div className=" flex justify-center items-center mt-8">
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 mt-3  ">
                {skeletons.map((_, index) => (
                    <Skeleton key={index} className="h-[425px] w-[350px] rounded-xl bg" />
                ))}
            </div>
        </div>
    );
}
