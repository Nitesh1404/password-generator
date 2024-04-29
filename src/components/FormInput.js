import React from 'react';

const FormInput = (props) => {
    const { password, generatePassword } = props;

    const handleCopy = () => {
        if (navigator.clipboard) {
            navigator.clipboard.writeText(password)
                .then(() => alert('Password copied to clipboard'))
                .catch(err => console.error('Could not copy password to clipboard: ', err));
        } else {
            // Inform the user about manual copying
            alert('To copy the password, please select it and use your device\'s copy function.');
        }
    }

    return (
        <div className='d-flex form-container my-4'>
            <div className='password-input d-flex  justify-content-between p-2 align-items-center text-white' style={{ backgroundColor: "rgb(0 0 0 / 14%)", overflowWrap: "break-word", wordWrap: "break-word", wordBreak: "break-word" }}>
                {password ? password : "your password will appear here"}
                <i className="fa-regular fa-copy" onClick={handleCopy} style={{ cursor: "pointer" }}></i>
            </div>
            <button className='btn  btn-dark mx-2 btn-sm' onClick={() => generatePassword()}> generate</button>
        </div>
    )
}

export default FormInput;
 