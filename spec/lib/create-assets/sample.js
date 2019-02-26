const costModelLibrary = 'Lib-A';
const assetType = 'AT-A';

const alternatives = [
  {
    id: 'asdfe',
    costModelLibrary,
    externalAssets: [{ code: 'ASSET', name: 'Asset of type AT-A', assetType }]
  }
];

const attributesFieldsByAssetCode = {
  ASSET: [{ Key: 'A-Number', Value: '0' }, { Key: 'B-Number', Value: '1' }, { Key: 'A-Selection-Value', Value: 'AEX' }]
};

const costModelTypes = {
  [assetType]: {
    attributes: [
      {
        costModelCode: assetType,
        c55Key: 'A-Number',
        key: 'A-Model-Number',
        type: 'integer'
      },
      {
        costModelCode: assetType,
        c55Key: 'B-Number',
        key: 'B-Model-Number',
        type: 'integer'
      },
      {
        costModelCode: assetType,
        c55Key: 'A-Selection-Value',
        key: 'A-Model-Selection-Value',
        type: 'enumeration',
        externalSelectionValueMapping: [
          {
            c55SelectionValue: 'AEX',
            selectionValue: 'XEA'
          }
        ]
      }
    ]
  }
};

module.exports = {
  alternatives,
  attributesFieldsByAssetCode,
  costModelTypes
};
