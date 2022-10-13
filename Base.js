import './Base.css';
import logo from "./Images/logo.png";
function Base() {
    return (
        <div>
            <header className="bp">
                <ui className="li-in">
                    <li> <img src={logo} className="App-logo" alt="logo" /> </li>
                </ui>
            </header>
            <form>
                <button>Create One!</button>
            </form>
        </div>
       
    );
    
}
export default Base;