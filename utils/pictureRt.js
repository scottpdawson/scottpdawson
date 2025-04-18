module.exports = (url, alt = "Missing alt text") => {
  const caption =
    alt && alt !== "Missing alt text" ? `<p class="stickyNote">${alt}</p>` : "";
  return `<div class="rt content-image"><img class="lazy" src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 317 317'%3E%3C/svg%3E" data-src="${url}?nf_resize=fit&w=317" alt="${alt}" title="${alt}" />${caption}</div>`;
};
