import { useEffect, useState } from "react";
import type { Profile } from "../../types/Profile";
import { ArrowRightFromLine } from "lucide-react";

interface SlidePanelProps {
    profile?: Profile;
    isOpen: boolean;
    onClose: () => void;
}

export default function SlidePanel({ profile, isOpen, onClose }: SlidePanelProps) {
    const [isLoading, setLoading] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(isOpen);
        }, 300);

        return () => clearTimeout(timer);
    }, [isOpen]);

    useEffect(() => {
        function handleEsc(e: KeyboardEvent) {
            if (e.key === "Escape") {
                handleClose();
            }
        }

        if (isOpen) {
            window.addEventListener("keydown", handleEsc);
        }

        return () => {
            window.removeEventListener("keydown", handleEsc);
        };
    }, [isOpen, onClose]);


    const handleClose = () => {
        setLoading(false) // 프로필 내용 미리 제거 후 닫기 위해 => 추후 리팩토링 필요
        onClose();
    }


    return (
        <div
            className={`absolute top-0 right-0 flex justify-center items-center gap-4 bg-[var(--background)]/95 border-l border-[var(--border)] transition-all duration-300 h-full ${
                isOpen ? "w-1/2 p-4" : "w-0 p-0"
            }`}
        >
            {isLoading && (
                <>
                    <div className="absolute top-4 left-4" onClick={handleClose}>
                        <ArrowRightFromLine
                            className="stroke-[var(--primary)] hover:opacity-80"
                            width={16}
                            height={16}
                        />
                    </div>
                    <div className="flex flex-col">
                        <div>
                            <img
                                className={`border border-[var(--border)] rounded-full ${
                                    isOpen ? "w-[100px] h-[100px]" : "w-0 h-0"
                                }`}
                                src="/public/profile.png"
                            />
                        </div>
                        <div>{profile?.nickname}</div>
                        <div>{profile?.job}</div>
                        <div>{profile?.country}</div>
                        <div>{profile?.location}</div>
                        <div>{profile?.educated}</div>
                        <div>{profile?.company}</div>
                        <div>{profile?.link}</div>
                    </div>
                </>
            )}
        </div>
    );
}
