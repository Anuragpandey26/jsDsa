// ==========================================
// Debouncing and Throttling in JavaScript
// ==========================================
// These are two extremely common interview topics related to performance optimization.
// They both limit the rate at which a function gets called, but in different ways.

// -----------------------------------------------------------------------------
// 1. Debouncing
// -----------------------------------------------------------------------------
// Concept: "Wait until the user stops doing the action for X milliseconds before running the function."
// Use case: Search bar auto-complete. We don't want to make an API call for every keystroke.
// We wait until the user pauses typing for, say, 300ms, and THEN make the API call.

function debounce(func, delay) {
    let timeoutId;
    
    // We return a new function that will replace the original function being debounced.
    return function(...args) {
        // Clear the previous timer if the function is called again within the delay period
        clearTimeout(timeoutId);
        
        // Set a new timer
        timeoutId = setTimeout(() => {
            // Call the original function with the correct context and arguments
            func.apply(this, args);
        }, delay);
    };
}

// Example usage:
const handleSearch = (query) => {
    console.log(`[Debounce] Fetching search results for: "${query}"`);
};

const debouncedSearch = debounce(handleSearch, 500);

console.log("Simulating rapid typing for Debounce...");
debouncedSearch("j");
debouncedSearch("ja");
debouncedSearch("jav");
debouncedSearch("java"); // Only this one will actually execute handleSearch after 500ms



// -----------------------------------------------------------------------------
// 2. Throttling
// -----------------------------------------------------------------------------
// Concept: "Don't run this function more than once every X milliseconds."
// Use case: Window resize or scrolling events. We want to update the UI as the user scrolls,
// but doing it on EVERY pixel change is too expensive. We might throttle it to run at most once every 100ms.

function throttle(func, limit) {
    let inThrottle = false; // Flag to check if we are currently throttling
    
    return function(...args) {
        if (!inThrottle) {
            // Execute the function
            func.apply(this, args);
            
            // Set flag to true to ignore subsequent calls
            inThrottle = true;
            
            // After the limit time has passed, release the throttle
            setTimeout(() => {
                inThrottle = false;
            }, limit);
        }
    };
}

// Example usage:
const handleScroll = () => {
    console.log("[Throttle] Scroll event processed at", new Date().toLocaleTimeString());
};

const throttledScroll = throttle(handleScroll, 1000);

// Simulating continuous scrolling events
setTimeout(() => {
    console.log("\nSimulating continuous scrolling for Throttle (runs for 3 seconds)...");
    const intervalId = setInterval(() => {
        // This simulates a scroll event firing every 100ms
        // But our throttle limit is 1000ms, so we should only see the log once per second.
        throttledScroll();
    }, 100);

    // Stop the simulation after 3.5 seconds
    setTimeout(() => {
        clearInterval(intervalId);
        console.log("Done.");
    }, 3500);
}, 1000); // Wait for debounce example to finish before starting this one
