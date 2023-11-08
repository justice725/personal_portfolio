import JoinSection from "./depth/JoinSection";
import WorkExperience from "./depth/WorkExperience";
import '../css/portfolio.scss'

function PortfolioWrap() {
    return(
        <>
            <section className='relative flex flex-col max-w-[1280px] m-0 mx-auto gap-[3rem] pt-[7rem] px-[2rem]'>
            <JoinSection />
            <WorkExperience />
            </section>
        </>
    )
}

export default PortfolioWrap