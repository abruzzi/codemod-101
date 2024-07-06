import {ConvertType} from "./types";

function toTitleCase(title: string) {
  return title
    .split(/\s+/)
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}

const convertTitle = (how: ConvertType, title: string) => {
  switch (how) {
    case ConvertType.UPPER:
      return title.toUpperCase();
    case ConvertType.LOWER:
      return title.toLowerCase();
    case ConvertType.TITLE:
      return toTitleCase(title);
    default:
      return title;
  }
};

export { convertTitle };
