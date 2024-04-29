import { useState } from 'react'

const usePasswordGenerator = () => {
	const [password, setPassword] = useState("");
	const [errorMessage, setErrorMessage] = useState("");

	const generatePassword = (checkBoxData, length) => {
		let charset = "";
		let generatedPassword = "";

		const selectedOption = checkBoxData.filter((checkbox) => checkbox.state);

		if (selectedOption.length === 0) {
			setErrorMessage("Select atleast one option");
			setPassword("");
			return;
		}

		selectedOption.forEach((option) => {
			switch (option.label) {
				case "Include UpperCase": charset += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
					break;
				case "Include LowerCase": charset += "abcdefghijklmnopqrstuvwxyz";
					break;
				case "Include Numbers": charset += "0123456789";
					break;
				case "Special characters": charset += "!@#$%^&*()_";
					break;
				default:
					break;
			}
		});

		for (let i = 0; i < length; i++) {
			let randomIndex = Math.floor(Math.random() * charset.length);
			generatedPassword += charset[randomIndex];
		}
		setPassword(generatedPassword);
		setErrorMessage("");
	};

	return { password, errorMessage, generatePassword };
}

export default usePasswordGenerator;