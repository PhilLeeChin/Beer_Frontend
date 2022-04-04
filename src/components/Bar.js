import React from 'react';
import '../App.css';
// import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { logout } from '../redux/actionBrewer';

function Bar({logout, username}){
    const history = useHistory();
    // const [name, setName] = useState('')

    // const storeBeer = (e) => {
    //     e.preventDefault();
    //     const newBeer = {name}
    //     addBeer(newBeer)
    //     newBeer("")
    // }

    const handleHomeButton = () => {
        history.push("/beers")
    }

    const handleAccountButton = () => {
        history.push('/account')
    }

    const handleLogout = () => {
        logout(history.push("/login"))
    }

    const logInRender = () => <nav>
        <img src="https://img.icons8.com/external-soft-fill-juicy-fish/60/000000/external-pub-buildings-soft-fill-soft-fill-juicy-fish.png" alt="Home" onClick={handleHomeButton}/>
        <img src="https://img.icons8.com/external-itim2101-lineal-color-itim2101/64/000000/external-bartender-male-occupation-avatar-itim2101-lineal-color-itim2101.png" alt="Account" onClick={handleAccountButton} />
        <img src="https://img.icons8.com/stickers/50/000000/door-opened.png" alt="Logout" onClick={handleLogout}/>
    </nav>

    const logOutRender = () => <nav>Please Login or Register to build your bar!</nav>

    return username ? logInRender() : logOutRender()
}

const mapStateToProps = (state) => ({username: state.user.username})

export default connect(mapStateToProps, {logout})(Bar)