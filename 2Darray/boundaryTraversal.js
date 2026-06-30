/*
==========================================
BOUNDARY TRAVERSAL - CONCEPT
==========================================

Thinking Process:

The goal is to print ONLY the outer boundary of the matrix.

Unlike Spiral Traversal, we do NOT visit the inner layers.

The traversal is performed only once in this order:

1. Left  -> Right  (Top Row)
2. Top   -> Bottom (Right Column)
3. Right -> Left   (Bottom Row)
4. Bottom-> Top    (Left Column)

There is NO while loop because only the first layer is required.

The boundaries never change.

To avoid printing corner elements twice:

Right Column starts from:
top + 1

Bottom Row starts from:
right - 1

Left Column starts from:
bottom - 1

Edge Cases:

1. Single Row Matrix
   Skip Bottom Row

2. Single Column Matrix
   Skip Left Column

Conditions:

if(top < bottom)
if(left < right)

prevent duplicate printing.

Pattern:
Single Boundary Traversal

Time Complexity:
O(rows + cols)

Space Complexity:
O(rows + cols)  // O(1) if printing directly


Boundary Traversal is basically one iteration of Spiral Traversal.

Spiral Traversal:
Repeat the boundary traversal while shrinking the boundaries.

Boundary Traversal:
Traverse the boundary once and stop.
*/

function boundaryTraversal(matrix) {

    let rows = matrix.length;
    let cols = matrix[0].length;

    let top = 0;
    let bottom = rows - 1;

    let left = 0;
    let right = cols - 1;

    let result = [];

    // Top Row
    for (let j = left; j <= right; j++) {
        result.push(matrix[top][j]);
    }

    // Right Column
    for (let i = top + 1; i <= bottom; i++) {
        result.push(matrix[i][right]);
    }

    // Bottom Row
    if (top < bottom) {
        for (let j = right - 1; j >= left; j--) {
            result.push(matrix[bottom][j]);
        }
    }

    // Left Column
    if (left < right) {
        for (let i = bottom - 1; i > top; i--) {
            result.push(matrix[i][left]);
        }
    }

    return result;
}

let matrix = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
    [13, 14, 15, 16]
];

console.log(boundaryTraversal(matrix));