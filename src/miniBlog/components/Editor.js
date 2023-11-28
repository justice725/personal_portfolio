import {useEffect, useRef, useState} from "react";
import SunEditor, {buttonList} from "suneditor-react";
import {
    align, audio,
    blockquote,
    font,
    fontColor,
    fontSize,
    formatBlock,
    hiliteColor, horizontalRule,
    image,
    imageGallery, lineHeight, link, list, math, paragraphStyle, table, template, textStyle, video
} from "suneditor/src/plugins";
import plugin from 'suneditor/src/plugins'


const Editor = () => {
    const [value, setValue] = useState('')
    const [savedValue, setSavedValue] = useState('')
    const editor = useRef()

    const getSunEditorInstance = (sunEditor) => {
        editor.current = sunEditor
    }

    useEffect(() => {
        console.log('입력값', value)
    }, [value]);

    const saveButtonClick = () => {
        setSavedValue(value)
    }

    return(
        <>

            <div className='text-editor'>
                <input type="text" placeholder='제목을 입력하세요. '/>
                <SunEditor
                    lang='ko'
                    getSunEditorInstance={getSunEditorInstance}
                    width='100%'
                    height='650px'
                    onChange={(e)=>{setValue(e)}}
                    setAllPlugins={true}
                    setOptions={{
                        /*buttonList:buttonList.formatting,*/
                        plugins:[
                            blockquote,align,font,fontColor, fontSize, formatBlock, hiliteColor, horizontalRule, lineHeight,
                            list, paragraphStyle, table, template, textStyle, image, imageGallery, link, video, audio
                        ],
                        buttonList:[
                            ['undo', 'redo'],
                            ['font', 'fontSize', 'formatBlock'],
                            ['bold', 'underline', 'italic', 'strike', 'subscript', 'superscript'],
                            ['fontColor', 'hiliteColor', 'textStyle'],
                            ['removeFormat'],
                            ['outdent', 'indent'],
                            ['align', 'horizontalRule', 'list', 'lineHeight'],
                            ['table', 'link','image', 'video', 'math'],
                            ['imageGallery'],
                            ['fullScreen', 'showBlocks', 'codeView'],
                            ['preview','print'],
                            ['save', 'template'],
                            '/'
                        ],
                    }}
                />
                <div className='flex flex-row w-full justify-center items-center gap-[20px]'>
                    <button>취소</button>
                    <button onClick={saveButtonClick}>저장</button>
                </div>
                <div>
                    {savedValue ? savedValue : null}
                </div>
            </div>
        </>
    )
}

export default Editor