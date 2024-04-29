import React from 'react'
import PasswordLength from './PasswordLength'
import ChackBox from './ChackBox'

const CheckBoxContainer = (props) => {
    const { checkBoxData, setCheckBoxData, length, setLength } = props;

    // handle checkboc click function 
    const handleOnChange = (index) => {
        const updatedCheckBoxData = [...checkBoxData];
        updatedCheckBoxData[index].state = !updatedCheckBoxData[index].state;
        setCheckBoxData(updatedCheckBoxData)
        console.log(checkBoxData)
    }




    return (
        <div className='container chechbox-container p-2 d-flex justify-content-between mb-4' style={{ widows: "900px", backgroundColor: "rgb(0 0 0 / 14%)" }}>
            <div className="card p-2" style={{ backgroundColor: "rgb(255 255 255 / 0%)", border: "none" }}>
                <PasswordLength length={length} setLength={setLength} />
                {checkBoxData.slice(0, 2).map((checkbox, index) => {
                    return (
                        <ChackBox label={checkbox.label} isChecked={checkbox.state} key={index} onChange={() => handleOnChange(index)} />
                    )
                })}
            </div>
            <div className="card p-2" style={{ backgroundColor: "rgb(255 255 255 / 0%)", border: "none" }}>
                {checkBoxData.slice(2).map((checkbox, index) => {
                    return (
                        <ChackBox label={checkbox.label} isChecked={checkbox.state} key={index + 2} onChange={() => handleOnChange(index + 2)} />
                    )
                })}
                <h6 className='container text-white label-style'>Generate your password</h6>
            </div>
        </div>
    )
}

export default CheckBoxContainer