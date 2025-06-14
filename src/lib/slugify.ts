export function slugify(text: string): string {
  return text
    .toString()
    .toLowerCase()
    .trim()
    .replace(/\s+/g, "-") // Replace spaces with -
    .replace(/[^\w\-ء-ی]+/g, "") // Remove non-word characters but allow Persian
    .replace(/\-\-+/g, "-"); // Replace multiple - with single -
}
