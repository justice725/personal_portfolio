import {ReactComponent as RmsLogoImg } from './rms_logo.svg';

const RmsLogo = () => {
    return(
        <>
            <RmsLogoImg width={30} height={30} className='logoPadding'/>
        </>
    )
}

export default RmsLogo;

// logo svg 설정, 초기 설정값은 svg inline으로 width와 height 값을 current로 설정했기 때문에 tag 안에 설정값을 넣어줘야 한다.
