import React, { useEffect, useState } from 'react';
import withAuth from '../hoc/withAuth';
import axios from 'axios';

const Profile = () => {
  const [user, setUser] = useState(null);

  /*
  useEffect(()=>{

    (async ()=>{})(); // IIFE

  }, [])
  */

  useEffect(() => {
    (async () => {
      const token = localStorage.getItem('token');
      const config = {
        headers: {
          Authorization: 'Bearer ' + token,
        },
      };

      try {
        const { data } = await axios.get(
          'http://54.206.118.54:8080/customers',
          config
        );
        setUser(data);
      } catch (err) {
        console.log(err);
      }
    })();
  }, []); // IIFE

  if (user === null) return null;

  return (
    <>
      <table className='table table-hover'>
        <tbody>
          <tr>
            <td>Name</td>
            <td>{user.name}</td>
          </tr>
          <tr>
            <td>Email address</td>
            <td>{user.email}</td>
          </tr>
          <tr>
            <td>Phone</td>
            <td>{user.phone}</td>
          </tr>
          <tr>
            <td>House#</td>
            <td>{user.houseNo}</td>
          </tr>
          <tr>
            <td>Street</td>
            <td>{user.street}</td>
          </tr>
          <tr>
            <td>Area</td>
            <td>{user.area}</td>
          </tr>
          <tr>
            <td>City</td>
            <td>{user.city}</td>
          </tr>
          <tr>
            <td>State</td>
            <td>{user.state}</td>
          </tr>
          <tr>
            <td>Pincode</td>
            <td>{user.pincode}</td>
          </tr>
          <tr>
            <td>Country</td>
            <td>{user.country}</td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

// export default Profile;
export default withAuth(Profile);
