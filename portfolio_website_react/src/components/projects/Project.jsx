import React from "react";
import ProjectCard from "./ProjectCard";
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import RestaurantMenuIcon from '@mui/icons-material/RestaurantMenu';
import WebIcon from "@mui/icons-material/Web";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";

function Project() {
  return (
    <div
      // data-aos="fade-right"
      id="projects"
      className="text-[#a0a8b3] min-h-[800px] mb-20 ml-4 mr-4 md:ml-0 md:mr-0"
    >
      <div>
        <h1 data-aos="fade-up" className="text-center text-6xl font-semibold mb-10">Projects</h1>
        <div className="grid grid-cols-1 gap-16">

          <div data-aos="fade-up">
            <ProjectCard
              logo={
                <AddShoppingCartIcon
                  sx={{ fontSize: "55px" }}
                  className="text-[#03c0c6]"
                ></AddShoppingCartIcon>
              }
              head="E-Commerce Cart"
              cont="Developed and deployed a responsive e-commerce cart using React.js, Redux Toolkit, React Router DOM, and Tailwind CSS, featuring product listing, cart management, and dynamic pricing."
              anc="https://e-commerce-cart-rose.vercel.app/"
              img="./projects/eCommerceCart.png"
            ></ProjectCard>
          </div>

          <div data-aos="fade-up">
            <ProjectCard
              logo={
                <WebIcon
                  sx={{ fontSize: "55px" }}
                  className="text-[#03c0c6]"
                ></WebIcon>
              }
              head="Razorpay UI Replica"
              cont="Developed a clone of the Razorpay website using HTML, CSS, and Tailwind CSS as a framework."
              anc="https://razorpay-clone-virid.vercel.app/"
              img="./projects/razorPay.png"
            ></ProjectCard>
          </div>
          
          <div data-aos="fade-up" className="flex flex-row justify-evenly">
            <ProjectCard
              logo={
                <RestaurantMenuIcon
                  sx={{ fontSize: "55px" }}
                  className="text-[#03c0c6]"
                ></RestaurantMenuIcon>
              }
              head="Food Recipe App"
              cont="A React.js and Tailwind CSS-based app that lets users search dishes and view detailed recipes using TheMealDB API."
              anc="https://food-recipe-app-black.vercel.app/"
              img="./projects/foodRecipeApp.png"
            ></ProjectCard>
          </div>

          <div className="flex flex-row justify-evenly" data-aos="fade-up">
            <ProjectCard
              logo={
                <FormatListBulletedIcon
                  sx={{ fontSize: "55px" }}
                  className="text-[#03c0c6]"
                ></FormatListBulletedIcon>
              }
              head="ToDo List"
              cont="Manage your daily tasks with ease and style. Powered by React and Tailwind CSS for a smooth experience."
              anc="https://to-do-list-sand-mu.vercel.app/"
              img="./projects/toDo.png"
            ></ProjectCard>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Project;
