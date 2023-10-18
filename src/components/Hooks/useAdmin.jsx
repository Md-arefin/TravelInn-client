import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AuthContext } from '../../provider/AuthProvider';

const useAdmin = () => {

    const {user, loading} = useContext(AuthContext);
    const {data: isAdmin, isLoading: isAdminLoading} = useQuery({
        queryKey: ['isAdmin', user?.email],
        enabled: !loading,
        queryFn: async () =>{
            const res = await fetch (`http://localhost:5000/users/admin/${user?.email}`);
            console.log(res);
            return res.json();
        }

    });

    return [isAdmin, isAdminLoading]
};

export default useAdmin;