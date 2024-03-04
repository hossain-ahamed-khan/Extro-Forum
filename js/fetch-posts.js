const loadpost = async () => {
    const res = await fetch('https://openapi.programming-hero.com/api/retro-forum/posts');
    const data = await res.json();
    const posts = data.posts;
    displayposts(posts);
}

const displayposts = posts => {

    const postContainer = document.getElementById('disscuss-posts');

    postContainer.textContent = '';

    posts.forEach(post => {
        const postCard = document.createElement('div');
        postCard.classList = `w-full flex gap-2 lg:gap-4 bg-[#F3F3F5] rounded-3xl p-4 lg:p-8 mb-6`;
        postCard.innerHTML = `
            <div class="w-2/12 lg:w-1/12">
                <img class="w-full h-14 lg:h-16 bg-white rounded-lg lg:rounded-2xl" src="${post.image}" alt="">
            </div>
            <div class="w-10/12 lg:w-11/12">
                <div class="flex gap-6 text-[#12132DCC] font-semibold text-sm">
                    <p># ${post.category}</p>
                    <p>Author : ${post.author.name}</p>
                </div>
                <div class="mt-2 mb-4 pb-4 border-b-2 border-dashed">
                    <h3 class="text-[#12132D] font-bold text-xl">${post.title}
                    </h3>
                    <p class="text-[#12132D99] font-normal text-base mt-4">${post.description}</p>
                </div>
                <div class="flex justify-between">
                    <div class="flex gap-3 lg:gap-10">
                        <div class="flex gap-1 lg:gap-3">
                            <img class="w-6 h-6" src="./images/comments.png" alt="">
                            <p>${post.comment_count}</p>
                        </div>
                        <div class="flex gap-1 lg:gap-3">
                            <img class="w-6 h-6" src="./images/views.png" alt="">
                            <p>${post.view_count}</p>
                        </div>
                        <div class="flex gap-1 lg:gap-3">
                            <img class="w-6 h-6" src="./images/clock.png" alt="">
                            <p>${post.posted_time}</p>
                        </div>
                    </div>
                    <div>
                    <button onclick="handleMarkAsRead(${post.id})"><img src="./images/mark as read.png" alt=""></button>
                    </div>
                </div>
            </div>

        `
        postContainer.appendChild(postCard);
    });

    // -------stop loading spinner--------
    setTimeout(() => {
        toggleSpinner(false);
    }, "2000");

}

loadpost();



