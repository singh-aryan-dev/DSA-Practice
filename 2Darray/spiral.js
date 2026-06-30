/*
==========================================
SPIRAL TRAVERSAL - CONCEPT
==========================================

Thinking Process:

The goal is to print every element of the matrix in spiral order.

Instead of thinking about nested loops, imagine walking around the matrix
layer by layer.

Movement order:
1. Left  -> Right  (Top Row)
2. Top   -> Bottom (Right Column)
3. Right -> Left   (Bottom Row)
4. Bottom-> Top    (Left Column)

To keep track of the current layer, maintain four boundaries:

top
bottom
left
right

After completing one full layer:
top++
right--
bottom--
left++

This shrinks the boundaries so the next iteration processes the inner layer.

Repeat until:
top <= bottom && left <= right

Important Edge Cases:

1. Single Row Matrix
2. Single Column Matrix

The conditions

if(top <= bottom)
if(left <= right)

prevent printing duplicate elements after the boundaries cross.

Pattern:
Boundary Shrinking

Time Complexity:
O(rows × cols)

Space Complexity:
O(rows × cols)  // O(1) if printing directly

*/

function spiral(matrix) {

    let top = 0;
    let bottom = matrix.length - 1;

    let left = 0;
    let right = matrix[0].length - 1;

    let result = [];

    while (top <= bottom && left <= right) {

        // Left to Right
        for (let j = left; j <= right; j++) {
            result.push(matrix[top][j]);
        }
        top++;

        // Top to Bottom
        for (let i = top; i <= bottom; i++) {
            result.push(matrix[i][right]);
        }
        right--;

        // Right to Left
        if (top <= bottom) {
            for (let j = right; j >= left; j--) {
                result.push(matrix[bottom][j]);
            }
            bottom--;
        }

        // Bottom to Top
        if (left <= right) {
            for (let i = bottom; i >= top; i--) {
                result.push(matrix[i][left]);
            }
            left++;
        }
    }

    return result;
}

let matrix = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
];

console.log(spiral(matrix));