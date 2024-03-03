const loadLatestPost = async () => {
    const res = await fetch('https://openapi.programming-hero.com/api/retro-forum/latest-posts');
    const data = await res.json();
    displayLatestPost(data);
}

const displayLatestPost = (latestPosts) => {
    const latestPostContainer = document.getElementById('latest-posts');

    latestPosts.forEach(latestPost => {
        console.log(latestPost);
        const latestPostCard = document.createElement('div');
        latestPostCard.classList = `w-1/3 border flex flex-col justify-between rounded-3xl p-6`;
        latestPostCard.innerHTML = `
        
            <div>
                <img class="w-full h-48 bg-[#12132D0D] rounded-2xl object-fill" src="${latestPost.cover_image}" alt="">
            </div>
            <div class="flex gap-2 my-3">
                <img src="./images/calender.png" alt="">
                <p>${latestPost.author.posted_date ? latestPost.author.posted_date : "No publish date"}</p>
            </div>
            <div>
                <h3 class="text-[#12132D] font-extrabold text-lg">${latestPost.title}</h3>
                <p class="text-[#12132D99] font-normal text-base my-4">${latestPost.description}</p>
            </div>
            <div class="flex gap-4">
                <img class="w-10 h-10 rounded-full bg-slate-500" src="${latestPost.profile_image}" alt="">
                <div>
                    <p class="text-[#12132D] text-base font-bold">${latestPost.author.name}</p>
                    <p class="text-[#12132D99] text-sm font-normal">${latestPost.author.designation ? latestPost.author.designation : "Unknown"}</p>
                </div>
            </div>        
        `
        latestPostContainer.appendChild(latestPostCard);
    });
}

loadLatestPost();