import {AnimatePresence, motion} from "framer-motion";
import {ReactComponent as LogoImage} from '../../menu/components/logobox/logoType.svg';


const container = {
    hidden: {},
    show: {
        transition: {
            staggerChildren: 0.1,
            delayChildren: 1.5,
        },
    },
}

const item = {
    hidden: {
        y: "100%",
    },
    show: {
        y: "0%",
    },
    transition:{type: 'spring'}
}

const Letter = ({letter}) => {
    return (
        <motion.span className='inline-block' variants={item}  >
            {letter}
        </motion.span>
    )
}
const Loading = () => {

    return (
        <>
            <AnimatePresence>
                <section className='w-screen h-screen flex justify-center items-center relative gap-[10px]'
                                key={"1"}>
                    <motion.div className='relative w-[30px] h-[30px]'>
                        <motion.div transition={{type: 'spring', duration:2, delay:0.1}}
                                    style={{
                                        y:"0",
                                        x:"0",
                                    }}
                                    animate={{
                                        scale:[1, 1.5, 2, 1.5, 1],
                                        rotateZ:[0, -90, -180, -270, -360],
                                        originY:[0, 50, 100, 50, 0],
                                        originX:[0, 50, 0, -50, 0],
                                    }}
                                    className='absolute'
                        >
                            <LogoImage width={30} height={30}/>
                        </motion.div>
                    </motion.div>
                    <div>
                        <div>
                            <motion.h6
                                variants={container}
                                initial='hidden'
                                animate='show'
                                className='overflow-hidden'
                            >
                                {"Min's놀이터".split('').map((letter, idx) => (
                                    <Letter key={idx} letter={letter}/>
                                ))}
                            </motion.h6>
                        </div>
                    </div>
                </section>
            </AnimatePresence>
        </>
    )
}

export default Loading