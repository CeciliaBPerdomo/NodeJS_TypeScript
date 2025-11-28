import express from "express"
import { getMultiplePokemon, getPokemonsById, getSimplePokemonById } from "./controllers/pokemon.js"

const app = express()
const PORT = 8080

app.use(express.json()) // --> middleware

app.get("/pokemon/full/:id", getPokemonsById)
app.get("/pokemon/simple/:id", getSimplePokemonById)
app.get("/pokemon/multiple", getMultiplePokemon)

app.listen(PORT, () => { console.log(`El puerto ${PORT} está activo`) })