import { useState } from "react";
import ShopMenu from "../../../Hooks/ShopMenu/ShopMenu";
import { Rating } from "@smastrom/react-rating";
import '@smastrom/react-rating/style.css'

const Students = () => {
  const [setRating] = useState(0)
  const [menu] = ShopMenu();
  return (
    <div className="my-14 max-w-screen-xl mx-auto">
      <div className="text-center">

        <h1 className=" text-5xl"> Students<span className="text-indigo-600"> Feedback</span> </h1>
        <p className=" mt-4">Our Students Are Our Strength, See What They Say <br /> About Us. Learners Have Always Expressed Their <br /> Love For Hablu-Programmer.</p>
      </div>


      <div className="mt-10  grid md:grid-cols-2 gap-8">

        {
          menu.slice(0, 6).map(clipes => <div key={clipes._id} className=""

          >

            <div className="  border border-indigo-600 p-6 ">

              {/*  */}
              <div className="grid md:grid-cols-2">
                {/*  */}

                <div className="">

                  <div className="avatar">
                    <div className="ring-primary w-16 h-16  rounded-full ring">
                    
                      <img src={clipes.image} alt="" />
                    </div>

                    {/*  */}

                    <div className=" ml-5">
                      <h2 className=" text-xl">{clipes.name}</h2>
                      <h2 className=" text-gray-400">Student | Frontend Developer</h2>
                    </div>

                  </div>
                </div>
                {/*  */}
                <div className="">

                  <Rating
                    style={{ maxWidth: 180 }}
                    value={clipes.rating}
                    onChange={setRating}
                  />
                </div>
              </div>
              <p className="-mt-28">Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus error molestiae dicta similique libero iusto ut vero nobis, accusantium sint! Dicta doloremque laudantium accusantium laboriosam architecto soluta voluptatum ex totam sequi dignissimos commodi reprehenderit officiis aliquam repudiandae obcaecati ratione earum rerum ipsam labore rem, ab exercitationem perspiciatis. Necessitatibus, inventore ducimus obcaecati fugit, iste architecto animi voluptatibus ex blanditiis, voluptate nam </p>

            </div>

          </div>)
        }

      </div>
    </div>
  );
};

export default Students;