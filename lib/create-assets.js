const { reduce, find, get, map } = require('lodash');

const createAssetsFromImpacted = (alternatives, externalAssetFieldsByAssetCode = {}, costModelTypes = {}) => {
  return map(alternatives, alternative => {
    const libraryCode = alternative.costModelLibrary;

    if (!libraryCode) return;

    const assets = map(alternative.externalAssets, externalAsset => {
      const { assetType, code: assetCode, name: assetName } = externalAsset;
      const costModelType = costModelTypes[assetType];
      const attributeFields = externalAssetFieldsByAssetCode[assetCode];

      const attributes = {
        ...convertAttributes(externalAsset, attributeFields, costModelType.attributes)
      };

      return {
        code: assetCode,
        name: assetName,
        attributes,
        assetType
      };
    });

    return { alternativeId: alternative.id, assets };
  });
};

module.exports = createAssetsFromImpacted;

function convertAttributes(asset, externalFields, attributes) {
  return reduce(
    externalFields,
    (acc, field) => {
      const attribute = find(attributes, attribute => attribute.c55Key === field.Key);

      if (!attribute) {
        throw new Error(
          `C55 Returned a field that could not be mapped back to an Imported Attribute ${JSON.stringify(field)}`
        );
      }

      const internalValue = translateAttributeValue(field, attribute);

      return {
        ...acc,
        [attribute.key]: attributeValueToType(internalValue, attribute.type)
      };
    },
    {}
  );
}

function translateAttributeValue(field, importedAttribute) {
  const externalValue = field.Value === '0' ? undefined : field.Value;

  const internalValueMapping = find(
    importedAttribute.externalSelectionValueMapping || [],
    valueMapping => valueMapping.c55Value === externalValue
  );

  return get(internalValueMapping, 'selectionValue', externalValue);
}

function attributeValueToType(value, type) {
  switch (type) {
    case 'integer':
      return toInteger(value);

    case 'enumeration':
      return value;

    default:
      break;
  }
}

function toInteger(value) {
  const asInteger = parseInt(value);

  return isNaN(asInteger) ? undefined : asInteger;
}
