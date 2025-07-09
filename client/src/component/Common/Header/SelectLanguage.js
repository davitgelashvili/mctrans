import React, { useEffect, useState } from 'react'
import { siteTranslateAction } from '../../../store/translate'
import { useDispatch } from "react-redux";

const   SelectLanguage = () => {
    const [select, setSelect] = useState('en')
    const [open, setOpen] = useState(false)
    const dispatch = useDispatch()

    function openSelect() {
        setOpen(!open)
    }

    useEffect(() => {
        dispatch(siteTranslateAction.changeLanguage(select))
    }, [select])

    return (
        <div style={{ position: 'relative' }}>
            <div 
                onClick={() => openSelect()}
                style={{
                    marginLeft: '12px'
                }}>
                {select}
            </div>
            {open && (
                <div
                    onClick={()=>setOpen(!open)}
                    className='list'
                    style={{
                        position: 'absolute',
                        background: '#fff',
                        padding: '0 11px',
                        borderRadius: '5px',
                        fontSize: '14px',
                        cursor: 'pointer'
                    }}>
                    <p onClick={() => setSelect('ka')}>ka</p>
                    <p onClick={() => setSelect('en')}>en</p>
                    <p onClick={() => setSelect('ru')}>ru</p>
                </div>
            )}
        </div>
    )
}

export default SelectLanguage