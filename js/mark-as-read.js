
const handleMarkAsRead = async (id) => {
    const res = await fetch(`https://openapi.programming-hero.com/api/retro-forum/posts?id=${id}`);
    const data = await res.json();
    const posts = data.posts;

    let count = 0;

    posts.forEach(post => {

        if (post.id === id) {
            count += 1;
            const markAsReadContainer = document.getElementById('mark-as-read-posts');
            const readPost = document.createElement('div');
            readPost.classList = `w-full flex bg-white rounded-2xl p-4 mb-4`;
            readPost.innerHTML = `
            <p class="w-2/3 text-[#12132D] font-semibold text-base">${post.title}</p>
                    <div class="w-1/3 flex items-center justify-end gap-2">
                        <img class="w-8 h-7" src="./images/views.png" alt="">
                        <p>${post.view_count}</p>
                    </div>
        `
            markAsReadContainer.appendChild(readPost);


            const readCount = document.getElementById("read-count");
            const countText = readCount.innerText;
            const countInt = parseInt(countText);
            const sum = countInt + count;
            readCount.innerText = sum;
        }


    });
}