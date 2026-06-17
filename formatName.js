const inputName = "Anurag kumar pandey";
console.log("Input:", inputName);
console.log("Output:", formatName(inputName));
function formatName(inputName){
    let arrName=inputName.split(" ");
    let lastword=arrName.pop()
    let restword=arrName.join("")
     return `${lastword},${restword}`;
}
