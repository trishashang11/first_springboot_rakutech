import Container from "./container/Container"


const UserProfile = () =>{
	return(
		<Container>
		<h1>Your Profile</h1>
		<button onClick={() => {
			localStorage.setItem('rakuten_authenticated', '');
			window.location.pathname='/login';
		}}>Logout</button>
		</Container>
	)
}

export default UserProfile;