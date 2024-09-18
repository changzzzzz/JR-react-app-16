import { useState } from "react";
import "./index.scss";

export default props => {

    const [isCommenting, setIsCommenting] = useState(false);
  
    // State to track if the comment has been submitted
    const [isSubmitted, setIsSubmitted] = useState(false);
    
    // State to hold the comment text
    const [comment, setComment] = useState('');

    const handleSubmitComment = () => {
        setIsSubmitted(true);
        setIsCommenting(false);
    };

    // Toggle comment input visibility
    const handleCommentClick = () => {
        setIsCommenting(true);
        setIsSubmitted(false);
    };


    const [enrollCount, setEnrollCount] = useState(0);

    const handleEnrollClick = () => {
        setEnrollCount(enrollCount + 1); // Increment the enroll count
    };

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


    // assignment 3
    const [isCompleted, setIsCompleted] = useState(false);

    const handleIsCompleted = () => {
        setIsCompleted(true); 
    };

    const[isFavorite,setIsFavorite] = useState(false);
    const handleIsFavorite = () => {
        setIsFavorite(!isFavorite);
    };


    return (
        <div class="card card-item" style={{width: "18rem"}}>
            <svg class="bd-placeholder-img card-img-top" width="100%" height="180" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Image cap" preserveAspectRatio="xMidYMid slice" focusable="false">
            <title>Placeholder</title>
            
            <defs>
                <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" style={{stopColor:"#ff7e5f", stopOpacity:1}} />
                <stop offset="100%" style={{stopColor:"#feb47b", stopOpacity:1}} />
                </linearGradient>
            </defs>

            <rect width="100%" height="100%" fill="url(#gradient1)"></rect>
            
            <text x="50%" y="50%" fill="#ffffff" text-anchor="middle" dominant-baseline="middle" dy=".3em">Image</text>
            </svg>

            <div class="card-body">
                {<h5 class="card-title">{props.title} {isFavorite ? "⭐" : ""}</h5>}
                <p class="card-text">Price:{props.price}</p>
                <p class="card-text">Language:{props.language}</p>
                <p class="card-text">Duration:{props.duration}</p>
                <p class="card-text">Location:{props.location}</p>
                <p class="card-text">Difficulty:{props.difficulty}</p>


                {/* assignment 2 */}
                {/* {props.difficulty === "Beginner" ?  <a href="#" class="btn btn-primary">Start Learning Now!</a>:
                <a href="#" class="btn btn-primary">Enroll Now</a>} */}


                {/* {props.difficulty === "Beginner" ?  <button onClick={handleEnrollClick} class="btn btn-primary">Start Learning Now!</button>:
                <button onClick={handleEnrollClick} class="btn btn-primary">Enroll Now</button>} */}

                {/* <button onClick={handleEnrollClick}>Enroll Now</button> */}
                
                {enrollCount > 0 && <p>Enrolled {enrollCount} times</p>}
                
                {/* assignment 3 */}
                {props.isCompleted ? <button onClick={handleIsCompleted}>重新学习课程</button> : 
                <button onClick={handleIsCompleted}>开始课程</button>  }

                {isFavorite ? (<button onClick={handleIsFavorite}>取消收藏</button>) : 
                (<button onClick={handleIsFavorite}>收藏</button> ) }
            
            
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

//                  <div>
//                     {isSubmitted ? (
//                     <p>评论已提交</p>
//                     ) : (
//                         <>
//                         {/* If the user is commenting, show the input field and submit button */}
//                         {isCommenting ? (
//                             <div>
//                             <input
//                                 type="text"
//                                 value={comment}
//                                 onChange={(e) => setComment(e.target.value)}
//                                 placeholder="输入你的评论"
//                             />
//                             <button onClick={handleSubmitComment} class="btn btn-secondary">提交评论</button>
//                             </div>
//                         ) : (
//                             // If not commenting, show the "发表评论" button
//                             <button onClick={handleCommentClick} class="btn btn-secondary">发表评论</button>
//                         )}
//                         </>
//                     )}
//                 </div>