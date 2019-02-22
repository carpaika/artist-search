export const getArtists = (artist, offset) => {
  return fetch(`http://musicbrainz.org/ws/2/artist?query=${artist}&fmt=json&limit=25&offset=${offset}`)
    .then(res => res.json())
    .then(json => ({
      artists: json.artists,
      count: json.count,
      offset: json.offset
    }));
};

