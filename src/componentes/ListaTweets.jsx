import React from "react";
import "../assets/css/tweets/tweets-lista.css";

export function ListaTweets(props) {
  return <ul className="tweets-lista">{props.lista}</ul>;
}
