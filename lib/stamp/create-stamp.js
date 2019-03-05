const {forEach}=require('lodash');

function createStamp(stampConfiguration){
  return (matrix, position)=>{
    forEach(stampConfiguration, (stampConfigurationRow, i)=>{
      forEach(stampConfigurationRow, (stampConfigurationCell, j)=>{
        const row = i+position[0];
        const column = j+position[1];

        if( Array.isArray( matrix[row] ) ){
          if( matrix[row][column]===0){
            matrix[row][column]=stampConfigurationCell;
          }
        }
      });
    });
  }
}

module.exports = createStamp;
