export const get = async ({ params }) => {
  // export const get = async ({ params }) => {
  // const data = [
  //   { id: params.search }
  // ]

  // var search = page.params.search;
  console.log(`server searchString: ${params}`);
  const search = params.search
  const response = await fetch(`https://itunes.apple.com/search?term=${search}&entity=song`);
  // const itunesSearched = await fetch(`https://itunes.apple.com/search?term=${searched}&entity=song`);
  var songs = []

  // const result = Promise.resolve({ status: 200, body: { songs: [{ id: "1" }, { id: "2" }] } })
  // return result
  // const response = await fetch(`https://itunes.apple.com/earch?term=hello&entity=song`);

  if (response.ok) {
    const data = await response.json();
    songs = data.result
    return {
      status: 200,
      body: { songs }
    }
  }

  return {
    status: response.status,
    body: {
      error: response.statusText,
      songs
    }
  }
}