import React, { Component } from 'react'
import UserItem from './UserItem'

class Users extends Component {
    state = {
        users:[
            {
                id:'id1',
                login:'Jun',
                avatar_url:'https://avatars0.githubusercontent.com/u/1?v=',
                html_url:'https://github.com/mojombo'
            },
            {
                id:'id2',
                login:'Jun',
                avatar_url:'https://avatars0.githubusercontent.com/u/1?v=',
                html_url:'https://github.com/mojombo'
            },
            {
                id:'id3',
                login:'Jun',
                avatar_url:'https://avatars0.githubusercontent.com/u/1?v=',
                html_url:'https://github.com/mojombo'
            }
        ]
    }
    render() {
        return (
            <div style={userStyle}>
                {this.state.users.map(user=>(
                    <UserItem key={user.id} user={user}/>
                ))}
                
            </div>
        )
    }
}

export default Users
