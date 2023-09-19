import UserProfile from "./Components/UserProfile";
import "./App.css"

const userDetailsList = [
  {
    id: 1,
  imageUrl: "https://assets.ccbp.in/frontend/react-js/esther-howard-img.png",
  name: "Esther Howard",
  role: "Software Engineer"
},
{
  id:2,
  imageUrl: "https://assets.ccbp.in/frontend/react-js/floyd-miles-img.png",
  name: "Floyd Miles",
  role: "Software Engineer"
},
{
  id:3,
  imageUrl: "https://assets.ccbp.in/frontend/react-js/jacob-jones-img.png",
  name: "Jacob Jones",
  role: "Software Engineer"
},
{
  id:4,
  imageUrl: "https://assets.ccbp.in/frontend/react-js/devon-lane-img.png",
  name: "Devon Lane",
  role: "Software Engineer"
},
]


const App = ()=><div className="list-container">
  <h1 className="title">User Profile</h1>
    {
      userDetailsList.map((eachObject)=><UserProfile userDetails={eachObject} key={eachObject.id}/>)
    } 
</div>

export default App; 
