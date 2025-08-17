import { useAppSelector } from "./hooks";

const useAuth = () => {
    const { userInfo } = useAppSelector((state) => state.auth);
    return { userInfo };
}

export default useAuth;