export default async function sleep(ms = 1300) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}
