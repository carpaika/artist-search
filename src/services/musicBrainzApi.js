export const getArtists = (artist, offset) => {
  return fetch(`http://musicbrainz.org/ws/2/artist?query=${artist}&fmt=json&limit=25&offset=${offset}`)
    .then(res => res.json())
    .then(json => ({
      artists: json.artists,
      count: json.count,
      offset: json.offset
    }));
};

export const getArtist = (id) => {
  return fetch(`http://musicbrainz.org/ws/2/artist/${id}?fmt=json&inc=works`)
    .then(res => res.json())
    .then(json => ({
      artist: json.name,
      works: json.works
    }));
};

