module.exports = (url, alt = "Missing alt text") => {
    const caption = (alt && alt !== "Missing alt text") ? `<p class="stickyNote">${alt}</p>` : '';
    return `<div style='position: relative'><img src="${url}?nf_resize=fit&w=700" alt="${alt}" title="${alt}" />${caption}</div>`;
};