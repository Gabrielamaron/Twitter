import "../assets/css/tweets/tweets-lista__item.css";

export function ItemListaTweets(props) {
  const tweet = props.tweet;
  const id = tweet.id;
  const de = tweet.de;
  const texto = tweet.texto;

  return (
    <li className="tweets-lista__item" key={id}>
      <div>
        <img src={`https://github.com/${de}.png`}/>
        <h2>{de}</h2>
      </div>
      <p>{texto}</p>
    </li>
  );
}
