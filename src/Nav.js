import { Routes, Route } from "react-router-dom";
import HomePage from './HomePage'
import Login from "./Login";
import PersonalLoan from './PersonalLoan'
import HomeLoan from './HomeLoan'
import BusinessLoan from './BusinesssLoan'
import BasicDetails from './BasicDetails'
import ApplicationMaker from './ApplicationMaker'
import MakerInbox from "./MakerInbox";
import ApplicationStatus from "./ApplicationStatus";
import MakerLogin from "./MakerLogin";
import CheckerLogin from "./CheckerLogin";
import CheckerInbox from "./CheckerInbox";
import ApplicationChecker from "./ApplicationChecker";
import AboutUs from "./AboutUs"

export default function Nav(props) {
    return (
        <div>
            <Routes>
                <Route path="/" exact element={<Login setLoggedin={props.setLoggedin}></Login>}></Route>
                <Route path="/personalloan" element={<PersonalLoan></PersonalLoan>}></Route>
                <Route path="/home" element={<HomePage></HomePage>}></Route>
                <Route path="/businessloan" element={<BusinessLoan></BusinessLoan>}></Route>
                <Route path="/homeloan" element={<HomeLoan></HomeLoan>}></Route>
                <Route path="/basicdetails" element={<BasicDetails></BasicDetails>}></Route>
                <Route path="/application/:id" element={<ApplicationMaker></ApplicationMaker>}></Route>
                <Route path='/makerinbox' element={<MakerInbox></MakerInbox>}></Route>
                <Route path="/status" element={<ApplicationStatus></ApplicationStatus>}></Route>
                <Route path="/makerlogin" element={<MakerLogin setMakerLoggedin={props.setMakerLoggedin}></MakerLogin>}></Route>
                <Route path="/checkerlogin" element={<CheckerLogin setCheckerLoggedin={props.setCheckerLoggedin}></CheckerLogin>}></Route>
                <Route path="/checkerinbox" element={<CheckerInbox></CheckerInbox>}></Route>
                <Route path="/checkerapplication/:id" element={<ApplicationChecker></ApplicationChecker>}></Route>
                <Route path="/aboutus" element={<AboutUs></AboutUs>}></Route>
            </Routes>
        </div>
    )
}