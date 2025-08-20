import instance from "@/features/instance";
import type { UserInfo } from "@/types/user";

export const getUserByEmail = async (email: string): Promise<UserInfo> => {
    try {
        const data = instance.get(`/users/${email}`)
            .then(res => res.data);
        return data;
    } catch (e) {
        console.log(e);
        throw e;
    }
    
}