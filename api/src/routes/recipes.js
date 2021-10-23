const { Router } = require("express");
const axios = require('axios');

const router = Router();

router.get("/", (req, res) => {
   axios.get("https://api.spoonacular.com/recipes/complexSearch?apiKey=8be1fbec844c400db5c85a38e275bd9f&addRecipeInformation=true&number=100")
   .then(resp =>  {
       return res.json(resp.data)
   })
})

module.exports = router;