import React from "react";
import Nav from './Nav';
import './Create.css'
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { getTypes, postRecipe } from "../actions";
import { useHistory } from "react-router";

export default function Detail() {

    const history = useHistory();
    const dispatch = useDispatch();
    const allTypes = useSelector((state) => state.types);
    const [errors, setErrors] = useState({
        title: '!',
        summary: '!',
        image: '!',
        spoonacularScore: '!',
        healthScore: '!',
        steps: '!',
        types: '!',
    });

    const [input, setInput] = React.useState({
        title: '',
        types: [],
        image: '',
        spoonacularScore: 0,
        healthScore: 0,
        steps: [],
        summary: ''
    });

    function handleOnChange(e) {
        e.preventDefault();
        const name = e.target.name;
        let value = e.target.value;

        if (name === "types" && input.types.includes(value) === false) {
            value = [...input.types, value];
            setInput({
                ...input,
                [name]: value
            })
        }
        else if (name === "steps") {
            setInput({
                ...input,
                [name]: value
            })
        }
        else if (name !== "steps" && name !== "types") {
            setInput({
                ...input,
                [name]: value
            })
        }


        switch (name) {
            case 'title':
                value.length < 1 ? setErrors({ ...errors, [name]: 'A name is required!' }) : setErrors({ ...errors, [name]: '' });
                break;
            case 'image':
                value.slice(0, 4) !== 'http' ? setErrors({ ...errors, [name]: 'A valid url is required!' }) : setErrors({ ...errors, [name]: '' });
                break;
            case 'types':
                input.types.length === 0 ? setErrors({ ...errors, [name]: 'A type is required!' }) : setErrors({ ...errors, [name]: '' });
                break;
            case 'spoonacularScore':
                value < 1 ? setErrors({ ...errors, [name]: 'Must be higher than 0!' }) : setErrors({ ...errors, [name]: '' });
                break;
            case 'healthScore':
                value < 1 ? setErrors({ ...errors, [name]: 'Must be higher than 0!' }) : setErrors({ ...errors, [name]: '' });
                break;
            case 'steps':
                input.steps.length === 0 ? setErrors({ ...errors, [name]: 'Steps are required!' }) : setErrors({ ...errors, [name]: '' });
                break;
            case 'summary':
                value.length < 1 ? setErrors({ ...errors, [name]: 'A summary is required!' }) : setErrors({ ...errors, [name]: '' });
                break;
            default:
                break;
        }
    };

    function handlePost(e) {
        e.preventDefault();
        dispatch(postRecipe(input))
        alert("Recipe succesfully created")
        history.push('/home')
    }

    useEffect(() => {
        dispatch(getTypes());
    }, [dispatch]);

    let typesNames = [];
    if (input.types.length !== 0) {
        for (let i = 0; i < input.types.length; i++) {
            for (let k = 0; k < allTypes.length; k++) {
                if (input.types[i] == allTypes[k].id) {
                    typesNames.push(allTypes[k].name[0].toUpperCase() + allTypes[k].name.slice(1) + " ")
                }
            }
        }
    }
    return (
        <div id='mainCreate' className='mainCreate'>
            <Nav />
            <div className='FormDiv'>
                <h1 className="newRecipe">New recipe</h1>
                <div className='formPrincipal'>
                    <form className='Form'>
                        <div className='InputsCreate' id="formTitle">
                            {!errors.title ? null : <div className='ErrorCreate'>{errors.title}</div>}
                            <label className=''>Title</label>
                            <input type="text" name="title" onChange={(e => handleOnChange(e))} value={input.title} />
                        </div>
                        <div className='InputsCreate' id="formImage">
                            {!errors.image ? null : <div className='ErrorCreate'>{errors.image}</div>}
                            <label>Image</label>
                            <input type="url" name="image" onChange={(e => handleOnChange(e))} value={input.image} placeholder='insert a valid url' />
                        </div>

                        <div className='InputsCreate' id="formSummary">
                            {!errors.summary ? null : <div className='ErrorCreate'>{errors.summary}</div>}
                            <label>Summary</label>
                            <textarea type="text" name="summary" onChange={(e => handleOnChange(e))} value={input.summary} className="textareaSummary" />
                        </div>
                        <div className='InputsCreate' id="formSteps">
                            {!errors.steps ? null : <div className='ErrorCreate'>{errors.steps}</div>}
                            <label>Steps</label>
                            <textarea type="text" name="steps" onChange={(e => handleOnChange(e))} value={input.steps} className="textareaSummary" />
                        </div>

                        <div className='InputsCreate' id="formSpoon">
                            {!errors.spoonacularScore ? null : <div className='ErrorCreate'>{errors.spoonacularScore}</div>}
                            <label>SpoonacularScore</label>
                            <input type="number" name="spoonacularScore" onChange={(e => handleOnChange(e))} value={input.spoonacularScore} />
                        </div>
                        <div className='InputsCreate' id="formHealth">
                            {!errors.healthScore ? null : <div className='ErrorCreate'>{errors.healthScore}</div>}
                            <label>HealthScore</label>
                            <input type="number" name="healthScore" onChange={(e => handleOnChange(e))} value={input.healthScore} />
                        </div>

                        <div className='InputsCreate' id="formTypes">
                            {!errors.types ? null : <div className='ErrorCreate'>{errors.types}</div>}
                            <label>Types</label>
                            <div className='typeInputs'>
                                <select id='0' name="types" className='Options' onChange={(e => handleOnChange(e))} >
                                    <option value="">Select Types</option>
                                    {
                                        allTypes && allTypes.map(t => {
                                            let typeF = t.name[0].toUpperCase() + t.name.slice(1);
                                            return (
                                                <option name="types" value={t.id}>{typeF}</option>
                                            )
                                        })
                                    }
                                </select>
                            </div>
                        </div>
                        <div >
                            <button className='buttonCreate' disabled={errors.title || errors.image || errors.types || errors.summary || errors.steps || errors.spoonacularScore || errors.healthScore} type="submit" onClick={(e => handlePost(e))}>Create</button>
                        </div>
                    </form>
                    <div className="showStats">
                        <div className="showTitle">
                            <h1>{input.title}</h1>
                        </div>
                        <div className="showImageNSummary">
                            <div>
                                {
                                    input.image.length > 0 ?
                                    <img src={input.image} alt="Insert An Image" width="500px" height="300px" className="showImage" /> :
                                    ""

                                }
                            </div>
                            <div className="showSummary">
                                <p>{input.summary}</p>
                            </div>
                        </div>
                        <div className="showScoreNTypesWithSteps">
                            <div className="showScoreNTypes">
                                <div className="showScores">
                                    <div>
                                        {
                                            input.spoonacularScore ?
                                                <h3>SpoonacularScore: {input.spoonacularScore}</h3> :
                                                <h3></h3>
                                        }
                                    </div>
                                    <div>
                                        {
                                            input.healthScore ?
                                                <h3>HealthScore: {input.healthScore}</h3> :
                                                <h3></h3>
                                        }
                                    </div>
                                </div>
                                <div className="showTypes">
                                    {typesNames && typesNames.map(t => {
                                        return (
                                            <h3 className="typesShowedEach">{t}</h3>
                                        )
                                    })}
                                </div>
                            </div>
                            <div className="showSteps">
                                {
                                    input.steps.length > 0 ?
                                        <h3>Preparation:</h3> :
                                        <h3></h3>
                                }
                                {input.steps}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}