import { atom } from "recoil";
import '../css/todoListCss.scss';


const localStorageEffect = 
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
    }


export const themesAtom = atom({
    key:'themesAtoms',
    default:'light',
    effects:[localStorageEffect('light')],
    /* effects: [
        ({setSelf, onSet}) => {
            const savedData = sessionStorage.getItem('');
            // setSelf : atom 값을 설정 혹은 재설정
            if(savedData) setSelf(JSON.parse(savedData));

            // atom이 변화가 감지될 때 작동, Storage에 데이터 저장
            // setSelf에 의해서는 작동하지 않음

            onSet((newValue, _, isReset) => {
                isReset
                    ? sessionStorage.removeItem('')
                    : sessionStorage.setItem('', JSON.stringify(newValue));
            });
        }

        // setSelf : atom 값을 설정한다. 주로 Storage에 있는 데이터를 atom에 넣어줄 때 사용한다.
        // OnSet : atom의 변화를 감지해 Storage에 데이터를 저장한다.

        // 주의사항 : 데이터를 저장할 땐 '문자열'만 저장이 가능하기 때문에 json 데이터를 저장할 땐 JSON.stringify()를 이용해 문자열로 변환해주고, 
        // atom에 Storage 데이터를 저장할 땐 JSON.parse()를 이용해 문자열을 Json 형식으로 변환해줘야 한다.
    ] */
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
    text1: '#212529',
    text2: '#495057',
    text3: '#868E96',
    text4: '#CED4DA',
    border1: '#343A40',
    border2: '#ADB5BD',
    border3: '#DEE2E6',
    border4: '#F1F3F5',


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
    text1: '#ECECEC',
    text2: '#D9D9D9',
    text3: '#ACACAC',
    text4: '#595959',
    border1: '#E0E0E0',
    border2: '#A0A0A0',
    border3: '#4D4D4D',
    border4: '#2A2A2A',


};
