import '/src/styles/password.scss';

import { useState } from 'react';
import { pwCreate } from "../components/password/pw-create";

export const PagePWGenerator = () => {

	const [inputLength, setInputLength] = useState(12);
	const handleChangeInputLength = (e: React.ChangeEvent) => {
		setInputLength(Number((e.target as HTMLInputElement).value));
	}

	const [isCheckedCB1, setIsCheckedCB1] = useState(true);
	const handleChangeCB1 = (e: React.ChangeEvent) => {
		setIsCheckedCB1((e.target as HTMLInputElement).checked);
	}

	const [isCheckedCB2, setIsCheckedCB2] = useState(true);
	const handleChangeCB2 = (e: React.ChangeEvent) => {
		setIsCheckedCB2(Boolean((e.target as HTMLInputElement).checked));
	}

	const [isCheckedCB3, setIsCheckedCB3] = useState(true);
	const handleChangeCB3 = (e: React.ChangeEvent) => {
		setIsCheckedCB3(Boolean((e.target as HTMLInputElement).checked));
	}

	const [isCheckedCB4, setIsCheckedCB4] = useState(true);
	const handleChangeCB4 = (e: React.ChangeEvent) => {
		setIsCheckedCB4(Boolean((e.target as HTMLInputElement).checked));
	}

	const [isCheckedCB5, setIsCheckedCB5] = useState(true);
	const handleChangeCB5 = (e: React.ChangeEvent) => {
		setIsCheckedCB5(Boolean((e.target as HTMLInputElement).checked));
	}

	const [isCheckedCB6, setIsCheckedCB6] = useState(true);
	const handleChangeCB6 = (e: React.ChangeEvent) => {
		setIsCheckedCB6(Boolean((e.target as HTMLInputElement).checked));
	}

	const [isCheckedCB7, setIsCheckedCB7] = useState(true);
	const handleChangeCB7 = (e: React.ChangeEvent) => {
		setIsCheckedCB7(Boolean((e.target as HTMLInputElement).checked));
	}

	const [isCheckedCB8, setIsCheckedCB8] = useState(true);
	const handleChangeCB8 = (e: React.ChangeEvent) => {
		setIsCheckedCB8(Boolean((e.target as HTMLInputElement).checked));
	}

	const [isCheckedCB9, setIsCheckedCB9] = useState(false);
	const handleChangeCB9 = (e: React.ChangeEvent) => {
		setIsCheckedCB9(Boolean((e.target as HTMLInputElement).checked));
	}

	const [isCheckedCB10, setIsCheckedCB10] = useState(false);
	const handleChangeCB10 = (e: React.ChangeEvent) => {
		setIsCheckedCB10(Boolean((e.target as HTMLInputElement).checked));
	}

	let excludedChars: Array<string> = [];
	if (isCheckedCB5) {
		excludedChars = ["l", "I", "|"];
	}
	if (isCheckedCB6) {
		excludedChars.push("/"); excludedChars.push("\\");
	}
	if (isCheckedCB7) {
		excludedChars.push("'"); excludedChars.push("`");
	}
	if (isCheckedCB8) excludedChars.push("^");
	if (isCheckedCB9) {
		excludedChars.push("O"); excludedChars.push("0");
	}
	if (isCheckedCB10) {
		excludedChars.push("K"); excludedChars.push("k");
	}

	let pw: string;
	const starter = (e: React.MouseEvent) => {

		e.preventDefault();

		const _TextField = document.getElementById("pw-textField");

		if (_TextField) {

			const TextField = _TextField;

			pw = pwCreate(inputLength,
				isCheckedCB1,
				isCheckedCB2,
				isCheckedCB3,
				isCheckedCB4,
				excludedChars);

			(TextField as HTMLInputElement).value = pw;

		} else {
			console.log("The text field does not exist!");
		}
	}

	const starterCopy = (e: React.MouseEvent) => {

		e.preventDefault();

		const _TextField = document.getElementById("pw-textField");

		if (_TextField) {

			const TextField = _TextField;
			const copyText = (TextField as HTMLInputElement).value;
			navigator.clipboard.writeText(copyText);

			/* alert("Copied: " + copyText); */

		} else {
			console.log("The text field does not exist!");
		}
	}
























	return (
		<div className="passwords">
			<div className="pw-inputField">

				<form id="pw-starter">

					<div className="pw-colorField-1">
						<span>Password length: </span>
						<input id="pw-inputLength" type="number" min="4" max="100" step="1"
							value={inputLength} checked onChange={(e) => handleChangeInputLength(e)} />
					</div>

					<div className="pw-checkboxes">
						<div className="pw-colorField-2">
							<p>Requirements: </p>
							<br />

							<div className="pw-unit">
								<input type="checkbox" id="cb1" checked={isCheckedCB1} onChange={(e) => handleChangeCB1(e)} />
								<span>&nbsp; must include at least 1 number</span>
							</div>

							<div className="pw-unit">
								<input type="checkbox" id="cb2" checked={isCheckedCB2} onChange={(e) => handleChangeCB2(e)} />
								<span>&nbsp; must include at least 1 capital letter</span>
							</div>

							<div className="pw-unit">
								<input type="checkbox" id="cb3" checked={isCheckedCB3} onChange={(e) => handleChangeCB3(e)} />
								<span>&nbsp; must include at least 1 lower letter</span>
							</div>

							<div className="pw-unit">
								<input type="checkbox" id="cb4" checked={isCheckedCB4} onChange={(e) => handleChangeCB4(e)} />
								<span>&nbsp; must include at least 1 special character</span>
							</div>
						</div>
					</div>

					<div className="pw-colorField-3">
						<p>Excluded characters: </p>
						<br />

						<div className="pw-unit">
							<input type="checkbox" id="cb5" checked={isCheckedCB5} onChange={(e) => handleChangeCB5(e)} />
							<span>&nbsp; exclude &nbsp;l I |</span>
						</div>

						<div className="pw-unit">
							<input type="checkbox" id="cb6" checked={isCheckedCB6} onChange={(e) => handleChangeCB6(e)} />
							<span>&nbsp; exclude &nbsp;/ \</span>
						</div>

						<div className="pw-unit">
							<input type="checkbox" id="cb7" checked={isCheckedCB7} onChange={(e) => handleChangeCB7(e)} />
							<span>&nbsp; exclude &nbsp;' `</span>
						</div>

						<div className="pw-unit">
							<input type="checkbox" id="cb8" checked={isCheckedCB8} onChange={(e) => handleChangeCB8(e)} />
							<span>&nbsp; exclude &nbsp;^</span>
						</div>

						<div className="pw-unit">
							<input type="checkbox" id="cb9" checked={isCheckedCB9} onChange={(e) => handleChangeCB9(e)} />
							<span>&nbsp; exclude &nbsp;O 0</span>
						</div>

						<div className="pw-unit">
							<input type="checkbox" id="cb10" checked={isCheckedCB10} onChange={(e) => handleChangeCB10(e)} />
							<span>&nbsp; exclude &nbsp;K k</span>
						</div>
					</div>

					<div className="pw-action">
						{/* Create-pw-button */}
						<div>
							<input id="pw-button" type="submit" value=" Create password " onClick={(e) => starter(e)} />
						</div>

						{/* Textfield */}
						<textarea id="pw-textField" placeholder="Password" defaultValue="" />

						{/* Copy-button*/}
						<div id="pw-copy-div">
							<input id="pw-copy-button" type="submit" value=" Copy to clipboard " onClick={(e) => starterCopy(e)} />
						</div>
					</div>

				</form>

			</div >
		</div >
	);
};