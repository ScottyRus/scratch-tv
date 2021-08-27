import Scratch from 'scratch3-api';
let frame = 0;
let timeSinceLastRestart = 0;

async function main() {
  let session = await Scratch.UserSession.create("Thought_Bot", "back2front!");
  let cloud = await session.cloudSession("563377430");

  const restartTimeSet = await cloud.set("☁ TimeSinceRestart", 0);
  setTimeout(()=>MainFunction(cloud), 200);
  setTimeout(()=>RestartTime(cloud), 1000);
}

console.log("Online");
main();

async function MainFunction(cloud) {
  if(frame > 320) {
    frame = 1; 
  } else {
    frame ++;
  }
  const frameSet = await cloud.set("☁ Thought_TV-Frame", frame);
  console.log(frame);
  setTimeout(()=>MainFunction(cloud), 200);
}

async function RestartTime(cloud) {
  timeSinceLastRestart += 1;

  const restartTimeSet = await cloud.set("☁ TimeSinceRestart", timeSinceLastRestart);
  
  setTimeout(()=>RestartTime(cloud), 1000);
}