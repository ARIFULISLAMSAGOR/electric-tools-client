import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import ProfileRow from './ProfileRow';

const AllUsers = () => {
    const { data: users, isLoading, refetch } = useQuery('users', () => fetch('https://dry-thicket-30903.herokuapp.com/user', {

        method: 'GET',
        headers: {
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()));
    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div>
            <h2>My Profile:{users.length}</h2>
            <div class="overflow-x-auto">
                <table class="table w-full">

                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Job</th>
                            <th>Favorite Color</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            users.map(user => <ProfileRow
                                key={user._id}
                                user={user}
                                refetch={refetch}
                            ></ProfileRow>)
                        }


                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllUsers;