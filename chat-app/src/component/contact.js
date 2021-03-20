import "./contact.css"
import PropTypes from 'prop-types';

const Contact = (props) => {

    return (
        <div className="Contact">
            <img className="avatar" src={props.avatarUrl} alt="image avatar"/>

            <div>
                <h4 className="name">{props.name} </h4>
                <p className="status">
                    <span className={props.status ? "status-online" : "status-offline"}/>
                    <span className="status-text"> {props.online ? "Online" : "Offline"}</span>
                </p>
            </div>

        </div>

    )
}
Contact.propTypes = {
    name: PropTypes.string.isRequired,
};

export default Contact
