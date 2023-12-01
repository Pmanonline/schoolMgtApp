import React from "react";
import { Provider, useSelector } from "react-redux";
import { AvatarGenerator } from "random-avatar-generator";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { HomeComponet } from "./components/HomeCompnent";

import AppNavbar from "./components/AppNavbar";
import Navbar from "./components/Navbar";

/* Css */
import "./styles.css";

/* Redux store actions*/
import store from "./store/store";
import { getClasses } from "./store/actions/classActions";
import { getCourses } from "./store/actions/courseAction";
import { getStudents } from "./store/actions/studentActions";

/* Courses */
import AdminCourse from "./components/Courses/AdminCourse";
import Courses from "./components/Courses/Courses";
import UpdateCourse from "./components/Courses/UpdateCourse";
import { ViewCourse } from "./components/Views/ViewCourse";

/* Classes */
import AdminClass from "./components/Classes/AdminClass";
import UpdateClass from "./components/Classes/UpdateClass";
import Classes from "./components/Classes/Classes";
import ViewClass from "./components/Views/ViewClass";

/* Students */
import AdminStudent from "./components/student/AdminStudent";
import Students from "./components/student/Students";
import UpdateStudent from "./components/student/UpdateStudent";
import ViewStudent from "./components/Views/ViewStudent";

/* Avatar */
const generator = new AvatarGenerator();
const avatar = generator.generateRandomAvatar();
/* Get Datas */
store.dispatch(getStudents());
store.dispatch(getClasses());
store.dispatch(getCourses());

function App() {
  return (
    <Provider {...{ store }}>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/create-class" exact component={AdminClass} />
          <Route path="/create-student" exact component={AdminStudent} />
          <Route path="/create-course" exact component={AdminCourse} />
          <Route path="/students" exact component={Students} />
          <Route path="/classes" exact component={Classes} />
          <Route path="/class/update/:slug" exact component={UpdateClass} />
          <Route path="/about-class/:slug" exact component={ViewClass} />
          <Route path="/about-course/:slug" exact component={ViewCourse} />
          <Route path="/student/update/:slug" exact component={UpdateStudent} />
          <Route path="/student/:slug" exact component={ViewStudent} />
          <Route path="/courses" component={Courses} exact />
          <Route path="/course/update/:slug" exact component={UpdateCourse} />
          <Route component={HomeComponet} />
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
