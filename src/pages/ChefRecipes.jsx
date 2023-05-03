import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const ChefRecipes = () => {
  const params = useParams();
  const [chefDetail, setChefDetail] = useState([]);
  const [chefRecipes, setChefRecipes] = useState([]);
  console.log(params);
  useEffect(() => {
    fetch(`http://localhost:3000/chef/${params.id}`)
      .then((response) => response.json())
      .then((data) => setChefDetail(data))
      .catch((error) => console.log(error.message));
  }, []);
  console.log(chefDetail);
  return (
    <div>
      <div>
        <div>
          <div className="">
            <div className="card card-side bg-base-100 shadow-xl grid grid-cols-2 ">
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
                    <span className="font-normal text-xl">
                      {chefDetail.likes}
                    </span>
                  </h6>
                  <h6 className=" text-xl mb-2 font-medium">
                    Bio:{' '}
                    <span className="font-normal text-xl">
                      {chefDetail.bio}
                    </span>
                  </h6>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default ChefRecipes;
