import React from 'react';
import { userData } from './userData';
import "./App.css"

function PropsExample3() {
    return (
        <div>
          {userData.map((userObj) => {
            const {id,name,username,email,address,geo,phone,website,company,} = userObj;
            return (
              <UserDetails
                id={id}
                name={name}
                username={username}
                email={email}
                address={address}
                street={address.street}
                suite={address.suite}
                city={address.city}
                zipcode={address.zipcode}
                geo={geo}
                lat={address.geo.lat}
                lng={address.geo.lng}
                phone={phone}
                website={website}
                company={company}
                Name={company.name}
                catchPhrase={company.catchPhrase}
                bs={company.bs}
              />
            );
          })}
        </div>
      );
}



const UserDetails = ({id,name,username,email,address,geo,phone,website,company,street,suite,city,zipcode,lat,lng,Name,catchPhrase,bs,}) => {
    return (
      <div className="table-container">
        <table border={1}>
          <thead>
            <tr>
              <th>ID</th>
              <th>name</th>
              <th>username</th>
              <th>gmail</th>
              <th>
                address
                <tr>
                  <td>street</td>
                  <td>suit</td>
                  <td>city</td>
                  <td>zipcode</td>
                </tr>
              </th>
              <th>
                geo
                <tr>
                  <th>lat</th>
                  <th>lng</th>
                </tr>
              </th>
              <th>phone</th>
              <th>website</th>
              <th>
                company
                <tr>
                  <th>name</th>
                  <th>catchPhrase</th>
                  <th>bs</th>
                </tr>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{id}</td>
              <td>{name}</td>
              <td>{username}</td>
              <td>{email}</td>
              <td>
                <tr>
                  <td>{street}</td>
                  <td>{suite}</td>
                  <td>{city}</td>
                  <td>{zipcode}</td>
                </tr>
              </td>
              <td>
                <tr>
                  <td>{lat}</td>
                  <td>{lng}</td>
                </tr>
              </td>
              <td>{phone}</td>
              <td>{website}</td>
              <td>
                <tr>
                  <td>{Name}</td>
                  <td>{catchPhrase}</td>
                  <td>{bs}</td>
                </tr>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  };


  export default PropsExample3

  
