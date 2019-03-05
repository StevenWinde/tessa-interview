const createStamp = require('./create-stamp');

function createMatrix( numRows, numColumns ){
  const matrix = [];

  for(let i = 0; i<numRows; i++){
    matrix[i]=Array.from({length:numColumns}).fill(0);
  }
  return matrix;
}

const matrix = createMatrix(9,9);

const stamp = createStamp([
  [1,2,3],
  [4,5,6],
  [7,8,9]
]);

for( let j = 0; j<9; j++){
  stamp(matrix, [0,j]);
}

for( let i = 0; i<9; i++){
  stamp(matrix, [i,7]);
}

for( let j = 9; j>0; j--){
  stamp(matrix, [7,j]);
}

