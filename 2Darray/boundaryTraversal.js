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