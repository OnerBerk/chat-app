import './App.css';
import "./component/contact"
import Contact from "./component/contact";

function App() {
    return (
        <div className="App">
            <Contact
                avatarUrl="https://randomuser.me/api/portraits/men/19.jpg"
                name="Öner"
                online="true"
                status
            />
            <Contact
                avatarUrl="https://randomuser.me/api/portraits/women/12.jpg"
                name="Öner"
            />
            <Contact
                avatarUrl="https://randomuser.me/api/portraits/men/85.jpg"
                name="Öner"
                online="true"
                status
            />
        </div>
    );
}

export default App;
