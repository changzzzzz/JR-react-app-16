import logo from "./logo.svg";
import "./App.scss";
import { useState } from "react";
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
          {/* 可以添加侧边栏的内容 */}
          <h1>课程列表</h1>
          <form
            class="d-flex"
            role="search"
            onSubmit={(e) => e.preventDefault()}
          >
            <input
              class="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
              value={searchTerm}
              onChange={handleSearchChange} // 监听输入变化
            ></input>

            <button class="btn btn-outline-success" type="submit">
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
            filteredCards.length > 0 ? (
              filteredCards.map((item) => (
                <CourseCard
                  key={item.title}
                  title={item.title}
                  price={item.price}
                  language={item.language}
                  duration={item.duration}
                  location={item.location}
                  recentAdded={item.recentAdded}
                  difficulty={item.difficulty}
                  isCompleted={item.isCompleted}
                />
              ))
            ) : (
              <p>没有找到匹配的课程</p>
            )
          }
        </div>
      </div>
    </div>
  );
}

export default App;
