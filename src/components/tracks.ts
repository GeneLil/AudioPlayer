export type Track = {
  id: number
  src: string
  artistName: string
  songName: string
  audioElement: HTMLAudioElement
  trackDuration?: number
}

const createAudioElem = () => document.createElement("audio")
const audio1 = {
  id: 0,
  src: "https://cdn.jsdelivr.net/gh/lexytail/first-phaser/assets/music.mp3",
  artistName: "Willie Wonka",
  songName: "Damn hippies",
  audioElement: createAudioElem()
}
const audio2 = {
  id: 1,
  src: "http://www.largesound.com/ashborytour/sound/brobob.mp3",
  artistName: "Love Fist",
  songName: "Shattered Dreams in the Rain",
  audioElement: createAudioElem()
}
const audio3 = {
  id: 2,
  src: "http://www.largesound.com/ashborytour/sound/AshboryBYU.mp3",
  artistName: "Mister PG",
  songName: "Bastard Operator from Hell",
  audioElement: createAudioElem()
}

export const audioTracks = [audio1, audio2, audio3]
