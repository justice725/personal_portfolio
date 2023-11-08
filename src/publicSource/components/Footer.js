const Footer = () => {
    return(
        <>
            <section className='w-full bg-gray-300 mt-[3rem]'>
                <div className='flex flex-col tablet:flex-row justify-between items-center p-[2rem] py-[4rem]'>
                    <div>
                    <p className=' text-[#ffffff] text-[0.7rem] font-thin text-left'>
                        ⓒ COPYRIGHT by 박찬민, 2023. All rights reserved. <br/>
                        Published by React.Js
                    </p>
                    </div>
                    <div>
                        <a href="#" className='text-[#ffffff] text-[0.7rem] font-thin'>
                            blog
                        </a>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Footer