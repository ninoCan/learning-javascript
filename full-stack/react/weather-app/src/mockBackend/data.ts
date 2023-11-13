const getRandomId = (): string => `${Math.random()}-${Math.random()}`;

const getRandomNumber = (min: number, range: number): number => {
  return Math.floor((Math.random() * 100 * range) / 100) + min;
}  

const summaries = [
  "Rain",
  "Clouds",
  "Snow",
  "Sparse Clouds",
  "Hail",
  "Sun"
];

export interface Temp{
    avg: Number;
    min: Number;
    max: Number;
}

export interface WeatherItem {
    id: string;
    summary: string;
    temp: Temp;
    precip: number;
}

const randomFromList = (list: string[]): string  => list[getRandomNumber(0, list.length)];

const getTemp = (): Temp => {
  const avg = getRandomNumber(60, 30);

  return {
    avg,
    min: avg - 10,
    max: avg + 10
  };
};

const getWeatherItem = (): WeatherItem => ({
  id: getRandomId(),
  summary: randomFromList(summaries),
  temp: getTemp(),
  precip: getRandomNumber(0, 100)
});

export interface BulletinEndpoints{
    "/daily": WeatherItem[];
    "/hourly": WeatherItem[];
}

const bulletin: BulletinEndpoints = {
  "/daily": Array.from({ length: 5 }, getWeatherItem),
  "/hourly": Array.from({ length: 24 }, getWeatherItem)
};

export default bulletin;
