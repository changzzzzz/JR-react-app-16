import logo from "./logo.svg";
import "./App.scss";
import { useEffect, useState } from "react";
import CourseCard from "./component/course-card";

function App() {
  const [cardList, setCardList] = useState([
    {
      id: 1,
      title: ".Net",
      price: 1000,
      language: "en",
      duration: "3 Hours",
      location: "Mel",
      recentAdded: false,
      difficulty: "Beginner",
      isCompleted: true,
    },
    {
      id: 2,
      title: "React",
      price: 1000,
      language: "en",
      duration: "2 Hours",
      location: "Mel",
      recentAdded: true,
      difficulty: "Intermediate",
      isCompleted: false,
    },
    {
      id: 3,
      title: "HTML",
      price: 1000,
      language: "en",
      duration: "3 Hours",
      location: "Mel",
      recentAdded: false,
      difficulty: "Advanced",
      isCompleted: false,
    },
    {
      id: 4,
      title: "Linkedin",
      price: 1000,
      language: "en",
      duration: "10 Hours",
      location: "Mel",
      recentAdded: true,
      difficulty: "Advanced",
      isCompleted: true,
    },
  ]);

  const [professors, setProfessors] = useState(null);
  const API_URL =
    "https://my-json-server.typicode.com/JustinHu8/courseCardMock/lecturers";

  useEffect(() => {
    fetchProfessors(); // 在组件挂载时调用
  }, []);

  // 使用 fetch() 和 Promise
  const fetchProfessors = () => {
    fetch(API_URL) // 发起 API 请求
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json(); // 返回解析后的 JSON 数据
      })
      .then((data) => {
        setProfessors(data); // 将数据存储在 state 中
      })
      .catch((error) => {
        console.error(
          "There has been a problem with your fetch operation:",
          error
        );
      });
  };

  //  async await
  // useEffect(() => {
  //   async function fetchProfessors() {
  //     try {
  //       const response = await fetch(API_URL);
  //       const data = await response.json();
  //       setCourse(data); // 将获取到的数据保存到 course 状态中
  //     } catch (error) {
  //       console.error("Error fetching data:", error);
  //     }
  //   }

  //   fetchProfessors(); // 调用 fetchCourse 函数
  // }, []); // 仅在组件挂载时调用一次

  const [searchTerm, setSearchTerm] = useState("");
  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  // 根据搜索关键字过滤课程列表
  const filteredCards = cardList.filter(
    (item) => item.title.toLowerCase().includes(searchTerm.toLowerCase()) // 忽略大小写
  );

  return (
    <div className="App">
      <div className="main-container">
        <div className="sidebar">
          <form
            className="d-flex"
            role="search"
            onSubmit={(e) => e.preventDefault()}
          >
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
              value={searchTerm}
              onChange={handleSearchChange} // 监听输入变化
            ></input>

            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
        </div>

        <div className="card-container">
          {
            // cardList.map(
            //   item => {
            //     return(
            //       <CourseCard title={item.title}
            //       price={item.price}
            //       language={item.language}
            //       duration={item.duration}
            //       location={item.location}
            //       recentAdded={item.recentAdded}
            //       difficulty={item.difficulty}
            //       isCompleted={item.isCompleted}></CourseCard>
            //     )
            //   }
            // )

            // assignment 3
            // filteredCards.length > 0 ? (
            //   filteredCards.map((item) => (
            //     <CourseCard
            //       key={item.title}
            //       title={item.title}
            //       price={item.price}
            //       language={item.language}
            //       duration={item.duration}
            //       location={item.location}
            //       recentAdded={item.recentAdded}
            //       difficulty={item.difficulty}
            //       isCompleted={item.isCompleted}
            //     />
            //   ))
            // ) : (
            //   <p>没有找到匹配的课程</p>
            // )

            // assignment 4
            professors ? (
              professors.map((course) => (
                <div key={course.id}>
                  <h2>{course.name}</h2>
                  <p>{course.title}</p>
                  <p>{course.biography}</p>
                  <h3>Courses Taught:</h3>
                  <ul>
                    {course.coursesTaught.map((courses) => (
                      <li key={courses.courseId}>
                        {courses.courseTitle} - {courses.lessons} lessons
                      </li>
                    ))}
                  </ul>
                  <p>Years of Experience: {course.yearsOfExperience}</p>
                </div>
              ))
            ) : (
              <p>Loading...</p>
            )
          }
        </div>
      </div>
    </div>
  );
}

export default App;
