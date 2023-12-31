import React, { useEffect, useState } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import Spinner from './Spinner';

const NewlyArrivedRecipies = () => {
  const [newlyRecipes, setNewlyRecipes] = useState([]);
  useEffect(() => {
    fetch('https://chef-recipe-server-two.vercel.app/recipes')
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
    <div className="mb-24 p-2">
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
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 ">
        {!newlyRecipes ? <Spinner /> : ''}
        {newlyRecipes.map((nr) => (
          <>
            <div className="card w-96 bg-base-100 shadow-xl">
              <figure>
                <LazyLoadImage
                  src={nr.recipe_img}
                  alt={nr.recipe_name}
                  effect="blur"
                  className="w-full h-72 object-cover"
                />
              </figure>
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
                  <div className="badge badge-warning p-3 text-base font-medium">
                    {nr.rating}
                  </div>
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
