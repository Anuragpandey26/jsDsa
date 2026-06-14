// Question 2: Format string "Anurag kumar pandey" to "pandey ,Anurag kumar"

function formatName(str) {
    // Split the string into words manually or using split
    const words = str.split(" ");
    if (words.length <= 1) return str;
    
    const lastWord = words[words.length - 1];
    
    // Construct the string of other words
    let otherWords = "";
    for (let i = 0; i < words.length - 1; i++) {
        otherWords += words[i];
        if (i < words.length - 2) {
            otherWords += " ";
        }
    }
    
    // Output format: lastWord + " ," + otherWords
    return `${lastWord} ,${otherWords}`;
}

// Test case
const inputName = "Anurag kumar pandey";
console.log("Input:", inputName);
console.log("Output:", formatName(inputName));
