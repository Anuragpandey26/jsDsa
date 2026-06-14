// JavaScript
function rotateString(s, goal) {
    if (s.length !== goal.length) {
        return false;
    }
    return (s + s).includes(goal);
}

// Example 1:

// Input: s = "abcde", goal = "cdeab"
// Output: true