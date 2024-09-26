export interface orbitElements {
    semiMajor: number;
    eccentricity: number;
    inclination: number;
    longOfPeri: number;
    ascendingNode: number;
}

export interface orbitData {
    semiMajor: number;
    eccentricity: number;
    inclination: number;
    longOfPeri: number;
    ascendingNode: number;
    meanAnomaly: number;
    period: number;
    dataFrom: string;
    changesPerCentury: orbitElements;
}

export interface SolarPlanetData {
    type: string;
    name: string;
    textureUrl: string;
    radius: number;
    color: string;
    orbit: orbitData;
}

export interface CelestialWithRingData extends SolarPlanetData {
    ringStart: number;
    ringEnd: number;
    ringTexture: string;
}
