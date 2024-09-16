import { useState } from "react";
import "./index.scss";

export default props => {

    // const [cardList,setCardList] = useState([

    //     {
    //         id:1,
    //         title:".Net", 
    //         price:1000, 
    //         language:"en", 
    //         duration:"3 month", 
    //         location:"Mel",
    //         recentAdded:false,
    //         difficulty:1
    //     },
    //     {
    //         id:2,
    //         title:"React", 
    //         price:1000, 
    //         language:"en", 
    //         duration:"3 month", 
    //         location:"Mel",
    //         recentAdded:true,
    //         difficulty:2
    //     },
    //     {
    //         id:3,
    //         title:"HTML", 
    //         price:1000, 
    //         language:"en", 
    //         duration:"3 month", 
    //         location:"Mel",
    //         recentAdded:false,
    //         difficulty:3
    //     },        
    //     {
    //         id:4,
    //         title:"Linkedin", 
    //         price:1000, 
    //         language:"en", 
    //         duration:"3 month", 
    //         location:"Mel",
    //         recentAdded:true,
    //         difficulty:4
    //     },
        
    // ])



    return (
        <div class="card card-item" style={{width: "18rem"}}>
            <svg class="bd-placeholder-img card-img-top" width="100%" height="180" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Image cap" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#868e96"></rect><text x="50%" y="50%" fill="#dee2e6" dy=".3em">Image cap</text></svg>
            <div class="card-body">
                <h5 class="card-title">{props.title}</h5>
                <p class="card-text">Price:{props.price}</p>
                <p class="card-text">Language:{props.language}</p>
                <p class="card-text">Duration:{props.duration}</p>
                <p class="card-text">Location:{props.location}</p>
                <p class="card-text">Difficulty:{props.difficulty}</p>
                {props.difficulty === "Beginner" ?  <a href="#" class="btn btn-primary">Start Learning Now!</a>:
                <a href="#" class="btn btn-primary">Enroll Now</a>}
               
            </div>
        </div>
    )
                    
                


    // return (
    //     <div className="card-container">
    //         {
    //             cardList.map(   
    //                 item => {
    //                     return (
    //                         <div class="card card-item" style={{width: "18rem"}}>
    //                             <svg class="bd-placeholder-img card-img-top" width="100%" height="180" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Image cap" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#868e96"></rect><text x="50%" y="50%" fill="#dee2e6" dy=".3em">Image cap</text></svg>
    //                             <div class="card-body">
    //                                 <h5 class="card-title">{item.title}</h5>
    //                                 <p class="card-text">price：{item.price}</p>
    //                                 <p class="card-text">language：{item.language}</p>
    //                                 <p class="card-text">duration：{item.duration}</p>
    //                                 <p class="card-text">location：{item.location}</p>
    //                                 {item.recentAdded?<a href="#" class="btn btn-primary">New</a>:<></>}
                                    
    //                             </div>
    //                         </div>
    //                     )
    //                 }
    //             )
    //         }

    //     </div>
    // )
}