import style from "./PokemonCard.module.css";
export const PokemonCard =({title,img})=>{
    return <div className={style.card}>
        <img src={img} className={style.img} alt="" />
        <div className={style.title}>{title}</div>
    </div>
}