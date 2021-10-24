// Random Song Generator
console.log('Random Song Generator');

let randomSongs = ['Folding', 'Hummer', 'Readymade',
'Are You Sure Hank Done It This Way', 'When I First Came Here',
'Vanity', 'Miss World', 'Hand In My Pocket', 'Kick Push',
'Gone Country', '30 Something', 'Hey, Hey What Can I Do'];

let randSongGen = (songs) => songs[Math.floor(Math.random() * songs.length)];
// This Works!!!

console.log(randSongGen(randomSongs));

