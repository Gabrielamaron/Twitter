import "../assets/css/menu/menu__item.css";
import "../assets/css/menu/menu__item-imagem.css"

export function ItemMenu(props) {
  return (
    <a href="#" className="menu__item">
      <img className="menu__item-imagem" src={props.imagem}/>
      {props.texto}
    </a>
  )
}