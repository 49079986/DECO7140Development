// base.js

export function setupSearch() {
    const input = document.getElementById("search-input");
    const button = document.getElementById("search-button");
    if (!input || !button) return;

    button.addEventListener("click", performSearch);
}

function performSearch() {
    const keyword = document
        .getElementById("search-input")
        .value.trim()
        .toLowerCase();
    const resultsContainer = document.getElementById("search-results");
    resultsContainer.innerHTML = "";

    if (!keyword) {
        resultsContainer.textContent = "Please enter the key words";
        return;
    }

    const matches = [];
    const elements = Array.from(
        document.body.querySelectorAll("*:not(script):not(style)")
    );

    elements.forEach((el) => {
        if (
            el.children.length === 0 &&
            el.textContent.toLowerCase().includes(keyword)
        ) {
            matches.push(el.textContent.trim());
        }
    });

    const resultsText =
        matches.length === 0
            ? `No relevant content about "${keyword}" was found.`
            : `Find ${matches.length} related items:`;

    const resultList = document.createElement("div");
    resultList.innerHTML = `<p class = "z-1">${resultsText}</p>`;

    if (matches.length > 0) {
        const ul = document.createElement("ul");
        matches.slice(0, 5).forEach((text) => {
            const li = document.createElement("li");
            li.textContent = text;
            ul.appendChild(li);
        });
        resultList.appendChild(ul);
    }

    resultsContainer.appendChild(resultList);

    // 创建推荐卡片
    const card = document.createElement("div");
    card.className = "search-card";

    card.innerHTML = `
    <p class="s-h3">You may interest in...</p>
    <div class="btn-group z-1" id="recommend-links"></div>`;

    const linksContainer = card.querySelector("#recommend-links");

    const relatedLinks = [
        { title: `Practices Regarding ${keyword}`, url: `/recipes/${keyword}` },
        { title: `Introduction to ingredients containing ${keyword}`, url: `/ingredients/${keyword}` },
        {
            title: `More comments about ${keyword}`,
            url: `/reviews?query=${keyword}`,
        },
    ];

    relatedLinks.forEach((link) => {
        const a = document.createElement("a");
        a.className = "btn-link";
        a.href = link.url;
        a.textContent = link.title;
        linksContainer.appendChild(a);
    });

    resultsContainer.appendChild(card);
}
