function isAnagram (s, t)  {
    if (s.length !== t.length) {
        return false;
    }
    const counts = new Array(26);
    for (let i = 0; i < 26; i++) {
        counts[i] = 0;
    }
    for (let i = 0; i < s.length; i++) {
        let codeS = s.charCodeAt(i);
        let indexS = (codeS >= 65 && codeS <= 90) ? codeS - 65 : codeS - 97;
        counts[indexS]++;
        let codeT = t.charCodeAt(i);
        let indexT = (codeT >= 65 && codeT <= 90) ? codeT - 65 : codeT - 97;
        counts[indexT]--;
    }
    for (let i = 0; i < 26; i++) {
        if (counts[i] !== 0) {
            return false;
        }
    }
    return true;
};
console.log(isAnagram("Listen", "Silent")); 
console.log(isAnagram("Apple", "Paler"));  