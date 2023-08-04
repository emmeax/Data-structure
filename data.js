//first problem
function findDistinctSum(set1, set2) {
    let sum = 0;

    for (const element of set1) {
        if (!set2.includes(element)) {
        sum += element;
        }
    }

    for (const element of set2) {
        if (!set1.includes(element)) {
            sum += element;
        }
    }

    return sum;
}

const set1 = [3, 1, 7, 9];
const set2 = [2, 4, 1, 9, 3];

const distinctSum = findDistinctSum(set1, set2);
console.log("Distinct Sum:", distinctSum);

//problem 2
function dotProduct(v1, v2) {
    let product = 0;
    for (let i = 0; i < v1.length; i++) {
        product += v1[i] * v2[i];
    }
    return product;
}

function areOrthogonal(v1, v2) {
    return dotProduct(v1, v2) === 0;
}

const numPairs = parseInt(prompt("Enter the number of pairs:"));

for (let i = 0; i < numPairs; i++) {
    const v1 = prompt(`Enter vector ${i + 1} (comma-separated values):`).split(',').map(Number);
    const v2 = prompt(`Enter vector ${i + 2} (comma-separated values):`).split(',').map(Number);

    const orthogonal = areOrthogonal(v1, v2);
    console.log(`Vectors ${v1} and ${v2} are orthogonal: ${orthogonal}`);
}
