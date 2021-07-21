const player = {
  name: "nico",
  points: 121212,
  handsome: false,
  fat: "little bit",
};

console.log(player);
console.log(player.name);
console.log(player["points"]);

console.log(player);
player.points = player.points + 15;
console.log(player);
