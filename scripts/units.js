const ambassador = extendContent(UnitType, "drone-m", {});
ambassador.constructor = () => extend(UnitEntity, {});
ambassador.defaultController = () => extend(MinerAI, {});

const backwater = extendContent(UnitType, "drone-m2", {});
backwater.constructor = () => extend(UnitEntity, {});
backwater.defaultController = () => extend(MinerAI, {});