import { TextField } from "@mui/material";
import React from "react";
import "../assets/css/tweets/tweets.css";
import "../assets/css/tweets/tweets-input.css";
import "../assets/css/tweets/tweets-input__campo-de-texto.css";
import { ListaTweets } from "./ListaTweets.jsx";
import { ItemListaTweets } from "./ItemListaTweets";
import { createClient } from "@supabase/supabase-js";

const SUPABASE_ANON_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InR3emN3enNkZW90bG54dnV2dHp0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NDgwMzI4MjMsImV4cCI6MTk2MzYwODgyM30.Cwk3czyRBuBzzycslMxBXL-zxXOZIUkbuk2BqyNB2_g";

const SUPABASE_URL = "https://twzcwzsdeotlnxvuvtzt.supabase.co";

const supabaseClient = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

export function AreaTweets() {
  const [tweetTexto, setTweetTexto] = React.useState("");
  const [listaTweets, setListaTweets] = React.useState([]);

  React.useEffect(() => {
    supabaseClient
      .from("listaTweets")
      .select("*")
      .order("id", { ascending: true })
      .then(({ data }) => {
        data.forEach((item) => {
          const itemListaBancoDados = <ItemListaTweets tweet={item} />;
          setListaTweets((valorAtualLista) => {
            return [...valorAtualLista, itemListaBancoDados];
          });
        });
      });
  }, []);

  function criarNovoTweet(item) {
    const novoTweet = {
      //id gerado pelo supabase;
      de: "Gabrielamaron",
      texto: tweetTexto,
    };

    supabaseClient
      .from("listaTweets")
      .insert(novoTweet)
      .then(({ data }) => {
        const itemLista = <ItemListaTweets tweet={data[0]} />;
        setListaTweets([...listaTweets, itemLista]);
      });

    setTweetTexto("");
  }

  return (
    <section className="tweets">
      <ListaTweets lista={listaTweets} />

      <div className="tweets-input">
        <TextField
          className="tweets-input__campo-de-texto"
          id="filled-basic"
          label="Tweet"
          value={tweetTexto}
          onChange={(evento) => {
            const valor = evento.target.value;
            setTweetTexto(valor);
          }}
          onKeyUp={(evento) => {
            if (evento.key === "Enter") {
              criarNovoTweet();
            }
          }}
          variant="filled"
          placeholder="novo tweet"
        />
      </div>
    </section>
  );
}
