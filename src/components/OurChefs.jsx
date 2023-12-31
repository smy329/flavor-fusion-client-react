import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

const OurChefs = () => {
  const [chefs, setChefs] = useState([]);

  useEffect(() => {
    fetch('https://chef-recipe-server-two.vercel.app/chefs')
      .then((response) => response.json())
      .then((data) => setChefs(data))
      .catch((error) => console.log(error.message));
  }, []);
  return (
    <div className="mb-24 p-5">
      <div className="mb-12">
        <h1 className="text-5xl font-black text-center mb-8">Meet Our Chefs</h1>
        <p className="font-semibold text-lg text-gray-500 w-10/12 mx-auto text-center">
          Experience culinary expertise at its finest with our talented chef,
          who will elevate your taste buds to new heights.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
        {chefs.map((chef) => (
          <>
            <div className="">
              <div className="card card-side bg-base-100 shadow-xl grid grid-cols-1 md:grid-cols-2">
                <figure>
                  <LazyLoadImage
                    src={chef.chef_image_url}
                    alt="our chefs"
                    className="max-h-80 w-full"
                    effect="blur"
                  />
                </figure>
                <div className="card-body flex flex-col justify-between">
                  <div>
                    <h2 className="card-title">{chef.chef_name}</h2>
                    <h6>Experience: {chef.years_of_experience} &nbsp; years</h6>
                    <h6>No. of Recipes: {chef.num_of_recipes}</h6>
                    <h6>Likes: {chef.likes}</h6>
                  </div>
                  <div className="card-actions">
                    <button className="theme-btn w-full">
                      <Link to={`/chef-recipes/${chef.id}`}>View Recipes</Link>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </>
        ))}
      </div>
    </div>
  );
};

export default OurChefs;
