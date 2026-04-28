// Promise Example
function fetchData(success) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (success) {
                resolve("Data fetched successfully!");
            } else {
                reject("Failed to fetch data.");
            }
        }, 1000); // Simulates a 1-second delay
    });
}

// --- 1. Using Promises (.then / .catch) ---
console.log("1. Starting Promise example...");
fetchData(true)
    .then(data => {
        console.log("   Promise resolved:", data);
    })
    .catch(error => {
        console.error("   Promise rejected:", error);
    });


// --- 2. Using Async / Await ---
async function processData() {
    console.log("2. Starting Async/Await example...");
    try {
        // 'await' pauses the execution of this async function until the promise settles
        const data = await fetchData(true);
        console.log("   Async/Await success:", data);
        
        // Example of handling a failure with async/await
        const failedData = await fetchData(false);
        // The line below won't execute because fetchData(false) rejects and throws an error to the catch block
        console.log(failedData); 
    } catch (error) {
        console.error("   Async/Await error caught:", error);
    }
}

// Using setTimeout just to separate the console output of the two examples visually
setTimeout(() => {
    console.log("\n-----------------------------------\n");
    processData();
}, 1500);
