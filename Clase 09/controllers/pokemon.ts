import axios from "axios"
import type { Request, Response } from "express"
import type { Pokemon, MultiplePokemonObject } from "../interfaces/pokemons.js"

export const getPokemonsById = async (req: Request, res: Response) => {
   // console.log(req.params)
   const { id } = req.params

   const { data } = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
   res.json({ data })
}

export const getSimplePokemonById = async (req: Request, res: Response) => {
    const { id } = req.params

   const { data } = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)

   const { name, order, sprites, abilities, types }: Pokemon = data

   const bestImg = sprites.other?.dream_world.front_default
   const simplePokemon = { name, order, bestImg, abilities, types }

   res.json({ simplePokemon })
}

export const getMultiplePokemon = async (req: Request, res: Response) => {
    // http://localhost:8080/pokemon/multiple/?limit=5&offset=0
    // console.log(req.query)

    const { limit = 5, offset = 0} = req.query // queries por defecto
    const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/?limit=${limit}&offset=${offset}`)

    // console.log(response.data)

    /*   
    results: [
        { name: 'bulbasaur', url: 'https://pokeapi.co/api/v2/pokemon/1/' },
        { name: 'ivysaur', url: 'https://pokeapi.co/api/v2/pokemon/2/' },
        { name: 'venusaur', url: 'https://pokeapi.co/api/v2/pokemon/3/' },
        { name: 'charmander', url: 'https://pokeapi.co/api/v2/pokemon/4/' },
        { name: 'charmeleon', url: 'https://pokeapi.co/api/v2/pokemon/5/' }
    ]
     */ 

    const pokemonDataURLs: string[] = response.data.results.map((pokemon: MultiplePokemonObject) => pokemon.url)

    const finalPokemonData = await Promise.all(
        pokemonDataURLs.map( async (url: string) => {
            const pokemonData = await axios.get(url);
            return pokemonData.data
        })
    );

    res.json({ finalPokemonData })

}