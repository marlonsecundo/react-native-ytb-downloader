import RNFetchBlob from 'rn-fetch-blob';
import youtubedl from '@microlink/youtube-dl';
/*
const video = youtubedl('https://www.youtube.com/watch?v=UaxOqGnSySw');

video.on('info', (info) => {
  console.tron.log(info);
});
*/

const { dirs } = RNFetchBlob.fs;

console.tron.log(dirs);
