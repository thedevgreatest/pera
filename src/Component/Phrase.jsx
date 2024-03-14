import React, { useState } from 'react'
import { FaEye, FaEyeSlash } from 'react-icons/fa6';

export default function Phrase({ index, handleInputChange, handlePaste, inputValues }) {
    const [type, setType] = useState(true)

    return (
        <div
            className='flex items-center justify-center p-3 min-h-[50px] rounded-[5px] bg-transparent border'
        >
            <span
                className='text-sm text-black w-6 text-end'
            >
                {index}.
            </span>
            <input
                className='ms-1 text-sm text-black w-full bg-transparent focus-visible:outline-0'
                type={type ? 'password' : 'text'}
                onChange={(e) => handleInputChange(index, e.target.value)}
                onPaste={(e) => handlePaste(e, index - 1)}
                name='message'
                value={inputValues[index - 1]}
                required
            />
            <button
                className='ms-1 text-white'
                type='button'
                onClick={() => setType(!type)}
            >
                {type === true
                    ? <FaEyeSlash size={14} color='#00000080' />
                    : <FaEye size={14} color='#000000' />
                }
            </button>
        </div>
    )
}
