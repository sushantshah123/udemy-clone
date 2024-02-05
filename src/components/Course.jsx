// import React, { useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// // import courses from '../utils/data';
// import { Link } from "react-router-dom";
// import { addToCart } from "../redux/cartSlice";
// import { data } from "autoprefixer";

// const Course = ({ search, activeTab }) => {
//   const [selectedCourse, setSelectedCourse] = useState(null);
//   const dispatch = useDispatch();

//   const handleSelectChange = (event) => {
//     const courseId = parseInt(event.target.value, 10);
//     const selectedCourse = activeTab.find((course) => course.id === courseId);
//     setSelectedCourse(selectedCourse);
//   };

//   return (
//     <>
//       <div className="grid xs:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 py-5">
//         {activeTab
//           .filter((item) => {
//             return search.toLocaleLowerCase() === ""
              // ? item
//               : item.course_name.toLocaleLowerCase().includes(search);
//           })
//           .sort()
//           .map((items) => {
//             const {
//               id,
//               image,
//               course_name,
//               creator,
//               actual_price,
//               discounted_price,
//               rating_count,
//               rating_star,
//               category,
//             } = items;
//             return (
//               <div
//                 key={id}
//                 className="bg-gray-200 px-2 p-2 rounded-md flex flex-col gap-1"
//               >
//                 <div className="w-full">
//                   <img src={image} alt="" className="w-full" />
//                 </div>
//                 <h3 className="font-bold">{course_name}</h3>
//                 <h2 className="text-sm">{creator}</h2>
//                 {/* <h2>{category}</h2> */}
//                 <div className="flex gap-3 text-sm">
//                   <p>{rating_star}</p>
//                   <p>({rating_count})</p>
//                   <p>{category}</p>
//                 </div>
//                 <div className="flex justify-between items-center gap-2">
//                 <div>
//                     <p className="text-sm font-bold">${discounted_price}</p>
//                     <p className="text-sm font-bold">${discounted_price}</p>
//                     <p className="text-sm font-normal line-through">
//                       ${actual_price}
//                     </p>
//                   </div>
//                   <select className="outline-none rounded-sm bg-gray-200 border border-gray-500 font-mono" value={selectedCourse?.id} onChange={handleSelectChange}>
//                     <option value="option1">1month course</option>
//                     <option value="option2">3month course</option>
//                     <option value="option3">6month course</option>
//                   </select>
//                 </div>
//                 <div className="w-full flex gap-2">
//                   <Link to={`/singlecourse/${id}`} className="w-1/2">
//                     <button className="border-2 border-gray-800 text-black py-1 px-3 w-full">
//                       See Details
//                     </button>
//                   </Link>
//                   <button
//                     className="bg-black text-white py-1 px-3 w-1/2"
//                     onClick={() =>
//                       dispatch(
//                         addToCart({
//                           id: id,
//                           course: course_name,
//                           price: actual_price,
//                           image: image,
//                           //  quantity,
//                         })
//                       )
//                     }
//                   >
//                     Add to Cart
//                   </button>
//                 </div>
//               </div>
//             );
//           })}
//       </div>
//     </>
//   );
// };

// export default Course;




import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { addToCart, subTotal } from "../redux/cartSlice";

const Course = ({ search, activeTab }) => {
  const [selectedDurations, setSelectedDurations] = useState({});

  const dispatch = useDispatch();

  const handleSelectChange = (event, courseId) => {
    const selectedLevel = event.target.value;

    // Update the selected levels for each course
    setSelectedDurations((prevSelectedDurations) => ({
      ...prevSelectedDurations,   //this line can be removed and it still works fine
      [courseId]: selectedLevel,
    }));

  };

  return (
    <>
      <div className="grid xs:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 py-5">
        {activeTab
          .filter((item) => {
            return search.toLocaleLowerCase() === ""
              ? item
              : item.course_name.toLocaleLowerCase().includes(search);
          })
          .sort()
          .map((course) => {
            const {
              id,
              image,
              course_name,
              creator,
              price,
              rating_count,
              rating_star,
              category,
            } = course;

            // Find the selected level for the current course
            const selectedLevel = selectedDurations[id] || "Beginner";
            const selectedPrice = price.find((level) => level.name === selectedLevel);

            return (
              <div
                key={id}
                className="bg-gray-200 px-2 p-2 rounded-md flex flex-col gap-1"
              >
                {/* ... (existing JSX code) */}
                <div className="w-full">
                  <img src={image} alt="" className="w-full" />
                </div>
                <h3 className="font-bold">{course_name}</h3>
                <h2 className="text-sm">{creator}</h2>
                {/* <h2>{category}</h2> */}
                <div className="flex gap-3 text-sm">
                  <p>{rating_star}</p>
                  <p>({rating_count})</p>
                  <p>{category}</p>
                </div>
                <div className="flex justify-between items-center my-2">
                  <div>
                    <p className="text-sm font-bold">${selectedPrice.prices}</p>
                  </div>
                  <select
                    className="outline-none rounded-sm bg-gray-200 border border-gray-500 font-mono"
                    value={selectedLevel}
                    onChange={(e) => handleSelectChange(e, id)}
                  >
                    {price.map((level) => (
                      <option key={level.id} value={level.name}>
                        {level.name} course
                      </option>
                    ))}
                  </select>
                </div>
                {/* ... (existing JSX code) */}
                <div className="w-full flex gap-2">
                  <Link to={`/singlecourse/${id}`} className="w-1/2">
                    <button className="border-2 border-gray-800 text-black py-1 px-3 w-full">
                      See Details
                    </button>
                  </Link>
                  <button
                    className="bg-black text-white py-1 px-3 w-1/2"
                    onClick={() =>{
                      dispatch(
                        addToCart({
                          id: id,
                          course: course_name,
                          price: selectedPrice.prices,
                          image: image,
                          //  quantity,
                        })
                      )
                      dispatch(subTotal())
                    }
                    }
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            );
          })}
      </div>
    </>
  );
};

export default Course;
