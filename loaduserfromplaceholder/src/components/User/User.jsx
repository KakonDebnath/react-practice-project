import React from 'react';
const divStyle = {
    margin: "10px",
    backgroundColor: "tomato",
    color: "#ffffff",
    padding: "20px",
    borderRadius: "10px",
    fontSize: "20px",
}
const User = (props) => {
    console.log(props.user);
    const { id, name, username, email, phone, website, address } = props.user;
    return (
        <div style={divStyle}>
            <p>Name: {name}</p>
            <p>User Id: {id}</p>
            <p>User Name: {username}</p>
            <p>User Email: {email}</p>
            <p>User Phone: {phone}</p>
            <p>User Website: {website}</p>
        </div>
    );
};

export default User;