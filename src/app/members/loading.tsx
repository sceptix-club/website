import { SkeletonCard } from "@/components/loading/Skeleton";

import React from "react";

const LoadingPage = () => {
    return (
        <div className="h-screen w-auto mt-8">
            <SkeletonCard />
        </div>
    );
};

export default LoadingPage;
