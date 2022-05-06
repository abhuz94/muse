export default async function clientFetch(url, options = {}) {
  try {
    const res = await fetch(url, options);
    const parsedRes = res.json();

    if (parsedRes.status < 200 || parsedRes.status > 299) { throw new Error(parsedRes); }

    return parsedRes;
  } catch (err) {
    return { isError: true, message: err.message };
  }
}
