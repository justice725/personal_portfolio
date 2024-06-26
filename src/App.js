//recoil root
import React, {useEffect, useRef, useState} from "react";
import {
    useRecoilState
} from 'recoil';
import {Routes, Route, Link, useSearchParams, useParams, useLocation} from "react-router-dom";
import ReactGA from 'react-ga4';

// css
import './publicSource/css/public.scss';
import './theme/css/darkmode.scss';
// import '../index.css';
// css

// theme
import {ThemeProvider} from 'styled-components';
import GlobalStyle from './theme/atoms/theme';
import {darkTheme, lightTheme, themesAtom} from './theme/atoms/themeAtoms';
// theme

// header
import GlobalHeader from './menu/components/header';
import navLinks from "./menu/components/navLinks";
import Footer from "./publicSource/components/Footer";
import RouteChangeTracker from "./RouteChangeTracker";
import {PageLoadAtom} from "./portfolio/atoms/pageLoading";
import Loading from "./portfolio/components/Loading";

// header

function App() {
    RouteChangeTracker()

    /*const gaTrakingId = process.env.REACT_APP_GA_TRACKING_ID // 환경변수에 저장된 추적 ID 가져오기
    ReactGA.initialize(gaTrakingId, {debug:true}) // react-ga 초기화 및 debug 사용
    ReactGA.pageview(window.location.pathname) // 추적하려는 페이지 설정*/


    const [theme, setTheme] = useRecoilState(themesAtom);
    const currentLoaction = useLocation()
    const [isPageLoaded, setIsPageLoaded] = useRecoilState(PageLoadAtom);

    if (theme) {
        document.documentElement.setAttribute('data-theme', theme);
    } // 테마 변경

    const headerRef = useRef(null)
    const [headerHeight, setHeaderHeight] = useState(null)

    useEffect(() => {
        if (headerRef.current) {
            const heightCurrent = headerRef.current.clientHeight;
            setHeaderHeight(heightCurrent);
        }
    }, [GlobalHeader]); // 헤더 크기에 따라서 컨텐츠 margin-top 값 조절

    useEffect(() => {
        if(!isPageLoaded) {
            setTimeout(()=> {
                setIsPageLoaded(true)
            }, 3000)
        }
    }, [isPageLoaded]);

    return (
        <>
            <ThemeProvider theme={theme == 'light' ? lightTheme : darkTheme}>
                <GlobalStyle key={`global`}/>
            {!isPageLoaded ? (
                    <Loading/>
            ) : (
                <>
                    <GlobalHeader headerRef={headerRef} key={`global_header`}/>

                    <div style={{marginTop: headerHeight}} key={`route_box`}
                         className={'w-full' + (currentLoaction.pathname == '/todolist' || currentLoaction.pathname == '/blog' ? ' min-h-[80vh] py-[50px]' : '')}> {/*헤더 크기만큼 루트 컴포넌트가 마진을 잡도록 하기*/}
                        <Routes>

                            {
                                navLinks.map((nav, idx) => (
                                    <Route path={nav.link} element={nav.ruth} key={idx}></Route>
                                ))
                            }

                        </Routes>
                    </div>
                    {/*<div style={{height: "300vh"}}></div>*/}

                    <Footer/>
                </>
            )}
            </ThemeProvider>
        </>
    )
}

export default App;

// 7월 7일 깃 레포지토리 하나 만들어서 소스 업로드 하고 scss, 다크모드에 관한 이슈들 정리해서
// 라벨온 css 건들일 때 소스 공유

// https://velog.io/@velopert/velog-dark-mode

{/* <Button color=""
        >common button</Button>
        <Button primary>primary button</Button>
        <Button children={"버튼 텍스트"}></Button> */
}

{/* <CharacterCounter /> */
}
{/* <StyledButton>styled-components test</StyledButton> */
}