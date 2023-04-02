const follow = document.querySelector("#follow-button");
const followerCount = document.querySelector("follower-count");

const message = document.querySelector("#send-message"); 


follow.addEventListener("click", function(){
    follow.innerHTML = `Unfollow`;
    followerCount.innerHTML = `Followers: 1033`; 
});

