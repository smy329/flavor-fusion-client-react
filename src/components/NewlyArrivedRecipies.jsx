import React, { useEffect, useState } from 'react';

const NewlyArrivedRecipies = () => {
  const [newlyRecipes, setNewlyRecipes] = useState([]);
  useEffect(() => {
    fetch('http://localhost:3000/recipes')
      .then((response) => response.json())
      .then((data) => getAllRecipes(data))
      .catch((error) => {
        console.log(error.message);
      });
  }, []);

  const getAllRecipes = (allRecipes) => {
    var randomRecipeArray = [];
    console.log(allRecipes);

    console.log('random one', randomRecipe);
    for (var i = 0; i < 6; i++) {
      var randomRecipe =
        allRecipes[Math.floor(Math.random() * allRecipes.length)];
      randomRecipeArray.push(randomRecipe);
    }
    console.log(randomRecipeArray);
    return setNewlyRecipes(randomRecipeArray);
  };

  // const randomRecipe =
  //   recipeData[Math.floor(Math.random() * recipeData.length)];
  // console.log(randomRecip);

  return (
    <div className="mb-24">
      <div className="mb-12">
        <h1 className="text-5xl font-black text-center mb-8">
          Newly Arrived Recipes
        </h1>
        <p className="font-semibold text-lg text-gray-500 w-10/12 mx-auto text-center">
          Our Test Kitchen and Photo Studio teams have been busy trying new
          recipes. Check out these dinners, desserts, snacks and more—and save
          them to your recipe box, too!
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
        {newlyRecipes.map((nr) => (
          <>
            <div className="card w-96 bg-base-100 shadow-xl">
              {/* <figure>
                <img
                  src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
                  alt="Shoes"
                />
              </figure> */}
              <div className="card-body">
                <h2 className="card-title">
                  {nr.recipe_name}
                  <div className="badge badge-error">NEW</div>
                </h2>
                <p>
                  {nr.ingredients.slice(0, 5).map((ingr) => (
                    <>
                      <ul className="list-disc list-item list-inside">
                        {ingr}
                      </ul>
                    </>
                  ))}
                </p>
                <div className="card-actions justify-end">
                  <div className="badge badge-warning">{nr.rating}</div>
                </div>
              </div>
            </div>
          </>
        ))}
      </div>

      <div></div>
    </div>
  );
};

export default NewlyArrivedRecipies;
