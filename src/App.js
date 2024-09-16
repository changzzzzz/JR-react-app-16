import logo from './logo.svg';
import './App.scss';
import { useState } from "react";
import CourseCard from './component/course-card';

function App() {

  const [cardList,setCardList] = useState([

    {
        id:1,
        title:".Net", 
        price:1000, 
        language:"en", 
        duration:"3 month", 
        location:"Mel",
        recentAdded:false,
        difficulty:"Beginner", 
    },
    {
        id:2,
        title:"React", 
        price:1000, 
        language:"en", 
        duration:"3 month", 
        location:"Mel",
        recentAdded:true,
        difficulty:"Intermediate"
    },
    {
        id:3,
        title:"HTML", 
        price:1000, 
        language:"en", 
        duration:"3 month", 
        location:"Mel",
        recentAdded:false,
        difficulty: "Advanced"
    },        
    {
        id:4,
        title:"Linkedin", 
        price:1000, 
        language:"en", 
        duration:"3 month", 
        location:"Mel",
        recentAdded:true,
        difficulty:"Advanced"
    },
    
])


  return (
    <div className="App">
      <div className="card-container">
        {
          cardList.map(
            item => {
              return(
                <CourseCard title={item.title} 
                price={item.price} 
                language={item.language}
                duration={item.duration}
                location={item.location}
                recentAdded={item.recentAdded}
                difficulty={item.difficulty} ></CourseCard>
              )
            }
          )
          
        }
        
      </div>
      
    </div>
  );
}



export default App;
