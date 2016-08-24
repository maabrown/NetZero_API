var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var load_data_Schema = new Schema({
	TimeStampGPSTime: String,
    DayOfWeek: String,
    TimeStampCount: Number,
    Load_1stFloorLightsEnergyUsage: Number,
    Load_1stFloorLightsExpectedEnergyUsage: Number,
    Load_1stFloorLightsExpectedPowerUsage: Number,
    Load_1stFloorLightsPowerUsage: Number,
    Load_1stFloorSensHeatEnergyUsage: Number,
    Load_1stFloorSensHeatExpectedEnergyUsage: Number,
    Load_1stFloorSensHeatExpectedPowerUsage: Number,
    Load_1stFloorSensHeatPowerUsage: Number,
    Load_2ndFloorLightsEnergyUsage: Number,
    Load_2ndFloorLightsExpectedEnergyUsage: Number,
    Load_2ndFloorLightsExpectedPowerUsage: Number,
    Load_2ndFloorLightsPowerUsage: Number,
    Load_2ndFloorSensHeatEnergyUsage: Number,
    Load_2ndFloorSensHeatExpectedEnergyUsage: Number,
    Load_2ndFloorSensHeatExpectedPowerUsage: Number,
    Load_2ndFloorSensHeatPowerUsage: Number,
    Load_AppliancesExpectedEnergyUsage: Number,
    Load_AppliancesExpectedPowerUsage: Number,
    Load_BR2PlugLoadsEnergyUsage: Number,
    Load_BR2PlugLoadsExpectedEnergyUsage: Number,
    Load_BR2PlugLoadsExpectedPowerUsage: Number,
    Load_BR2PlugLoadsPowerUsage: Number,
    Load_BR3PlugLoadsEnergyUsage: Number,
    Load_BR3PlugLoadsExpectedEnergyUsage: Number,
    Load_BR3PlugLoadsExpectedPowerUsage: Number,
    Load_BR3PlugLoadsPowerUsage: Number,
    Load_BR4PlugLoadsEnergyUsage: Number,
    Load_BR4PlugLoadsExpectedEnergyUsage: Number,
    Load_BR4PlugLoadsExpectedPowerUsage: Number,
    Load_BR4PlugLoadsPowerUsage: Number,
    Load_BasementPlugLoadsEnergyUsage: Number,
    Load_BasementPlugLoadsExpectedEnergyUsage: Number,
    Load_BasementPlugLoadsExpectedPowerUsage: Number,
    Load_BasementPlugLoadsPowerUsage: Number,
    Load_ClothesWasherEnergywithStandby: Number,
    Load_ClothesWasherPowerWithStandby: Number,
    Load_DryerEnergyTotal: Number,
    Load_DryerPowerTotal: Number,
    Load_DryerWaterFlow: Number,
    Load_FreezerTemp: Number,
    Load_KPlugLoadsEnergyUsage: Number,
    Load_KPlugLoadsExpectedEnergyUsage: Number,
    Load_KPlugLoadsExpectedPowerUsage: Number,
    Load_KPlugLoadsPowerUsage: Number,
    Load_LRPlugLoadsEnergyUsage: Number,
    Load_LRPlugLoadsExpectedEnergyUsage: Number,
    Load_LRPlugLoadsExpectedPowerUsage: Number,
    Load_LRPlugLoadsPowerUsage: Number,
    Load_LatentHeatEnergyUsage: Number,
    Load_LatentHeatExpectedEnergyUsage: Number,
    Load_LatentHeatExpectedPowerUsage: Number,
    Load_LatentHeatPowerUsage: Number,
    Load_LatentHeatWaterVolume: Number,
    Load_MBRPlugLoadsEnergyUsage: Number,
    Load_MBRPlugLoadsExpectedEnergyUsage: Number,
    Load_MBRPlugLoadsExpectedPowerUsage: Number,
    Load_MBRPlugLoadsPowerUsage: Number,
    Load_MicrowaveEnergywithStandby: Number,
    Load_MicrowavePowerWithStandby: Number,
    Load_OvenEnergyTotal: Number,
    Load_OvenPowerTotal: Number,
    Load_RefrigeratorEnergywithStandby: Number,
    Load_RefrigeratorPowerWithStandby: Number,
    Load_RefrigeratorTemp: Number,
    Load_StatusRPS1BA1LightsRPBA34: Number,
    Load_StatusRPS1NumberBR4LightsRPBA32: Number,
    Load_StatusRPS14MBALightsRPBA2: Number,
    Load_StatusRPS15MBRLightsRPBA2: Number,
    Load_StatusRPS16MBRLightsRPBA2: Number,
    Load_StatusRPS17BA2LightsRPBA2: Number,
    Load_StatusRPS18BR2LightsRPBA2: Number,
    Load_StatusRPS2KitchenLightsARPBA34: Number,
    Load_StatusRPS2NumberBR3LightsRPBA2: Number,
    Load_StatusRPS22SensHeatPrntBDOWNRPBB39: Number,
    Load_StatusRPS23SensHeatPrntAUPRPBB23: Number,
    Load_StatusRPS3KitchenLightsBRPBA34: Number,
    Load_StatusRPS31SensHeatPrntBUPRPBB34: Number,
    Load_StatusRPS32SensHeatChildAUPRPBB27: Number,
    Load_StatusRPS35SensHeatChildBUPRPBB28: Number,
    Load_StatusRPS4NumberSensHeatChildBDOWNRPBB11: Number,
    Load_StatusRPS47LRLightsRPBA32: Number,
    Load_StatusRPS49SensHeatPrntADOWNRPBB8: Number,
    Load_StatusRPS5KitchenLightsCRPBA34: Number,
    Load_StatusRPS53SensHeatChildADOWNRPBB15: Number,
    Load_StatusRPS62LRLightsRPBA32: Number,
    Load_StatusRPS7DRLightsRPBA34: Number,
    Load_StatusRPS8LRLightsRPBA32: Number,
    Load_StatusRPS9EntryHallLightsRPBA32: Number,
    Load_StatusApplianceCooktop: Number,
    Load_StatusApplianceDishwasher: Number,
    Load_StatusApplianceOven: Number,
    Load_StatusApplianceRangeHood: Number,
    Load_StatusAppliancesDryerWater: Number,
    Load_StatusLatentload: Number,
    Load_StatusMakeupAirDamper: Number,
    Load_StatusPlugLoadBR2Laptop: Number,
    Load_StatusPlugLoadBR3Laptop: Number,
    Load_StatusPlugLoadBlender: Number,
    Load_StatusPlugLoadCanOpener: Number,
    Load_StatusPlugLoadCoffeeMaker: Number,
    Load_StatusPlugLoadDesktopPCMonitor: Number,
    Load_StatusPlugLoadFan: Number,
    Load_StatusPlugLoadHairDryerCurlIron: Number,
    Load_StatusPlugLoadHandMixer: Number,
    Load_StatusPlugLoadHeatingPad: Number,
    Load_StatusPlugLoadIron: Number,
    Load_StatusPlugLoadLRBlueRay: Number,
    Load_StatusPlugLoadLRTV: Number,
    Load_StatusPlugLoadMBRBlueRay: Number,
    Load_StatusPlugLoadMBRTV: Number,
    Load_StatusPlugLoadSlowCooker: Number,
    Load_StatusPlugLoadToaster: Number,
    Load_StatusPlugLoadToasterOven: Number,
    Load_StatusPlugLoadVacuum: Number,
    Load_StatusPlugLoadVideoGame: Number
})

var load_doc = mongoose.model('load_doc', load_data_Schema, 'load');

module.exports = load_doc;