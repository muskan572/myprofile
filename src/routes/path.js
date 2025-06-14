function path(root, subLink) {
  return `${root}${subLink}`;
}

const ROOTS_DASH = "/Portfolio";
export const PATH_DASH = {
  root: ROOTS_DASH,
  home: path(ROOTS_DASH, "/home"),
  about: path(ROOTS_DASH, "/about"),
  education: path(ROOTS_DASH, "/education"),
};
