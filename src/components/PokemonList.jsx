import { useEffect, useState } from "react"
import { PokemonCard } from "./PokemonCard";
import style from './PokemonList.module.css'
import img from './pokemon2.png'//не нашел img покемонов (

export const PokemonList=()=>{
    const [list,setList]=useState();
    useEffect(()=>{
        async function getPokemons(){
            const data=await fetch('https://pokeapi.co/api/v2/pokemon/').
     then(res=>res.json()).then(res=>{
        setList(res.results)
     })
     
    }
    getPokemons()
     
     
     },[])
     console.log(list)
    return <div className={style.list}>
         {list?.map(item=><PokemonCard title={item.name}  img={img}/>)}
    </div>
}