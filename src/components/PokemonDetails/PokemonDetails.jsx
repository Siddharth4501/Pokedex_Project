import { useParams } from "react-router-dom";
import './PokemonDetails.css';
import usePokemonDetails from "../../hooks/usePokemonDetails";
import { useState } from "react";
function PokemonDetails({ pokemonName }) {
    const {id} = useParams();
    const [pokemon] = usePokemonDetails(id, pokemonName);
    
    return (
        <div className="pokemon-details-wrapper">
            
            <img className="pokemon-details-image" src={pokemon.image} />
            <div className="pokemon-details-name"><span>{pokemon.name}</span></div>
            {!pokemon.name?'Loading.....':
            <div>
                <div className="pokemon-details-name">Height: {pokemon.height}</div>
                <div className="pokemon-details-name">Weight: {pokemon.weight}</div>
            </div>}
            <div className="pokemon-details-types">
                {pokemon.types && pokemon.types.map((t) => <div key={t}> {t} </div>)}
            </div>
            <br />
            {
                pokemon.types && pokemon.similarPokemons && 
                <div>
                    <b className="poke-typys-heading">More {pokemon.types[0]} type pokemons:</b>
                    
                    <ul>
                        {pokemon.similarPokemons.map((p) => <li key={p.pokemon.url} rowSpan={5}>{p.pokemon.name}</li>)}
                        
                    </ul>
                    
                    
                </div>
            }
        </div>
    );
}

export default PokemonDetails;