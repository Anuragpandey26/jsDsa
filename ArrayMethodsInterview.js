// You are building a Student Report Card System. 
// You have a raw list of students with their marks, subjects, and details. 
// Using a single array of student data, perform all the required operations using each method exactly once.
const students = [
  { name: "Anurag",  marks: [88, 76, 95], passed: true,  subjects: [["Maths", "Physics"], ["Coding"]] },
  { name: "Riya",    marks: [45, 38, 50], passed: false, subjects: [["Bio", "Chem"],   ["English"]] },
  { name: "Karan",   marks: [70, 85, 90], passed: true,  subjects: [["Maths", "Coding"], ["Hindi"]] },
  { name: "Sneha",   marks: [55, 60, 48], passed: true,  subjects: [["Physics"],           ["Bio"]] },
  { name: "Dev",     marks: [92, 88, 97], passed: true,  subjects: [["Coding", "Maths"],  ["Science"]] },
]
const averages = students.map(s => ({
  name: s.name,
  avg: (s.marks.reduce((sum, m) => sum + m, 0) / s.marks.length).toFixed(1)
}));
// [{ name:"Anurag", avg:"86.3" }, { name:"Riya", avg:"44.3" }, ...]
const passedStudents = students.filter(s => s.passed === true);
const grandTotal = students.reduce((total, s) => {
  const studentTotal = s.marks.reduce((sum, m) => sum + m, 0);
  return total + studentTotal;
}, 0);
// 1081
students.forEach(s => {
  const status = s.passed ? "PASS" : "FAIL";
  console.log(`${s.name} → ${status}`);
});
// Anurag → PASS
// Riya   → FAIL
// Karan  → PASS 
const topper = students.find(s => {
  const avg = s.marks.reduce((a, b) => a + b, 0) / s.marks.length;
  return avg > 90;
});
// { name: "Dev", marks: [92, 88, 97], ... }
const top3 = students.slice(0, 3);
// [Anurag, Riya, Karan] — original array untouched

// also useful: get last 2 students
const last2 = students.slice(-2);
// [Sneha, Dev]
const classList = [...students]; // copy first to avoid mutating original

classList.splice(1, 1, {         // at index 1, remove 1, insert new
  name: "Priya",
  marks: [80, 75, 85],
  passed: true
});
// Riya replaced by Priya at position 1
const allSubjects = students
  .map(s => s.subjects)   // [ [[Maths,Physics],[Coding]], [[Bio,Chem],[English]], ... ]
  .flat(2);              // depth 2 — removes both levels of nesting
// ["Maths","Physics","Coding","Bio","Chem","English","Maths","Coding","Hindi","Physics","Bio","Coding","Maths","Science"]
const ranked = [...students].sort((a, b) => {
  const avgA = a.marks.reduce((s, m) => s + m, 0) / a.marks.length;
  const avgB = b.marks.reduce((s, m) => s + m, 0) / b.marks.length;
  return avgB - avgA;       // descending
});
// Dev(92.3) → Anurag(86.3) → Karan(81.7) → Sneha(54.3) → Riya(44.3)

// method          | returns                  | mutates original?
// ----------------|--------------------------|------------------
// map()           | new array, same length   | no
// filter()        | new array, shorter       | no
// reduce()        | single value             | no
// forEach()       | nothing (undefined)      | no
// find()          | first matched item       | no
// slice()         | new array, cut portion   | no
// splice()        | removed items array      | yes  
// flat()          | new flattened array      | no
// sort()          | same array, reordered    | yes  

