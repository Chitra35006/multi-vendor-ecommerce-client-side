import { useQuery } from '@tanstack/react-query';
import React from 'react';

const B2cBuyer = () => {
    const { data: users = []} = useQuery({
        queryKey: ["users"],
        queryFn: async () => {
          const res = await fetch("http://localhost:5000/users/b2cBuyer");
          const data = await res.json();
          return data;
        },
      });
    return (
        <div>
        <h2 className="text-3xl mt-5 mb-5">B2C Buyer</h2>
        <div className="overflow-x-auto">
          <table className="table w-full">
            <thead>
              <tr>
                <th></th>
                <th>Name</th>
                <th>Email</th>
              </tr>
            </thead>
            <tbody>
             {
              users.map((user,i)=> <tr key={user._id}>
                  <th>{i+1}</th>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                </tr>)
             }
            </tbody>
          </table>
        </div>
      </div>
    );
};

export default B2cBuyer;