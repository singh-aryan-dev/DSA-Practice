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