// ==========================================
// Promise Methods Frequently Asked in Interviews
// ==========================================

// Helper function to create promises that resolve or reject after a given time
const makePromise = (name, time, shouldResolve = true) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (shouldResolve) {
                resolve(`${name} Resolved!`);
            } else {
                reject(`${name} Rejected!`);
            }
        }, time);
    });
};

const p1 = makePromise("Promise 1", 1000); // Resolves in 1s
const p2 = makePromise("Promise 2", 2000, false); // Rejects in 2s
const p3 = makePromise("Promise 3", 500);  // Resolves in 0.5s

// -----------------------------------------------------------------------------
// 1. Promise.all()
// -----------------------------------------------------------------------------
// Resolves: When ALL promises resolve. Returns an array of their results.
// Rejects: IF ANY promise rejects. It short-circuits and rejects immediately with that error.
console.log("--- 1. Promise.all ---");
Promise.all([makePromise("A", 1000), makePromise("B", 1500)])
    .then(results => console.log("Promise.all Success:", results)) // ['A Resolved!', 'B Resolved!']
    .catch(error => console.error("Promise.all Error:", error));

// Example showing the short-circuit (p2 rejects after 2s)
Promise.all([p1, p2, p3])
    .then(results => console.log("This will not run"))
    .catch(error => console.error("Promise.all short-circuit Error:", error)); // 'Promise 2 Rejected!'


// -----------------------------------------------------------------------------
// 2. Promise.allSettled()
// -----------------------------------------------------------------------------
// Resolves: When ALL promises have settled (either resolved or rejected).
// Returns an array of objects describing the outcome of each promise. NEVER rejects on its own.
setTimeout(() => {
    console.log("\n--- 2. Promise.allSettled ---");
    Promise.allSettled([p1, p2, p3])
        .then(results => {
            console.log("Promise.allSettled results:");
            results.forEach(res => console.log(res));
        });
}, 2500); // Delayed to keep console output readable


// -----------------------------------------------------------------------------
// 3. Promise.race()
// -----------------------------------------------------------------------------
// Settles: As soon as the FIRST promise settles (resolves OR rejects).
setTimeout(() => {
    console.log("\n--- 3. Promise.race ---");
    // p3 resolves in 500ms, so it wins the race
    Promise.race([p1, p2, p3])
        .then(result => console.log("Promise.race Winner:", result)) // 'Promise 3 Resolved!'
        .catch(error => console.error("Promise.race Error:", error));

    // Example where the first one rejects
    const pFastFail = makePromise("Fail Fast", 100, false);
    Promise.race([p1, pFastFail])
        .then(res => console.log(res))
        .catch(err => console.error("Promise.race Winner (Rejection):", err)); // 'Fail Fast Rejected!'
}, 3000);


// -----------------------------------------------------------------------------
// 4. Promise.any()
// -----------------------------------------------------------------------------
// Resolves: As soon as the FIRST promise RESOLVES. (Ignores rejections if others eventually resolve)
// Rejects: ONLY if ALL promises reject. Returns an AggregateError.
setTimeout(() => {
    console.log("\n--- 4. Promise.any ---");
    // p3 resolves first, so it wins. p2's rejection is ignored.
    Promise.any([p1, p2, p3])
        .then(result => console.log("Promise.any Winner (First to resolve):", result)) // 'Promise 3 Resolved!'
        .catch(error => console.error(error));

    // Example where all reject
    const fail1 = makePromise("F1", 100, false);
    const fail2 = makePromise("F2", 200, false);
    Promise.any([fail1, fail2])
        .then(res => console.log(res))
        .catch(err => console.error("Promise.any All Failed Error:", err)); // AggregateError: All promises were rejected
}, 3500);


// -----------------------------------------------------------------------------
// 5. Promise.resolve() & Promise.reject()
// -----------------------------------------------------------------------------
// Utility methods to quickly create a promise that is already resolved or rejected.
// Often used when you need to return a Promise from a function but already have the value synchronously.
console.log("\n--- 5. Promise.resolve & Promise.reject ---");
Promise.resolve("Immediate Success!").then(res => console.log("Promise.resolve ->", res));
Promise.reject("Immediate Failure!").catch(err => console.log("Promise.reject ->", err));
