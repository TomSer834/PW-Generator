
export const pwCreate = (pwSpecifiedLength: number,
    mustIncludeNumber: boolean,
    mustIncludeCapLetter: boolean,
    mustIncludeLowLetter: boolean,
    mustIncludeSpecialChar: boolean,
    excludedChars: Array<string>
    ) => {

    let pw = "";
    let protectedAreas = [];

    for (let i = 0; i < pwSpecifiedLength; i++) {
        let isAllowedChar, pwAdd;
        do {
            isAllowedChar = true;
            pwAdd = String.fromCharCode(Math.floor(Math.random() * 94 + 33));
            for (const element of excludedChars) {
                if (element === pwAdd) {
                    isAllowedChar = false;
                    break;
                }
            }
        } while (!isAllowedChar);
        pw += pwAdd;
    }


    console.log("pw vorher", pw);

    protectedAreas = checkProtectedAreas();

    if (mustIncludeNumber) {
        let foundNumber = false;

        for (let i = 0; i < pwSpecifiedLength; i++) {
            if (pw.charCodeAt(i) > 47 && pw.charCodeAt(i) < 58) {
                foundNumber = true;
                break;
            }
        }
        if (!foundNumber) {
            let pos;
            do {
                pos = Math.floor(Math.random() * pwSpecifiedLength);
            } while (protectedAreas.includes(pos));

            let isAllowedChar, pwAdd;
            do {
                isAllowedChar = true;
                pwAdd = Math.floor(Math.random() * 10);
                for (const element of excludedChars) {
                    if (element === String(pwAdd)) {
                        isAllowedChar = false;
                        break;
                    }
                }
            } while (!isAllowedChar);

            pw = pw.slice(0, pos) + pwAdd + pw.slice(pos + 1);
        }
    }

    protectedAreas = checkProtectedAreas();

    if (mustIncludeCapLetter) {
        let foundCapLetter = false;

        for (let i = 0; i < pwSpecifiedLength; i++) {
            if (pw.charCodeAt(i) > 64 && pw.charCodeAt(i) < 91) {
                foundCapLetter = true;
                break;
            }
        }
        if (!foundCapLetter) {
            let pos;
            do {
                pos = Math.floor(Math.random() * pwSpecifiedLength);
            } while (protectedAreas.includes(pos));

            let value, pwAdd, repeat;
            do {
                repeat = false;
                value = Math.floor(Math.random() * 26 + 65);
                pwAdd = String.fromCharCode(value);
                for (const element of excludedChars) {
                    if (element === pwAdd) {
                        repeat = true;
                        break;
                    }
                }
            } while (repeat);

            pw = pw.slice(0, pos) + pwAdd + pw.slice(pos + 1);
        }
    }

    protectedAreas = checkProtectedAreas();

    if (mustIncludeLowLetter) {
        let foundLowLetter = false;

        for (let i = 0; i < pwSpecifiedLength; i++) {
            if (pw.charCodeAt(i) > 96 && pw.charCodeAt(i) < 123) {
                foundLowLetter = true;
                break;
            }
        }
        if (!foundLowLetter) {
            let pos;
            do {
                pos = Math.floor(Math.random() * pwSpecifiedLength);
            } while (protectedAreas.includes(pos));

            let value, pwAdd, repeat;
            do {
                repeat = false;
                value = Math.floor(Math.random() * 26 + 97);
                pwAdd = String.fromCharCode(value);
                for (const element of excludedChars) {
                    if (element === pwAdd) {
                        repeat = true;
                        break;
                    }
                }
            } while (repeat);

            pw = pw.slice(0, pos) + pwAdd + pw.slice(pos + 1);
        }
    }

    protectedAreas = checkProtectedAreas();

    if (mustIncludeSpecialChar) {
        let foundSpecialChar = false;

        for (let i = 0; i < pwSpecifiedLength; i++) {
            if (pw.charCodeAt(i) > 32 && pw.charCodeAt(i) < 48 ||
                pw.charCodeAt(i) > 57 && pw.charCodeAt(i) < 65 ||
                pw.charCodeAt(i) > 90 && pw.charCodeAt(i) < 97 ||
                pw.charCodeAt(i) > 122 && pw.charCodeAt(i) < 127
            ) {
                foundSpecialChar = true;
                break;
            }
        }
        if (!foundSpecialChar) {
            let pos;
            do {
                pos = Math.floor(Math.random() * pwSpecifiedLength);
            } while (protectedAreas.includes(pos));

            let value, pwAdd, repeat;
            do {
                repeat = false;
                value = Math.floor(Math.random() * 94 + 33);
                pwAdd = String.fromCharCode(value);
                for (const element of excludedChars) {
                    if (element === pwAdd) {
                        repeat = true;
                        break;
                    }
                }
                if (!repeat && !(
                    pwAdd.charCodeAt(0) > 32 && pwAdd.charCodeAt(0) < 48 ||
                    pwAdd.charCodeAt(0) > 57 && pwAdd.charCodeAt(0) < 65 ||
                    pwAdd.charCodeAt(0) > 90 && pwAdd.charCodeAt(0) < 97 ||
                    pwAdd.charCodeAt(0) > 122 && pwAdd.charCodeAt(0) < 127
                )) {
                    repeat = true;
                }

            } while (repeat);

            pw = pw.slice(0, pos) + pwAdd + pw.slice(pos + 1);
        }
    }

    //***********************************************************************

    function checkProtectedAreas() {

        let protectedAreas = [];

        if (mustIncludeNumber) {
            let counter = 0;
            let pos;
            for (let i = 0; i < pw.length; i++) {
                if (pw.charCodeAt(i) > 47 && pw.charCodeAt(i) < 58) {
                    counter++;
                    pos = i;
                }
            }
            if (counter === 1) protectedAreas.push(pos);
        }

        if (mustIncludeCapLetter) {
            let counter = 0;
            let pos;
            for (let i = 0; i < pw.length; i++) {
                if (pw.charCodeAt(i) > 64 && pw.charCodeAt(i) < 91) {
                    counter++;
                    pos = i;
                }
            }
            if (counter === 1) protectedAreas.push(pos);
        }

        if (mustIncludeLowLetter) {
            let counter = 0;
            let pos;
            for (let i = 0; i < pw.length; i++) {
                if (pw.charCodeAt(i) > 97 && pw.charCodeAt(i) < 123) {
                    counter++;
                    pos = i;
                }
            }
            if (counter === 1) protectedAreas.push(pos);
        }

        if (mustIncludeSpecialChar) {
            let counter = 0;
            let pos;
            for (let i = 0; i < pw.length; i++) {
                if (pw.charCodeAt(i) > 32 && pw.charCodeAt(i) < 48 ||
                    pw.charCodeAt(i) > 57 && pw.charCodeAt(i) < 65 ||
                    pw.charCodeAt(i) > 90 && pw.charCodeAt(i) < 97 ||
                    pw.charCodeAt(i) > 122 && pw.charCodeAt(i) < 127
                ) {
                    counter++;
                    pos = i;
                }
            }
            if (counter === 1) protectedAreas.push(pos);
        }

        return protectedAreas;
    }

    return (pw);
};