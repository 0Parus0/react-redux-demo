import {useEffect} from 'react'
import { connect } from 'react-redux'
import { fetchUsers } from '../store/actions/userActions'

function UserContainer({userData, fetchUsers}) {
    useEffect(() => {
        fetchUsers() ;
    }, [])
  return userData.loading ? (
    <h2>Loading...</h2>) : userData.error ? (<h2>userData.error</h2>) : (
    <div>
        <h2>User List</h2>
        <div>
            {userData && userData.users && userData.users.map( user => <p key={user.id}> {user.name} </p>)}
        </div>
    </div>
  )
}

const mapStateToProps = (state, ownProps) => {
    return {
        userData: state.users
    }
};

const mapDispatchToProps = (dispatch, ownProps) => {
    console.log("fetchUsers has been re rendered")
    return {
        fetchUsers: () => dispatch(fetchUsers())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserContainer);