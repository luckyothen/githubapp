import { Switch, Route, BrowserRouter } from 'react-router-dom';
import cssClass from "./dashboard.module.scss";
import Nav from "../../components/nav/Nav";
import Header from "../../components/header/Header";
import Overview from "../../components/overview/Overview";
import UserRepo from "../../components/userrepo/UserRepo";
import StarredRepo from "../../components/starredrepo/StarredRepo";
import Followers from "../../components/followers/Followers";
import Following from "../../components/following/Following";
import TopMenu from "../../components/topmenu/TopMenu";
import SideBar from "../../components/sidebar/SideBar";


function Dashboard() {
  return (
    <div className={cssClass.dashboard}>
      <BrowserRouter>
        <Nav />
        <SideBar />
        <TopMenu />
        <Header />
        <Overview />
        <Switch>
          <Route exact path='/' component={UserRepo} />
          <Route exact path='/my-repo' component={UserRepo} />
          <Route exact path='/starred-repo' component={StarredRepo} />
          <Route exact path='/followers' component={Followers} />
          <Route exact path='/following' component={Following} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default Dashboard;
