import React, { useState } from 'react'
import FormInput from './FormInput'
import CheckBoxContainer from './CheckBoxContainer'
import usePasswordGenerator from './hooks/Use-Password-Generator'

const BackContainer = () => {
	const { password, errorMessage, generatePassword } = usePasswordGenerator();

	// length part 
	const [length, setLength] = useState("")
	// chcebox part
	const [checkBoxData, setCheckBoxData] = useState([
		{ label: "Include UpperCase", state: false },
		{ label: "Include LowerCase", state: false },
		{ label: "Include Numbers", state: false },
		{ label: "Special characters", state: false }
	])

	const handleGeneratePassword = () => {
		generatePassword(checkBoxData, length);
	}


	return (
		<div className='container  mt-5 py-4 px-5 main-container'>
			<h3 className={`text-center  my-3 ${errorMessage ? ' text-danger' : 'text-white'}`}>
				<strong>{errorMessage ? errorMessage : "Password Generator !"}</strong>
			</h3>

			<p className='text-center text-white'>Hello ! everyone this is the password generator application , here  Users can tailor passwords with options like lowercase letters, uppercase letters, special characters, and numbers, and instantly copy them for increased digital security .</p>

			<FormInput password={password} generatePassword={handleGeneratePassword} />
			<CheckBoxContainer checkBoxData={checkBoxData} setCheckBoxData={setCheckBoxData} length={length} setLength={setLength} />

		</div >
	)
}

export default BackContainer