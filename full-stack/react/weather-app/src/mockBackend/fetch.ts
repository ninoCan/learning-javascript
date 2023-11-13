import DATA, { WeatherItem} from "./data";

interface WeatherResponse {
    status: number;
    data: WeatherItem[];
}

export function get(endpoint: string): Promise<WeatherResponse> {
  const delay = Math.floor(Math.random() * 1000);
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (!DATA.hasOwnProperty(endpoint)) {
        const validEndpoints = Object.keys(DATA)
          .map((endpoint) => ` - "${endpoint}"`)
          .join("\n ");
        reject(
          `"${endpoint}" is an invalid endpoint. Try getting data from: \n ${validEndpoints}`
        );
      }

      const fetchedData = DATA[endpoint] as WeatherItem[]; 
      const response = { status: 200, data: fetchedData };

      resolve(response);
    }, delay);
  });
}

