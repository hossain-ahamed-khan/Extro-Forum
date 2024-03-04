// mark as read functionality

const handleMarkAsRead = () => {
    const postTitle = document.querySelectorAll("#post-title");
    console.log(postTitle);
    // const title = postTitle.innerText;
    // console.log(title);

    const viewCount = document.getElementById("view-count");
    const view = viewCount.innerText;

    const markAsReadContainer = document.getElementById('mark-as-read-posts');
    const readPost = document.createElement('div');
    readPost.classList = `w-full flex bg-white rounded-2xl p-4 mb-4`;
    readPost.innerHTML = `
            <p class="w-2/3 text-[#12132D] font-semibold text-base">${title}</p>
                    <div class="w-1/3 flex items-center justify-end gap-2">
                        <img class="w-8 h-7" src="./images/views.png" alt="">
                        <p>${view}</p>
                    </div>
        `
    markAsReadContainer.appendChild(readPost);

}