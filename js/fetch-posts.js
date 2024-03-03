const loadpost = async () => {
    const res = await fetch('https://openapi.programming-hero.com/api/retro-forum/posts');
    const data = await res.json();
    const posts = data.posts;
    displayposts(posts);
}

const displayposts = posts => {

    const postContainer = document.getElementById('disscuss-posts');

    posts.forEach(post => {
        const postCard = document.createElement('div');
        postCard.classList = `w-full flex gap-4 bg-[#F3F3F5] rounded-3xl p-8 mb-6`;
        postCard.innerHTML = `
                    <div class="w-1/12">
                        <img class="w-full h-16 bg-white rounded-2xl" src="${post.image}" alt="">
                    </div>
                        <div class="w-11/12">
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
                                <div class="flex gap-10">
                                    <div class="flex gap-3">
                                        <img src="./images/comments.png" alt="">
                                        <p>${post.comment_count}</p>
                                    </div>
                                    <div class="flex gap-3">
                                        <img src="./images/views.png" alt="">
                                        <p>${post.view_count}</p>
                                    </div>
                                    <div class="flex gap-3">
                                        <img src="./images/clock.png" alt="">
                                        <p>${post.posted_time}</p>
                                    </div>
                                </div>
                                <div>
                                    <img src="./images/mark as read.png" alt="">
                                </div>
                            </div>
                        </div>
        `
        postContainer.appendChild(postCard);
    });

}

loadpost();