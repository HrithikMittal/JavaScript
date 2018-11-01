let myArray = ['name',33,true]

let myYoutubevideoOne = {
        title: "Loops in JavaScript",
        videoLength: 15,
        videoCreator: "Adhikansh Mittal",
        videoDescription: "this is a video description and a long one",
}

let myYoutubevideoTwo = {
    title: "Functions in Java",
    videoLength: 7,
    videoCreator: "Adhikansh Mittal",
    videoDescription: "this is a video description and a long one",
}

// console.log(myYoutubevideo);
// console.log(myYoutubevideo.title);

// let newCourse = {
//     title:"Machine learning",
//     price:10000,
//     author:"Adhikansh Mittal",
//     desc:"This is an awesome course",
// }
// console.log(`The new Course of ${newCourse.title} by ${newCourse.author} comes to market of prices ${newCourse.price}`);

// myYoutubevideo.title = 'For Each loop in JS';
// //  todo: In the later directories
// console.log(myYoutubevideo);


let changeVideoLength = function(myObject){
    console.log(`Time of this video is ${myObject.videoLength} and it will increase to ${myObject.videoLength+2}`);
}

changeVideoLength(myYoutubevideoOne);
changeVideoLength(myYoutubevideoTwo);