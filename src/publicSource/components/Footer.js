const Footer = () => {
    return(
        <>
            <section className='w-full bg-gray-300 mt-[3rem]'>
                <div className='flex flex-col tablet:flex-row justify-between items-center p-[2rem] py-[4rem]'>
                    <div>
                    <p className=' text-[#ffffff] text-[0.7rem] font-thin tabelt:text-left text-center mb-[1rem] tablet:mb-[0rem]'>
                        ⓒ COPYRIGHT by 박찬민, 2023. All rights reserved. <br/>
                        Published by React.Js
                    </p>
                    </div>
                    <div className='flex gap-[1rem]'>
                        <a href="https://blog.naver.com/justice725" className='text-[0.7rem] font-thin link' target="_blank" rel="noreferrer">
                            blog
                        </a>
                        <a href="https://github.com/justice725/personal_portfolio" className='text-[0.7rem] font-thin link' target="_blank" rel="noreferrer">
                            github
                        </a>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Footer
