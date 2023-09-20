import { Component } from "react";
import "./index.css";

class UserProfile extends Component {
  onClickCross = () => {
    const { userDetails, onDeleteProfile } = this.props;
    const { id } = userDetails;
    onDeleteProfile(id);
  };

  render() {
    const { userDetails } = this.props;
    const { name, role, imageUrl } = userDetails;
    return (
      <li className="user-card-container">
        <img src={imageUrl} alt={name} className="avatar" />
        <div className="user-details-container">
          <h1 className="user-name">{name}</h1>
          <p className="user-designation">{role}</p>
        </div>
        <button className="cross-button" onClick={this.onClickCross}>
          <img
            src="https://assets.ccbp.in/frontend/react-js/cross-img.png"
            alt="cross"
            className="cross"
          />
        </button>
      </li>
    );
  }
}

export default UserProfile;
