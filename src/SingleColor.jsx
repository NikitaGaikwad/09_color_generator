import React from 'react'
import {toast} from 'react-toastify'
const SingleColor = ({ color, index }) => {
    const saveToClipboard = ()=>{
        if(navigator.clipboard){
            try {
                navigator.clipboard.writeText(`#${hex}`);
                toast.success('Copied to clipboard')
            } catch (error) {
                console.log(error);

            }
        }
        else{
            toast.error('Something went wrong');
        }
    }
    const { hex, weight } = color;
    return (
        <article onClick={saveToClipboard} className={index > 10 ? 'color color-light' : 'color'} style={{ background: `#${hex}` }}>
            <p className='percent-value'>{weight}%</p>
            <p className='color-value'>#{hex}</p>
        </article>
    )
}

export default SingleColor
