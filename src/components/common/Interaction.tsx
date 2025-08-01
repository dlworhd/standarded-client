import { Plus } from "lucide-react";
import PopOver from "./PopOver";
import { useState } from "react";

export default function Interaction() {
    const [isPopOver, setPopOver] = useState(false);

    return (
        <div onClick={() => setPopOver(prev => !prev)} className="fixed flex justify-center items-center bottom-4 right-4 w-[50px] h-[50px] rounded-full bg-[var(--foreground)] hover:scale-[1.1] transition-all duration-200 cursor-pointer">
            <Plus
                className=""
                width={20}
                height={20}
                stroke="var(--background)"
            />
            {isPopOver && <PopOver/>}
            
        </div>
    );
}
