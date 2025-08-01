import { SearchIcon } from "lucide-react";

export default function Sidebar() {
    return (
        <div className="flex flex-col gap-2 border border-[var(--border)] p-2 w-[var(--sidebar-width)] rounded-md">
            {/* Top */}
            <div className="flex gap-2">
                <Search />
            </div>

            {/* Medium */}
            <div></div>
        </div>
    );
}

export function Search() {
    return (
        <div className="flex">
            <div className="relative">
                <input className="w-full h-[24px] border border-[var(--border)] rounded-md px-2 py-4" />
                <SearchIcon
                    className="absolute stroke-[var(--primary)] top-1/2 -translate-y-1/2 right-[8px]"
                    width={16}
                    height={16}
                />
            </div>
        </div>
    );
}
