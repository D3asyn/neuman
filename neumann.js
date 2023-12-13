function convert() {
    var output = document.getElementById("ti2");
    var input = document.getElementById("ti1").value;
    output.value = "";
    for (var i = 0; i < input.length; i++) {
        output.value += input[i].charCodeAt(0).toString(2) + " ";
    }
}

function generateText() {
    // Bekérés a felhasználótól
    const lengthInput = document.getElementById('lengthInput');
    const length = parseInt(lengthInput.value);

    // Bináris sor generálása
    const binarySequence = generateBinarySequence(length * 8);

    // Bináris sor kiírása a HTML-be
    const binaryDiv = document.getElementById('binaryDiv');
    binaryDiv.textContent = formatBinaryString(binarySequence);

    // Bináris sor szöveggé alakítása és kiírása a HTML-be
    const textDiv = document.getElementById('textDiv');
    textDiv.textContent = binaryToString(binarySequence);
}

function generateBinarySequence(length) {
    let binarySequence = '';
    for (let i = 0; i < length; i++) {
        binarySequence += Math.round(Math.random());
    }
    return binarySequence;
}

function formatBinaryString(binaryString) {
    // Minden nyolc bit után egy aláhúzás karakter hozzáadása, az utolsó előtt kivétellel
    return binaryString.replace(/(\d{8})(?!$)/g, '$1_');
}

function binaryToString(binaryString) {
    // Bináris sor szöveggé alakítása, random emojik használatával
    return binaryString.replace(/(\d{8})/g, match => {
        const charCode = parseInt(match, 2);
        // Ellenőrizze, hogy a karakter a nyomtatásra alkalmas-e
        if (charCode >= 32 && charCode <= 126) {
            return String.fromCharCode(charCode);
        } else {
            // Ha nem nyomtatható karakter, válasszon egy random emojit
            const emojis = ['😀', '😃', '😄', '😁', '😆', '😅', '😂', '🤣', '😊', '😇', '🙂', '🙃', '😉', '😌', '😍', '🥰', '😘', '😗', '😙', '😚', '😋', '😛', '😝', '😜', '🤪', '🤨', '🧐', '🤓', '😎', '🤩', '🥳', '😏', '😒', '😞', '😔', '😟', '😕', '🙁', '☹️', '😣', '😖', '😫', '😩', '🥺', '😢', '😭', '😤', '😠', '😡', '🤬', '🤯', '😳', '🥵', '🥶', '😱', '😨', '😰', '😥', '😓', '🤗', '🤔', '🤭', '🤫', '🤥']; // Bővíthető a kívánt emojik listájával
            const randomIndex = Math.floor(Math.random() * emojis.length);
            return emojis[randomIndex];
        }
    });
}