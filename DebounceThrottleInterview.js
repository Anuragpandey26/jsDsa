function debounce(func, delay) {
  let timer;
  return function(...args) {
    clearTimeout(timer);
    timer = setTimeout(() => func(...args), delay);
  };
}
const search = debounce((query) => {
  console.log("Search:", query);
}, 500);
search("j");     // cancelled
search("ja");    // cancelled
search("java");  // fires after 500ms → "Search: java"




function throttle(func, limit) {
  let waiting = false;
  return function(...args) {
    if (!waiting) {
      func(...args);
      waiting = true;
      setTimeout(() => waiting = false, limit);
    }
  };
}
const onScroll = throttle(() => {
  console.log("Scrolled!");
}, 1000);
onScroll();  // fires
onScroll();  // blocked
onScroll();  // blocked
// after 1s → onScroll() fires again