export default function slugify(str = '') {
  return str.trim().toLowerCase().replace(/\s/, '-');
}
