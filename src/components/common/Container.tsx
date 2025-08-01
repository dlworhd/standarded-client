import React from "react";

interface ContainerProps {
    children: React.ReactNode;
}

export function OuterContainer({ children }: ContainerProps) {
    return <div className="flex h-[100vh] w-[100vw] gap-2 p-2">{children}</div>;
}

export function InnerContainer({ children }: ContainerProps) {
    return <div className="h-full w-full">{children}</div>;
}
