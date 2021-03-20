import "./contact.css"

const Contact=()=>{
    const avatarUrl="https://randomuser.me/api/portraits/men/19.jpg";
    const name ="Öner";
    const online = true;

    return(
        <div className="Contact">
            <img className="avatar" src={avatarUrl} alt="image avatar"/>

            <div>
                <h4 className="name">{name} </h4>
                <p className="status">
                    <span className="status-online"></span>
                    <span className="status-text"> { online ? "Online":"Offline" } </span>
                </p>
            </div>

        </div>

    )
}
export default Contact
