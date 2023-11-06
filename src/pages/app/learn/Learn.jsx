import React from "react";
import style from "./Learn.module.css";
import Chapter from "../chapter/Chapter";
import coursesData from "../../../data/courses.json";
// Task4: Import all the required elements from the react-router-dom
import { Outlet, useParams } from "react-router-dom";
import { Link } from "react-router-dom";

function Learn() {
  //Third Task: get course id and match it with the data
  const { courseId,chapterId } = useParams();

  const course = coursesData.find((course) => course.id === courseId);
  const chapters = course.chapters.find((item) => item.chapter === chapterId);
  return (
    <div className={style.courses_container}>
      <div className={style.top_head}>
        {/* Task4: Create Link to go back to the Courses page */}
        <Link to={`/courses/${course.id}`}>
          <h2 className={style.back}>{"<<"}</h2>
        </Link>
        {/* Task4: Title of the Course */}
        <h1 className={style.heading}>{course.title}</h1>
      </div>
      <div className={style.chapter_box}>
        <div className={style.chapters}>
          <h1>Chapters</h1>
          <hr />
          <ul>
            {
              /*Task4: List of Chapters must be rendered here  */
              course.chapters.map((chap, index) => {
                return <div key={index} className={style.chapterId}>
                  
                  <Link to={`./chapter/${chap.chapter}`}>
                  {chap.title}
                  </Link>
                </div>
              })
            }
          </ul>
        </div>

        <div className={style.courses}>
            <Outlet context={course}/>
        </div>
      </div>
    </div>
  );
}

export default Learn;
