import { ItemMenu } from "./ItemMenu.jsx";
import "../assets/css/menu/menu.css"

export function Menu(props) {
  return (
    <section className="menu">
      <ItemMenu
        imagem="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAABmJLR0QA/wD/AP+gvaeTAAACGElEQVRoge3YvWsTcRzH8VfboKIiSBVEVJAOjiJKRRBRFwU3lw5uUvon2KGji/9CBxcRdNHJRdGCVHwapIuTICriEyKIgthK43C/mFyappfkLnep94aDkHwfPp/7/e6bu6MkEfswh/vh80ByEp9QDcdXnMlVUYcMYQZ/RAbuhKMavpsJMYVmG26JRC/jCoZFwqfFzW3PSeOaHMQr9W10tkXMKXwOMW9xpG/qEnIBP0UCX2B/m9i9eBpif+Fiw2/VVY7MqYi2T63hNWxOkLcRsw15s9ggJyN78Fj9zE52UWMy5FbxxErhmRs5gY+hyTsc7aHWIbzWegUyMzKES1gKDe5iNIW6o6FWTfh06JWJkebRehkjKdYfCTWXQ4/bMjByAC9D0e84n2bxJs7hmwwu9gn8CAUXMJZW4TaMhV41IxO9FGserdexpUeBnbAJVxv610Z0R+zEg1BgSXTx5cUUfgct89idNPE4PoTE9ziWhboOOYw3Ik1fcHqthCkshoSH2JWlug7ZgXviu2TFXfRW3BSfFJX+aUxMRVzjDZH2fzxXH619u1Hrkpq+mtZnRM8KRNtpAeO5SOuOcZHmxdUCBmVFYgy3CBxISiNFY90YSfO/otsBkcqroXJF2pD0DKc64tfNipRGikZppGiURopGaaRolEaKRmmkaJRGisa6MdLqIajI77QaiWlvtSKP+iSkF+bzFlDy3/AXWYWcPdCUBCUAAAAASUVORK5CYII"
        texto="Home"
      />
    </section>
  );
}
