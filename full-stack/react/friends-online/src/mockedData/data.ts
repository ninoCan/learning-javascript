const getRandomId = (): string => `${Math.random()}-${Math.random()}`;

const getRandomNumber = (min, range):number =>
  Math.floor((Math.random() * 100 * range) / 100) + min;

const randomFromList = (list: string[]): string => list[getRandomNumber(0, list.length)];

const names = [
  "Alice",
  "Amy",
  "Asia",
  "Ash",
  "Azul",
  "Lilly",
  "Harry",
  "Holly",
  "Nino",
  "Mary",
  "Bob",
  "David",
  "Iris",
  "Kelly",
  "Karen",
  "Bart",
  "Kenny",
  "Eva",
  "Kimberly",
  "Mina",
  "Luke",
];

type NewsItem = {id: string, title: string, message: string, imgSrc: string}

const getNewsItem = (): NewsItem => ({
  id: getRandomId(),
  title: "Title Placeholder",
  message: "Message about item in the news feed (placeholder)",
  imgSrc:
    "https://via.placeholder.com/300x100.png?text=News+Feed+Image+Placeholder"
});

interface FriendStatus { id: string, name: string, isOnline: boolean }

const getFriend = (): FriendStatus => ({
  id: getRandomId(),
  name: randomFromList(names),
  isOnline: Math.random() < 0.5
});

interface Endpoints {
  [endpoint: string]: string[] | NewsItem[] | FriendStatus[]
}

const endpoints: Endpoints = {
  "/menu": ["Home", "Profile", "Events", "Clubs"],
  "/news-feed": Array.from({ length: 5 }, getNewsItem),
  "/friends": Array.from({ length: 12 }, getFriend)
};
export default endpoints;
