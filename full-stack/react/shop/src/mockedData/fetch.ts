import DATA from "./data";

type Response = {status: number, data: string[]}

export function get(endpoint: string): Promise<Response> {
  const delay = Math.floor(Math.random() * 1000) + 500;
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

      const fetchedData = DATA[endpoint] as string[];
      const response = { status: 200, data: fetchedData };

      resolve(response);
    }, delay);
  });
}
