import HeaderSection from "../header-section";
import './home.css';
import LeftSection from "../left-section";
import SkillList from "../skills";
import CertificationsList from "../certifications";
import QualificationList from "../qualifications";
import ToolsUsedList from "../tools-used";
import PersonalInfo from "../personal-info";

const Home = () => {
    return (
        <div className="home-layout">
            <div className="row">
                <div className="col-md-12">
                    <HeaderSection />
                </div>
                <div className="col-md-8">
                    <LeftSection />
                </div>

                <div className="col-md-4">
                    <SkillList />
                    <CertificationsList />
                    <QualificationList />
                    <ToolsUsedList />
                    <PersonalInfo />
                </div>
            </div>
        </div>
    );
}

export default Home;
