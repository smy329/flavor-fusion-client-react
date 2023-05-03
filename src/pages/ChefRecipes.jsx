import React, { useEffect, useState } from 'react';
import { toast } from 'react-hot-toast';
import { useParams } from 'react-router-dom';

const ChefRecipes = () => {
  const params = useParams();
  const [chefDetail, setChefDetail] = useState([]);
  const [chefRecipes, setChefRecipes] = useState([]);
  const [favRecipe, setFavRecipe] = useState([]);
  console.log(params);

  useEffect(() => {
    fetch(`http://localhost:3000/chef/${params.id}`)
      .then((response) => response.json())
      .then((data) => setChefDetail(data))
      .catch((error) => console.log(error.message));
  }, []);

  useEffect(() => {
    fetch(`http://localhost:3000/chef-recipes/${params.id}`)
      .then((response) => response.json())
      .then((data) => setChefRecipes(data))
      .catch((error) => console.log(error.message));
  }, []);

  //pushing fav recipes in state array
  const handleAddToFavourite = (id) => {
    toast.success('Recipe added to your favourite list ');
    alert(id);
    setFavRecipe((prevFav) => [...prevFav, id]);
    //setFavRecipe(true);
  };

  //checking that the recipe is available in state or not
  const isFavouriteRecipe = (id) => {
    return favRecipe.includes(id);
  };
  console.log(chefRecipes);
  return (
    <div>
      <div>
        <div className="card card-side bg-base-100 shadow-xl grid grid-cols-2 mb-20">
          <figure>
            <img
              src={chefDetail.chef_image_url}
              alt={chefDetail.chef_name}
              className="max-h-[500px]"
            />
          </figure>
          <div className="card-body flex flex-col justify-between">
            <div>
              <h2 className="card-title text-4xl mb-5">
                {chefDetail.chef_name}
              </h2>
              <hr className="border mb-5" />
              <h6 className=" text-xl mb-2 font-medium">
                Experience:{' '}
                <span className="font-normal text-xl">
                  {chefDetail.years_of_experience}&nbsp;years
                </span>
              </h6>
              <h6 className=" text-xl mb-2 font-medium">
                {' '}
                No. of Recipes:{' '}
                <span className="font-normal text-xl">
                  {chefDetail.num_of_recipes}
                </span>
              </h6>
              <h6 className=" text-xl mb-2 font-medium ">
                Likes:{' '}
                <span className="font-normal text-xl">{chefDetail.likes}</span>
              </h6>
              <h6 className=" text-xl mb-2 font-medium">
                Bio:{' '}
                <span className="font-normal text-xl">{chefDetail.bio}</span>
              </h6>
            </div>
          </div>
        </div>
        <div>
          <div className="mb-12">
            <h1 className="text-5xl font-black text-center mb-8">
              {chefDetail.chef_name}'s Recipes
            </h1>
            <p className="font-semibold text-lg text-gray-500 w-10/12 mx-auto text-center">
              Experience culinary expertise at its finest with our talented
              chef, who will elevate your taste buds to new heights.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-5 ">
            {chefRecipes.map((cr) => (
              <>
                <div className="card card-compact bg-base-100 shadow-lg border border-amber-500">
                  <figure>
                    <img
                      src={cr.recipe_img}
                      alt={cr.recipe_name}
                      className="bg-cover bg-center bg-no-repeat w-full"
                    />
                  </figure>
                  <div className="card-body ">
                    <h2 className="leading-7 flex items-center justify-center font-semibold text-4xl text-amber-500 gap-2">
                      {cr.recipe_name}
                    </h2>
                    <div className="grid grid-cols-1 text-xl px-12 py-5">
                      <div className="mb-10">
                        <p className="text-2xl font-bold mb-3">Ingredients</p>
                        {cr.ingredients.map((ingr) => (
                          <>
                            <li className="list-disc list-item list-inside leading-10">
                              {ingr}
                            </li>
                          </>
                        ))}
                      </div>
                      <div>
                        <p className="text-2xl font-bold mb-3">How To Cook</p>
                        {cr.cooking_method.map((cm) => (
                          <>
                            <li className="list-disc list-item list-inside leading-10">
                              {cm}
                            </li>
                          </>
                        ))}
                      </div>
                    </div>
                    <div className="card-actions justify-end">
                      <button
                        className="theme-btn w-full disabled:bg-gray-400"
                        disabled={isFavouriteRecipe(cr.recipe_id)}
                        onClick={() => {
                          handleAddToFavourite(cr.recipe_id);
                        }}
                      >
                        Add To Favourite
                      </button>
                    </div>
                  </div>
                </div>
              </>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChefRecipes;
