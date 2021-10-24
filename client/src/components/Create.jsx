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

    console.log(input)

    function handleOnChange(e) {
        e.preventDefault();
        const name = e.target.name;
        let value = e.target.value;

        if (name === "types") {
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
        else {
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
                input.types.length !== 0 ? setErrors({ ...errors, [name]: 'A type is required!' }) : setErrors({ ...errors, [name]: '' });
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


    return (
        <div id='mainCreate' className='mainCreate'>
            <Nav />
            <div className='FormDiv'>
                <h1>Create your own Recipe!</h1>
                <div className='formPrincipal'>
                    <form className='Form'>
                        <div className='InputsCreate'>
                            {!errors.title ? null : <div className='ErrorCreate'>{errors.title}</div>}
                            <label className=''>Title:</label>
                            <input type="text" name="title" onChange={(e => handleOnChange(e))} value={input.title} />
                        </div>
                        <div className='InputsCreate'>
                            {!errors.types ? null : <div className='ErrorCreate'>{errors.types}</div>}
                            <label>Types:</label>
                            <div className='typeInputs'>
                                <select id='0' name="types" className='Options' onChange={(e => handleOnChange(e))}>
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
                        <div className='InputsCreate'>
                            {!errors.image ? null : <div className='ErrorCreate'>{errors.image}</div>}
                            <label>Image:</label>
                            <input type="url" name="image" onChange={(e => handleOnChange(e))} value={input.image} placeholder='insert a valid url' />
                        </div>
                        <div className='InputsCreate'>
                            {!errors.summary ? null : <div className='ErrorCreate'>{errors.summary}</div>}
                            <label>Summary:</label>
                            <input type="text" name="summary" onChange={(e => handleOnChange(e))} value={input.summary} />
                        </div>
                        <div className='InputsCreate'>
                            {!errors.spoonacularScore ? null : <div className='ErrorCreate'>{errors.spoonacularScore}</div>}
                            <label>spoonacularScore:</label>
                            <input type="number" name="spoonacularScore" onChange={(e => handleOnChange(e))} value={input.spoonacularScore} />
                        </div>
                        <div className='InputsCreate'>
                            {!errors.healthScore ? null : <div className='ErrorCreate'>{errors.healthScore}</div>}
                            <label>healthScore:</label>
                            <input type="number" name="healthScore" onChange={(e => handleOnChange(e))} value={input.healthScore} />
                        </div>
                        <div className='InputsCreate'>
                            {!errors.steps ? null : <div className='ErrorCreate'>{errors.steps}</div>}
                            <label>Steps:</label>
                            <input type="text" name="steps" onChange={(e => handleOnChange(e))} value={input.steps} />
                        </div>
                        <div >
                            <button className='buttonCreate' disabled={errors.title || errors.image || errors.types || errors.summary || errors.steps || errors.spoonacularScore || errors.healthScore} type="submit" onClick={(e => handlePost(e))}>Create</button>
                        </div>
                    </form>
                    <div className='statsForm'>
                        {!input.title ?
                            <h1 className='noName'>-</h1> :
                            <h1>{input.title && input.title[0].toUpperCase() + input.title.slice(1)}</h1>
                        }
                        {!input.image ?
                            <img src="https://loadslammer.com/wp-content/uploads/2021/01/photo-placeholder-icon-17.jpg" alt="" width='300px' /> :
                            <div className='formStatsImg'>
                                <img src={input.image} alt="" width='300px' />
                            </div>
                        }
                        {!input.types ?
                            <h1 className='noName'>notypes</h1> :
                            <h1>{input.types}</h1>
                        }

                        <h1>spoonacularScore: {input.spoonacularScore}</h1>
                        <h1>healthScore: {input.healthScore}</h1>
                        <h1>Summary: {input.summary}</h1>
                        <h1>Steps: {input.steps}</h1>
                    </div>
                </div>
            </div>
        </div>
    )
}