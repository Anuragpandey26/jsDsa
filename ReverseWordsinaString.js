var reverseWords = function(s) {
    let words = s.split(' ');
    let res = [];

    for (let i = words.length - 1; i >= 0; i--) {
        if (words[i]) {
            res.push(words[i]);
        }
    }

    return res.join(' ');
};
//Example 1:

// Input: s = "the sky is blue"
// Output: "blue is sky the"