import Fuse from "fuse.js";

const options = {
  // isCaseSensitive: false,
  includeScore: true,
  shouldSort: true,
  // includeMatches: true,
  // findAllMatches: true,
  // minMatchCharLength: 1,
  // location: 0,
  // threshold: 0.6,
  // distance: 100,
  // useExtendedSearch: false,
  // ignoreLocation: false,
  // ignoreFieldNorm: false,
  keys: ["name", "category"],
};

export default function fuzzySearch(list, query) {
  // if (list && list instanceof Array && query && query instanceof String) {
  // console.log(query);
  const fuse = new Fuse(list, options);
  return fuse.search(query);
  // }
}
