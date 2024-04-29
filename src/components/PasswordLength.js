import React from 'react'

const PasswordLength = ({ length, setLength }) => {

	const onChange = (e) => {
		setLength(e.target.value);
		console.log(length)
	}
	return (
		<div className='container pass-container'>
			<label className='text-white label-style' htmlFor="">Password length </label>
			<input className="mx-3 input-part" type="text " onChange={onChange} value={length} />
		</div>
	)
}

export default PasswordLength