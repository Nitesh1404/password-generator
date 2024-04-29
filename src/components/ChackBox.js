import React from 'react'

const ChackBox = (props) => {
	const { label, isChecked, onChange } = props;
	return (
		<div className="container d-flex align-items-center my-2">
			<label className="form-check-label text-white label-style" htmlFor={label}>{label}</label>
			<input type="checkbox" className="form-check-input mx-3 input-part-font" style={{ backgroundColor: "#00000033", border: "none" }} checked={isChecked} onChange={onChange} />
		</div>
	)
}

export default ChackBox