import React, {Component} from 'react';
import { AuthContext } from '../contexts/AuthContext';
import {ThemeContext} from '../contexts/ThemeContext'; 
class Navbar extends Component {
    //const value = useContext(ThemeContext);
    //static contextType = ThemeContext;
    render(){
      //  console.log(this.context);
        return(
            <AuthContext.Consumer>{(auuthContext) =>(
                <ThemeContext.Consumer>{(themeContext) => {
                    const {isAuthenticated, toggleAuth} =auuthContext;  
                    const {isLight,light, dark} =themeContext;
                    const theme = isLight? light:dark;
                    return(
                        <nav style={{background: theme.ui, color: theme.syntax}}>
                        <h1>Context App</h1>
                        <div onClick={toggleAuth}>
                            {isAuthenticated ? 'Logout in': 'Log out'}
                        </div>
                        <ul>
                            <li>Home</li>
                            <li>About</li>
                            <li>Contact</li>
                            
        
                            
                        </ul>
                    </nav>
                    )
                }}</ThemeContext.Consumer>

            )}
            
            </AuthContext.Consumer>
        );
    }
}

export default Navbar;