const SectionCard = ({children, bg}) => {
    return(
        <div className={'rounded-[30px] shadow-[0_3px_7px_rgba(0,0,0,0.4)] p-[30px]' + (bg ? ` ${bg}` : ' bg_el1')}>
            {children}
        </div>
    )
}

/*
box-shadow: 0px 3px 7px 0px #00000040;
*/

export default SectionCard