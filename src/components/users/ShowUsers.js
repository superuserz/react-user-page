import React from 'react'

function ShowUsers(props) {
    return (
        <div>
            {
                props.users.map(user => {
                    return <div key={user.id} className="add-user-container">
                        <label>Name : {user.name} ({user.age}) Years Old Contact : {user.contact} , email : {user.email}</label>
                    </div>
                })
            }
        </div>

    )
}

export default ShowUsers
