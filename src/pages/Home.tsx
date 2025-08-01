import useFetchUsers from "../hooks/useFetchProfiles";
import { ProfileTable } from "../components/ui/ProfileTable";
import Loading from "../components/common/Loading";

export default function Home() {
    const { isLoading: userLoading, profiles } = useFetchUsers();

    return (
        <div className="h-full overflow-scroll">
            {userLoading && <Loading />}
            <ProfileTable profiles={profiles!} />
        </div>
    );
}
