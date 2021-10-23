const { Router } = require("express");
const axios = require('axios');
const { Recipe, Types } = require("../db.js");

const { YOUR_API_KEY } = process.env;
const router = Router();

router.get("/", (req, res) => {

    const name = req.query.query;
    var recipesApiName = [];
    var recipesDbName = [];
    var recipesApi = [];
    var recipesDb = [];

    if (name) {
        axios.get(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${YOUR_API_KEY}&addRecipeInformation=true&number=100&query=${name}`)
            .then(respApi => {

                recipesApiName = respApi.data.results.map(r => {
                    let diets;
                    r.vegetarian ? diets = r.diets.concat("vegetarian") : diets = r.diets;
                    return {
                        title: r.title,
                        summary: r.summary,
                        spoonacularScore: r.spoonacularScore,
                        healthScore: r.healthScore,
                        steps: r.analyzedInstructions[0],
                        image: r.image,
                        diets: diets,
                    }
                });
                return (Recipe.findAll({
                    where: { title: name },
                    include: {
                        model: Types,
                        attributes: ['name']
                    }
                }))
            })
            .then(respDb => {
                recipesDbName = respDb;
                const allRecipesName = [...recipesApiName, ...recipesDbName];
                return res.json(allRecipesName)
            })
    }
    else {
        axios.get(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${YOUR_API_KEY}&addRecipeInformation=true&number=100`)
            .then(resp => {
                recipesApi = resp.data.results.map(r => {
                    let diets;
                    r.vegetarian ? diets = r.diets.concat("vegetarian") : diets = r.diets;
                    return {
                        title: r.title,
                        summary: r.summary,
                        spoonacularScore: r.spoonacularScore,
                        healthScore: r.healthScore,
                        steps: r.analyzedInstructions[0],
                        image: r.image,
                        diets: diets
                    }
                });
                return (Recipe.findAll({
                    include: {
                        model: Types,
                        attributes: ['name']
                    }
                }))
            })
            .then(respDb => {
                recipesDb = respDb;
                const allRecipes = [...recipesApi, ...recipesDb];
                return res.json(allRecipes)
            })
    }
})

router.get("/:id", (req, res) => {
    const { id } = req.params;
    axios.get(`https://api.spoonacular.com/recipes/${id}/information?apiKey=${YOUR_API_KEY}`)
        .then(respId => {
            let diets;
            respId.data.vegetarian ? diets = respId.data.diets.concat("vegetarian") : diets = respId.data.diets;
            const infoId = {
                title: respId.data.title,
                summary: respId.data.summary,
                spoonacularScore: respId.data.spoonacularScore,
                healthScore: respId.data.healthScore,
                steps: respId.data.analyzedInstructions[0].steps,
                image: respId.data.image,
                diets: diets
            }
            return res.json(infoId)
        })
})

router.post('/', (req, res) => {
    const {
        title,
        summary,
        spoonacularScore,
        healthScore,
        steps,
        image,
        diets
    } = req.body;

    Recipe.create({
        title,
        summary,
        spoonacularScore,
        healthScore,
        steps,
        image
    })
        .then(recipe => {
            recipe.addTypes(diets)
                .then(() => {
                    return res.send("OK")
                });
        });
})

module.exports = router;