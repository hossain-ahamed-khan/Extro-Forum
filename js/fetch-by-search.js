const loadSearchPost = async (searchText) => {
    const res = await fetch(`https://openapi.programming-hero.com/api/retro-forum/posts?category=${searchText}`);
    const data = await res.json();
    const posts = data.posts;
    displayposts(posts);
}

const handleSearch = () => {
    const searchField = document.getElementById('search-field');
    const searchText = searchField.value;
    loadSearchPost(searchText);
}