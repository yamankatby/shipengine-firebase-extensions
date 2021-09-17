export default {
  location: process.env.LOCATION!,
  databaseInstance: process.env.SELECTED_DATABASE_INSTANCE!,
  shipEngineApiKey: process.env.SHIPENGINE_API_KEY!,
  collectionPath: process.env.COLLECTION_PATH!,
  carrierIds: process.env.CARRIER_IDS!.split(',').map(id => id.trim()),
  shipmentKey: process.env.INPUT_KEY!,
  ratesKey: process.env.OUTPUT_KEY!,
};
