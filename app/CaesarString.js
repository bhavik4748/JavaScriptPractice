function CaesarString(s, addCharacter) {

    let words = s.split('');
    addCharacter = addCharacter % 26;

    for (let i = 0; i < words.length; ++i) {
        if (words[i] != '-') {
            if (s.charCodeAt(i) > 64 && s.charCodeAt(i) < 91) {
                if ((s.charCodeAt(i) + addCharacter) > 90)
                    words[i] = String.fromCharCode(64 + (s.charCodeAt(i) + addCharacter) % 90);
                else
                    words[i] = String.fromCharCode(s.charCodeAt(i) + addCharacter);
            }
            if (s.charCodeAt(i) > 96 && s.charCodeAt(i) < 123) {
                if ((s.charCodeAt(i) + addCharacter) > 122)
                    words[i] = String.fromCharCode(96 + (s.charCodeAt(i) + addCharacter) % 122);
                else
                    words[i] = String.fromCharCode(s.charCodeAt(i) + addCharacter);
            }
        }
    }

    return words.join('');
}

console.log(CaesarString('middle-Outz', 2));