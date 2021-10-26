import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { GetRecipeById, changePopup, resetDetail } from "../actions";
import { useEffect } from "react";
import './Details.css';

export default function Details() {
    const dispatch = useDispatch();
    const recipeDetails = useSelector((state) => state.detail);
    const idDetail = useSelector((state) => state.id);

    useEffect(() => {
        dispatch(resetDetail());
    }, [])

    useEffect(() => {
        dispatch(GetRecipeById(idDetail));
    }, [dispatch]);

    function handleClickPopup(bool) {
        dispatch(changePopup(bool))
    }

    return (
        <div className='allDet'>
            <div className='darken'></div>
            {recipeDetails.length !== 0 ? (
                <div>
                    <div id='mainDetail' className='mainDetail'>
                        <div id='bigCard' className='bigCard'>
                            <button onClick={() => handleClickPopup(false)} className='closeBut'>X</button>
                            <h1 className='pokeNameDet'>{recipeDetails.title}</h1>
                            <div className='imgDetailDiv'>
                                <div className='specImg' id={recipeDetails.types[0]}>
                                    <img className='imgDetail' src={recipeDetails.image} alt="" height='263px' />
                                </div>
                                <div className='detailedInfo'>
                                    <h3 className='stats' id='pokeTypeDet2'>{recipeDetails.types}</h3>
                                    <div className='contChart'><h3 className='statHP'>{recipeDetails.summary}</h3></div>
                                    {/* {
                                        recipeDetails.Fuerza ?
                                            <div className='contChart'> <h3 className='chart' style={{ width: recipeDetails.Fuerza }}>FORCE:</h3> <h3 className='statForce'> {recipeDetails.Fuerza}</h3></div>
                                            :
                                            <div className='contChart'> <h3 className='chart' style={{ width: recipeDetails[0].force }}>FORCE:</h3> <h3 className='statForce'> {recipeDetails[0].force}</h3></div>
                                    }
                                    {
                                        recipeDetails.Defensa ?
                                            <div className='contChart'> <h3 className='chart' style={{ width: recipeDetails.Defensa }}>DEFENSE:</h3> <h3 className='statDefense'>{recipeDetails.Defensa}</h3></div>
                                            :
                                            <div className='contChart'> <h3 className='chart' style={{ width: recipeDetails[0].defense }}>DEFENSE:</h3> <h3 className='statDefense'> {recipeDetails[0].defense}</h3></div>
                                    }
                                    {
                                        recipeDetails.Velocidad ?
                                            <div className='contChart'> <h3 className='chart' style={{ width: recipeDetails.Velocidad }}>SPEED: </h3> <h3 className='statSpeed'>{recipeDetails.Velocidad} </h3></div>
                                            :
                                            <div className='contChart'> <h3 className='chart' style={{ width: recipeDetails[0].speed }}>SPEED: </h3> <h3 className='statSpeed'>{recipeDetails[0].speed} </h3></div>
                                    }
                                    {
                                        recipeDetails.Altura ?
                                            <div className='contChart'> <h3 className='chart' style={{ width: recipeDetails.Altura }}>HEIGHT: </h3> <h3 className='statHeight'>{recipeDetails.Altura} </h3></div>
                                            :
                                            <div className='contChart'> <h3 className='chart' style={{ width: recipeDetails[0].height }}>HEIGHT: </h3> <h3 className='statHeight'>{recipeDetails[0].height} </h3></div>
                                    }
                                    {
                                        recipeDetails.Peso ?
                                            <div className='contChart'> <h3 className='chart' style={{ width: recipeDetails.Peso }}>WEIGHT: </h3> <h3 className='statWeight'>{recipeDetails.Peso} </h3></div>
                                            :
                                            <div className='contChart'> <h3 className='chart' style={{ width: recipeDetails[0].weight }}>WEIGHT: </h3> <h3 className='statWeight'>{recipeDetails[0].weight} </h3></div>
                                    } */}

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ) : (
                <div>
                    <img src="https://media3.giphy.com/media/IQebREsGFRXmo/200.gif" alt="" />
                </div>
            )}
        </div>
    )
};

