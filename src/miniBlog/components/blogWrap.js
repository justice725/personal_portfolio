import BlogSection from "./BlogSection";
import Editor from "./Editor";
import 'suneditor/dist/css/suneditor.min.css'

function BlogWrap() {
    return(
        <>
            <section className='relative flex flex-col max-w-[1280px] m-0 mx-auto gap-[3rem] pt-[7rem] px-[2rem]'>
                <BlogSection />
                {/*<Editor/>*/}
            </section>
        </>
    )
}

export default BlogWrap;