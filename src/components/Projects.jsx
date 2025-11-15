import React from 'react';

const Projects = () => {
  return (
    <div>
      <section className=" p-4 flex-col justify-center">
        <div className="flex justify-center my-7">
          <h2 className="text-4xl">Projects</h2>
        </div>
        <div className="my-10 flex flex-col gap-4">
          <ul className="flex justify-around gap-3">
            <li>
              <div className="card bg-base-200 w-50 md:w-75 lg:w-100 shadow-sm">
                <figure>
                  <img
                    src="/src/assets/image.png"
                    className="w-30 h-30 md:w-50 md:h-50"
                    alt="routing"
                  />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">Routing</h2>
                  <p>
                    practice on routing and useState Hook
                  </p>
                  <div className="card-actions justify-center">
                    <button className="btn btn-primary"><a target='blank' href="https://try-routing-924k.vercel.app"> Watch</a></button>
                  </div>
                </div>
              </div>
            </li>
            <li>
              <div className="card bg-base-200 w-50 md:w-75 lg:w-100 shadow-sm">
                <figure>
                  <img
                    src="src/assets/Screenshot 2025-10-30 233228.png"
                    className="w-30 h-30 md:w-50 md:h-50"
                    alt="CRUD"
                  />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">CRUD App</h2>
                  <p>
                    CRUD App (fully javaScrit) 
                  </p>
                  <div className="card-actions justify-center">
                    <button className="btn btn-primary"> <a target='blank' href="https://yousef-sheha12.github.io/CRUD-App/">Watch</a> </button>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default Projects;
