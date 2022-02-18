import { useEffect } from "react";
import { useParams } from "react-router-dom";
function Detail() {
  const { id } = useParams();
  const getMovie = () => async () => {
    await fetch(
      `https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year`
    ).json();
  };
  useEffect(() => {
    getMovie();
  });
  return <h1>{id}</h1>;
}

export default Detail;
