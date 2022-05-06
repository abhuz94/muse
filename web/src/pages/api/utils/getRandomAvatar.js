export default async function getRandomAvatar(name) {
  const res = await fetch(`https://avatars.dicebear.com/api/adventurer/${encodeURIComponent(name)}.svg`);
  const image = await res.text();

  return image;
}
