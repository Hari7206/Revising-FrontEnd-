const reelsData = [
  {
    username: "aarav.verma",
    profile: "https://i.pinimg.com/736x/1f/e5/a0/1fe5a0d8604e7309b8efc203fef5ea48.jpg",
    isFollowed: false,
    caption: "Silence, greenery, and my own thoughts 🌲 #CalmMind #BoyLife #NatureEscape",
    isLiked: false,
    likeCount: 8421,
    shareCount: 764,
    commentCount: 219,
    video: "./video/arav.mp4"
  },
  {
    username: "itsme_sakshi",
    profile: "https://i.pinimg.com/736x/d2/e1/30/d2e130c8dc8497f650d15e43dca0f008.jpg",
    isFollowed: true,
    caption: "Creating scenes from random moments 🎞️ #EditingLife #ReelCreator #GirlEnergy",
    isLiked: true,
    likeCount: "245000",
    shareCount: "12K",
    commentCount: "4.3K",
    video: "./video/model.mp4"
  },
  {
    username: "rahul.codes",
    profile: "https://i.pinimg.com/736x/14/9f/69/149f699b0e9584f836f3f3ccd54b6859.jpg",
    isFollowed: false,
    caption: "Creating worlds with just a keyboard ⌨️✨ #BuildStuff #CodeVibes #Programmer",
    isLiked: false,
    likeCount: 3190,
    shareCount: 410,
    commentCount: 128,
    video: "./video/rahul.mp4"
  },
  {
    username: "neha_sharma21",
    profile: "https://i.pinimg.com/736x/75/f8/f8/75f8f89220265d4e225619e00d411304.jpg",
    isFollowed: true,
    caption: "Chaos? No. It’s choreography 😌✨ #DanceGroup #TeamWork #VibeCheck",
    isLiked: true,
    likeCount: "12000",
    shareCount: "84K",
    commentCount: "26K",
    video: "./video/neha.mp4"
  },
  {
    username: "devwithrohit",
    profile: "https://i.pinimg.com/736x/c9/ef/8b/c9ef8bf4a50ef8d51ecaf756ecfb7550.jpg",
    isFollowed: false,
    caption: "While they scroll, I deploy. 🚀 #DevBoy #CodeLife #BuildMode",
    isLiked: false,
    likeCount: 9780,
    shareCount: 1200,
    commentCount: 342,
    video: "./video/rohit.mp4"
  },
  {
    username: "travelwithanya",
    profile: "https://i.pinimg.com/1200x/68/41/a5/6841a55d33c666365a7c37b99e233b7e.jpg",
    isFollowed: true,
    caption: "She listens to the wind more than the noise 🌬️🌿 #NatureFeels #PeacefulLife #GreenEnergy",
    isLiked: true,
    likeCount: "67000",
    shareCount: "5.8K",
    commentCount: "2.1K",
    video: "./video/anya.mp4"
  },
  {
    username: "vibe_with_adi",
    profile: "https://i.pinimg.com/736x/09/0a/cd/090acd30dd34508a5845b4502ad82be8.jpg",
    isFollowed: false,
    caption: "Walking like I already made it. 😌⚡ #ConfidentVibes #BoyPerspective #GlowUp",
    isLiked: false,
    likeCount: 980,
    shareCount: 120,
    commentCount: 34,
    video: "./video/adi.mp4"
  },
  {
    username: "fitnessbyriya",
    profile: "https://i.pinimg.com/736x/04/9c/0c/049c0cb6c19e9c3039d9a26514ab347a.jpg",
    isFollowed: true,
    caption: "Off duty but still on drip 😌🔥 #StreetStyle #SleepMode #FashionBoy",
    isLiked: true,
    likeCount: "430000",
    shareCount: "29K",
    commentCount: "9.7K",
    video: "./video/fitness.mp4"
  },
  {
    username: "techie_naman",
    profile: "https://i.pinimg.com/736x/c9/19/4c/c9194c8bbe2d479712ab97902ea22f23.jpg",
    isFollowed: false,
    caption: "Turning complex into simple 😌 #CodingTutorial #TechMadeEasy #Developer",
    isLiked: false,
    likeCount: 5600,
    shareCount: 890,
    commentCount: 276,
    video: "./video/amaan.mp4"
  },
  {
    username: "soulful_sana",
    profile: "https://i.pinimg.com/1200x/db/fc/45/dbfc4561ccb42558cca86ca5770aa0bc.jpg",
    isFollowed: true,
    caption: "A little glam never hurts 💄💖 #GRWMVibes #GetReady #Confidence",
    isLiked: true,
    likeCount: "91000",
    shareCount: "7.4K",
    commentCount: "2.8K",
    video: "./video/sana.mp4"
  },
  {
    username: "mr_dynamic",
    profile: "https://i.pinimg.com/736x/fa/74/18/fa7418a5117cb5d5b81ea9c53f33d683.jpg",
    isFollowed: false,
    caption: "No slow mode. Only beast mode. ⚡🔥 #DynamicEdit #BoyVibes #EnergyOnTo",
    isLiked: false,
    likeCount: 2400,
    shareCount: 350,
    commentCount: 102,
    video: "./video/dynamic.mp4"
  },
  {
    username: "fashionwithtara",
    profile: "https://i.pinimg.com/736x/de/4d/c3/de4dc3097820c173452755ad43fe4f69.jpg",
    isFollowed: true,
    caption: "Main character. No auditions needed. ✨🔥 #MainGirl #MainCharacterEnergy #Unbothered",
    isLiked: true,
    likeCount: "520000",
    shareCount: "36K",
    commentCount: "11K",
    video: "./video/tara.mp4"
  },
  {
    username: "codewithhari",
    profile: "https://i.pinimg.com/736x/f1/e4/4a/f1e44a8ee618e7739ebd73a3f4c11cbe.jpg",
    isFollowed: false,
    caption: "Turning ideas into interfaces 💻✨ #WebDev #TechVibes #BoyPerspective",
    isLiked: false,
    likeCount: 7321,
    shareCount: 980,
    commentCount: 301,
    video: "./video/hari.mp4"
  },
  {
    username: "dailyvibes_krish",
    profile: "https://i.pinimg.com/736x/4f/36/83/4f3683db6422d67d6963aa4dd39a2e34.jpg",
    isFollowed: true,
    caption: "5 minutes. Zero excuses. Full creativity. ✂️✨ #QuickCraft #DIYVibes #CreativeMode",
    isLiked: true,
    likeCount: "18000",
    shareCount: "1.6K",
    commentCount: 640,
    video: "./video/craft.mp4"
  },
  {
    username: "urban_riya",
    profile: "https://i.pinimg.com/1200x/2f/7d/43/2f7d433351cd38242815897fe1f847ae.jpg",
    isFollowed: false,
    caption: "Main character… in a comedy 😌✨ #FunnyGirl #ChaoticEnergy #GirlVibes",
    isLiked: false,
    likeCount: 654,
    shareCount: 92,
    commentCount: 21,
    video: "./video/riyaa.mp4"
  }
];


let allRells = document.querySelector('.allReels');

function showData(){
  let sum = ''
reelsData.forEach(function(dets , idx){
sum += `      <div class="reels">
              <video src="${dets.video}"  loop ></video>
                <div class="bottom">
                  <div class="user">
                    <img src="${dets.profile}" alt="">
                      <h1 class="userName">${dets.username}</h1>
                 <button class="follow"  id="${idx}">${dets.isFollowed ? 'Following' : 'Follow'}</button>
                  </div>
                  <h3>${dets.caption}</h3>
                </div>
                <div class="right">
                   <div class="like" id=${idx}>
                 ${dets.isLiked 
        ? `<i class="ri-heart-3-fill" id="liked"></i>` 
        : `<i class="ri-heart-3-line"></i>`}   </i>
                     <h3>${dets.likeCount}</h3>
                   </div>
                   <div class="Comment">
                     <i class="ri-chat-3-line" ></i>
                     <h3>${dets.commentCount}</h3>
                   </div>
                   <div class="share">
                     <i class="ri-send-ins-line"></i>
                     <h3>${dets.shareCount}</h3>
                   </div>
                   <div class="menu">
                    <i class="ri-more-2-fill"></i>
                   </div>
                </div>
            </div>
          `
          
})
allRells.innerHTML = sum

}
allRells.addEventListener('click' , function (dets) {
if(dets.target.classList.contains('like')){
  if (!reelsData[dets.target.id].isLiked) {
    reelsData[dets.target.id].likeCount++;
    reelsData[dets.target.id].isLiked  = true;
}
  else {
    reelsData[dets.target.id].likeCount--;
    reelsData[dets.target.id].isLiked  = false;;
  }
  showData()
}

if(  dets.target.classList.contains('follow')){
if(!reelsData[dets.target.id].isFollowed){
  reelsData[dets.target.id].isFollowed  = true;
}
else{
    reelsData[dets.target.id].isFollowed  = false;
}
showData()
}


})




showData()