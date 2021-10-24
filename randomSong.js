// Random Song Generator
console.log('Random Song Generator');

let randomSongs = ['Folding', 'Hummer', 'Readymade',
'Are You Sure Hank Done It This Way', 'When I First Came Here',
'Vanity', 'Miss World', 'Hand In My Pocket', 'Kick Push',
'Gone Country', '30 Something', 'Hey, Hey What Can I Do'];

let randSongGen = (songs) => songs[Math.floor(Math.random() * songs.length)];
// This Works!!!

console.log(randSongGen(randomSongs));

const songButton = document.querySelector('#song-button');
console.log(songButton);
const songList = document.querySelector('#songs');
console.log(songs)

songButton.addEventListener('click', onSubmit);

    function onSubmit(e){
        const li = document.createElement('h1');
        li.appendChild(document.createTextNode(
            `${randomSongs[Math.floor(Math.random() * randomSongs.length)]}`
        ));
        songList.appendChild(li);

    }
    


