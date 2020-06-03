function createArticle() {

    // get input elements
    const inputTitle = document.getElementById('createTitle');
    const inputContent = document.getElementById('createContent');

    if (inputTitle.value && inputContent.value) {

        const section = document.getElementById('articles');

        const article = document.createElement('article');
        const articleTitle = document.createElement('h3', );
        const articleContent = document.createElement('p');

        articleTitle.textContent = inputTitle.value;
        articleContent.textContent = inputContent.value;

        article.appendChild(articleTitle);
        article.appendChild(articleContent);
        section.appendChild(article);

        inputTitle.value = '';
        inputContent.value = '';
    }
}