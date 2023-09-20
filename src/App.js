import { Component } from "react";
import UserProfile from "./Components/UserProfile";
import "./App.css";

const userDetailsList = [
  {
    id: 1,
    imageUrl: "https://assets.ccbp.in/frontend/react-js/esther-howard-img.png",
    name: "Esther Howard",
    role: "Software Engineer",
  },
  {
    id: 2,
    imageUrl: "https://assets.ccbp.in/frontend/react-js/floyd-miles-img.png",
    name: "Floyd Miles",
    role: "Software Engineer",
  },
  {
    id: 3,
    imageUrl: "https://assets.ccbp.in/frontend/react-js/jacob-jones-img.png",
    name: "Jacob Jones",
    role: "Software Engineer",
  },
  {
    id: 4,
    imageUrl: "https://assets.ccbp.in/frontend/react-js/devon-lane-img.png",
    name: "Devon Lane",
    role: "Software Engineer",
  },
];

class App extends Component {
  state = {
    searchInput: "",
    usersList: userDetailsList,
  };

  onChangeSearchInput = (event) => {
    this.setState({ searchInput: event.target.value });
  };

  onDeleteProfile = (id) => {
    console.log(id);
    const { usersList } = this.state;
    const filteredList = usersList.filter((eachItem) => eachItem.id !== id);
    console.log(filteredList);
    this.setState({ usersList: filteredList });
  };

  render() {
    const { searchInput, usersList } = this.state;
    const filteredUserList = usersList.filter((eachObject) => {
      const userName = eachObject.name.toLowerCase();
      const input = searchInput.toLowerCase();
      return userName.includes(input);
    });
    return (
      <div className="list-container">
        <h1 className="title">User Profile</h1>
        <input
          type="search"
          className="search-bar"
          onChange={this.onChangeSearchInput}
        />
        {filteredUserList.map((eachObject) => (
          <UserProfile
            userDetails={eachObject}
            key={eachObject.id}
            onDeleteProfile={this.onDeleteProfile}
          />
        ))}
      </div>
    );
  }
}

export default App;
