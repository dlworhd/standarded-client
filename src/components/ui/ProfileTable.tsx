import { useState } from "react";
import type { Profile } from "../../types/Profile";
import { Globe } from "lucide-react";
import SlidePanel from "../common/SlidePanel";

interface ProfileTableProps {
    profiles: Profile[];
}

export function ProfileTable({ profiles }: ProfileTableProps) {
    const [isPanelOpen, setPanelOpen] = useState(false);
    const [clickedProfile, setClickedProfile] = useState<Profile | undefined>();

    const handleProfileClick = (profile: Profile) => {
        // 1. 유저 클릭 시 prevProfile랑 같은 경우 닫기
        if (clickedProfile == profile && isPanelOpen) {
            setPanelOpen(false);
            setClickedProfile(undefined);
            return;
        }

        setPanelOpen(true);
        setClickedProfile(profile);
    };

    return (
        <div className="border border-[var(--border)] rounded-md overflow-hidden h-full text-xs select-none">
            <div className="bg-[var(--background)] font-medium border-b border-[var(--border)] px-4 py-2">
                <div className="flex text-[var(--foreground)]/40">
                    <div className="flex-[1]">PROFILE</div>
                    <div className="flex-[1]">JOB</div>
                    <div className="flex-[1]">COUNTRY</div>
                    <div className="flex-[0.5]">LOCATION</div>
                    <div className="flex-[1]">EDU</div>
                    <div className="flex-[1]">COMPANY</div>
                    <div className="flex-[1]">LINK</div>
                </div>
            </div>
            <div className="relative overflow-scroll h-full flex flex-col gap-2 p-2 pb-10">
                {profiles?.map((profile) => (
                    <div
                        className="flex items-center border border-[var(--border)] p-2 rounded-md hover:opacity-80"
                        key={profile.id}
                        onClick={() => handleProfileClick(profile)}
                    >
                        <div className="flex-[1] flex gap-2 items-center">
                            <div>
                                <img
                                    className="w-[24px] h-[24px] rounded-full"
                                    src="/public/profile.png"
                                />
                            </div>
                            {profile.nickname}
                        </div>
                        <div className="flex-[1]">{profile.job}</div>
                        <div className="flex-[1]">
                            {profile.nationality}
                        </div>
                        <div className="flex-[0.5]">{profile.location}</div>
                        <div className="flex-[1]">{profile.education}</div>
                        <div className="flex-[1]">{profile.company}</div>
                        <div className="flex-[1]">
                            <a target="_blank" href={profile.links}>
                                <Globe
                                    className="stroke-[var(--primary)]"
                                    width={16}
                                    height={16}
                                />
                            </a>
                        </div>
                    </div>
                ))}
            </div>
            <SlidePanel
                isOpen={isPanelOpen}
                onClose={() => {
                    setPanelOpen(false);
                }}
                profile={clickedProfile}
            />
        </div>
    );
}
