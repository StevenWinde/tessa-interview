const createStamp = require('./create-stamp');

function createMatrix( numRows, numColumns ){
  const matrix = [];

  for(let i = 0; i<numRows; i++){
    matrix[i]=Array.from({length:numColumns}).fill(0);
  }
  return matrix;
}

const matrix = createMatrix(6,6);

const stamp = createStamp([
  [1,2],
  [4,5],
]);

for( let j = 0; j<6; j++){
  stamp(matrix, [0,j]);
}

for( let i = 0; i<6; i++){
  stamp(matrix, [i,5]);
}

for( let j = 6; j>0; j--){
  stamp(matrix, [5,j]);
}
