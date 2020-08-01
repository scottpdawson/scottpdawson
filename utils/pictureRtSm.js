module.exports = (url, alt = "Missing alt text") => {
    return `<div class="rt sm"><img src="${url}?nf_resize=fit&w=317" alt="${alt}" title="${alt}" /></div>`;
};