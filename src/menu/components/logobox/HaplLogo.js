import {ReactComponent as HaplLogoImg } from './hapl_logo.svg';

const HaplLogo = () => {
    return(
        <>
            <HaplLogoImg width={120} height={120} className='logoPadding'/>
        </>
    )
}

export default HaplLogo;

// logo svg 설정, 초기 설정값은 svg inline으로 width와 height 값을 current로 설정했기 때문에 tag 안에 설정값을 넣어줘야 한다.
