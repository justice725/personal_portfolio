import { atom } from "recoil";
import '../../todoList/css/todoListCss.scss';


const localStorageEffect = // 페이지 로딩시 테마 적용하기 위해서 로컬 스토리지에 해당 데이터 저장
    (key) =>
    ({setSelf, onSet}) => {
        const savedData = localStorage.getItem(key);
        if(savedData != null) {
            setSelf(JSON.parse(savedData));
        }

        onSet((newValue,_,isReset) => {
            isReset
                ? localStorage.removeItem(key)
                : localStorage.setItem(key, JSON.stringify(newValue));
        })
        // setSelf : atom 값을 설정한다. 주로 Storage에 있는 데이터를 atom에 넣어줄 때 사용한다.
        // OnSet : atom의 변화를 감지해 Storage에 데이터를 저장한다.

        // 주의사항 : 데이터를 저장할 땐 '문자열'만 저장이 가능하기 때문에 json 데이터를 저장할 땐 JSON.stringify()를 이용해 문자열로 변환해주고,
        // atom에 Storage 데이터를 저장할 땐 JSON.parse()를 이용해 문자열을 Json 형식으로 변환해줘야 한다.
    }


export const themesAtom = atom({
    key:'themesAtoms',
    default:'light',
    effects:[localStorageEffect('light')], // 스토리지에 등록되어 있을 값 초기는 light
});

export const lightTheme = {
    textColor: '#fff',
    backgroundColor:'#007CBD',
    border:'#fff',

    //velog css style
    bg_page1: '#F8F9FA',
    bg_page2: '#FFFFFF',
    bg_element1: '#E9ECEF', // 헤더, 헤더메뉴, 검색창처럼 라이트 모드에선 흰색이지만 다크모드에서는 조금 다른 색으로 보여줘야 하는 경우
    bg_element2: '#F8F9FA', // 태그, 좋아요/공유 영역, 다음 페이지
    bg_element3: '#FFFFFF', // 답글, 토클 스위치 등
    bg_element4: '#DEE2E6', // bg_element3에 호버 효과가 필요한 경우
    bg_element5: '#ffffff',
    bg_sticker:'#121212',
    bg_circle:'#121212',
    text1: '#212529',
    text2: '#495057',
    text3: '#868E96',
    text4: '#CED4DA',
    textReverse: '#ECECEC',
    title1:'#212529',
    title2:'#212529',
    border1: '#343A40',
    border2: '#ADB5BD',
    border3: '#DEE2E6',
    border4: '#F1F3F5',
    border5: '#F1F3F5',

    inner_box:'#fafafa',
    linkBtn:'#9EA8B3',
    linkColor:'#ffffff',

    // primary style
    defaultPrimary: '#3d5afe',
    defaultAlert: '#fafafa',

    primary1: '#304ffe',
    alert1:'#ff3d00',

    footer:'#ADB5BD',
    buttonBack:'#3d5afe',
    buttonColor:'#fafafa',
};

export const darkTheme = {
    textColor:'#007CBD',
    backgroundColor:'#fdfdfd',
    border:'#007CBD',

    //velog css style
    bg_page1: '#121212',
    bg_page2: '#121212',
    bg_element1: '#1E1E1E',
    bg_element2: '#1E1E1E',
    bg_element3: '#252525',
    bg_element4: '#2E2E2E',
    bg_element5: '#DEE2E6',
    bg_sticker:'#DEE2E6',
    bg_circle:'#9b9ea1',
    text1: '#ECECEC',
    text2: '#D9D9D9',
    text3: '#ACACAC',
    text4: '#595959',
    textReverse: '#212529',
    title1:'#212529',
    title2:'#ffffff',
    border1: '#E0E0E0',
    border2: '#A0A0A0',
    border3: '#4D4D4D',
    border4: '#2A2A2A',
    border5:'#E0E0E0',

    inner_box:'#ECECEC',
    linkBtn:'#9EA8B3',
    linkColor:'#ffffff',

    // primary style
    defaultPrimary: '#3d5afe',
    defaultAlert: '#fafafa',

    primary1: '#536dfe',
    alert1:'#ff9e80',
    footer:'#000000',
    buttonBack:'#fafafa',
    buttonColor:'#3d5afe',
};

const cssVar = (name) => `var(--${name})`;

export const themedPalette = {
    text: cssVar('text'),
    background: cssVar('background'),
    bgEl4:cssVar('bg-el4'),
    border3:cssVar('border3'),
    border4:cssVar('border4'),
};

// styled-components에서 css variable 사용하는 방법--
// 여기서 초기 세팅
// scss에서 root 설정 해야함