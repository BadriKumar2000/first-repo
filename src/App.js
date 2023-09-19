import UserProfile from "./Components/UserProfile";
import "./App.css"

const userDetailsList = [
  {
  imageUrl: "https://assets.ccbp.in/frontend/react-js/esther-howard-img.png",
  name: "Esther Howard",
  role: "Software Engineer"
},
{
  imageUrl: "https://assets.ccbp.in/frontend/react-js/floyd-miles-img.png",
  name: "Floyd Miles",
  role: "Software Engineer"
},
{
  imageUrl: "https://assets.ccbp.in/frontend/react-js/jacob-jones-img.png",
  name: "Jacob Jones",
  role: "Software Engineer"
},
{
  imageUrl: "https://assets.ccbp.in/frontend/react-js/devon-lane-img.png",
  name: "Devon Lane",
  role: "Software Engineer"
},
]


const App = ()=><div className="list-container">
  <h1 className="title">User Profile</h1>
  <ul> 
    {
      userDetailsList.map((eachObject)=><UserProfile userDetails={eachObject}/>)
    }
  </ul>
  
</div>

export default App; 
