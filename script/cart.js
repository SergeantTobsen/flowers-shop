const products = [
  {
    name: "Blue Hydrangea",
    image: "images/garden-hydrangea.jpg",
    price: 89.99,
    qtty: 1,
    info: "Find out why everyone loves Blue Hydrangeas with this gardener's dream. The full blooms are long–lasting and bursting with color making it a treat for anyone looking to bring some life into indoor spaces.",
  },
  {
    name: "Calla Lily",
    image: "images/calla-lily.jpg",
    price: 75.59,
    qtty: 1,
    info: "This houseplant is great for making every day bright. Whether perched on a windowsill or gifted to a friend in need of a smile, the pure white tones and healthy greenery add a delicate touch to any space. This plant loves rich soil and plenty of sun.",
  },
  {
    name: "Zebra Orchid",
    image: "images/orchid.jpg",
    price: 67.49,
    qtty: 1,
    info: "Bright and blooming, take a mental vacation with this gorgeous orchid plant. Known for its delicate yet colorful blooms, this cheerful orchid brings the beach to wherever you or your loved ones are.",
  },
  {
    name: "Pink Petals Rosalea",
    image: "images/roses.jpg",
    price: 58.49,
    qtty: 1,
    info: "This Rosalea plant is sure to leave a lasting impression. With petals that resemble blooming roses, this lush plant may arrive as buds , but they'll unfurl beautifully in a short time.",
  },
];
//current object formatter
const currencyFormater = new Intl.NumberFormat("de-AT", {
  style: "currency",
  currency: "EUR",
});
