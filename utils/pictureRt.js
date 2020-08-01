module.exports = (url, alt = "Missing alt text") => {
    const caption = (alt && alt !== "Missing alt text") ? `<p class="stickyNote">${alt}</p>` : '';
    return `<div class="rt"><img src="${url}?nf_resize=fit&w=317" alt="${alt}" title="${alt}" />${caption}</div>`;
};