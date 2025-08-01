import { useEffect, useState } from "react";
import type { Profile } from "../types/Profile";

export default function useFetchProfiles() {
    const [isLoading, setLoading] = useState(false);
    const [profiles, setProfiles] = useState<Profile[]>();
    useEffect(() => {
        setLoading(true);

            fetch("http://localhost:8080/profiles")
                .then((res) => {
                    if (!res.ok) {
                        throw new Error("Failed Fetch");
                    }

                    return res.json();
                })
                .then((data: Profile[]) => {
                    setProfiles(data);
                })
                .catch((e: Error) => {
                    console.log(e.message);
                    
                }).finally(() => {
                    setLoading(false);
                })


        const timer = setTimeout(() => {
            setLoading(false);
        }, 3000);
        return () => clearTimeout(timer);
    }, []);

    return {
        profiles,
        isLoading,
    };
}
