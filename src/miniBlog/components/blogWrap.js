import BlogSection from "./BlogSection";

function BlogWrap() {
    return(
        <>
            <section className='relative flex flex-col max-w-[1280px] m-0 mx-auto gap-[3rem] pt-[7rem] px-[2rem]'>
                <BlogSection />
            </section>
        </>
    )
}

export default BlogWrap;