import JoinSection from "./depth/JoinSection";
import WorkExperience from "./depth/WorkExperience";
import '../css/portfolio.scss'
import PersonalProject from "./depth/PersonalProject";
import Education from "./depth/Education";
import Certificates from "./depth/Certificates";

function PortfolioWrap() {
    return (
        <>
            <section className='relative flex flex-col max-w-[1280px] m-0 mx-auto gap-[3rem] pt-[7rem] px-[2rem]'>
                <JoinSection/>
                <WorkExperience/>
                <PersonalProject/>
                <Education/>
                <Certificates/>
            </section>
        </>
    )
}

export default PortfolioWrap