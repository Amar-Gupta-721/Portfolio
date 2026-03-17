import React from "react";
import Ecommerce from "../assets/Projects/Ecommerce.png";
import CityCare from "../assets/Projects/CityCare.png";
import Blog_Web_App from "../assets/Projects/Blog_Web_App.png";
import Sorting_Algorithm_Visualizer from "../assets/Projects/Sorting_Algorithm_Visualizer.png";
import PixoraAI from "../assets/Projects/PixoraAI.png";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Project = () => {
  return (
    <div
      id="projects"
      className="border-b border-neutral-900 pb-4 xl:px-52 lg:px-24 md:px-24"
    >
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-20 text-center text-4xl"
      >
        Projects
      </motion.h2>
      <div>
        <div key="pixora_ai" className="mb-8 flex flex-wrap lg:justify-center">
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -100 }}
            transition={{ duration: 1 }}
            className="mt-2 mb-4 w-full lg:w-1/4 md:pr-5"
          >
            <img
              className="shadow-md shadow-neutral-100"
              height={200}
              width={200}
              src={PixoraAI}
              alt="pixora_ai"
            />
          </motion.div>
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: 100 }}
            transition={{ duration: 1 }}
            className="w-full max-w-full lg:w-3/4"
          >
            <h6 className="mb-2 font-semibold text-xl underline">
              <Link to={"https://pixora-ai-ntgh.vercel.app/"}>
                Pixora AI – AI Image Processing SaaS Platform
              </Link>
            </h6>
            <p className="mb-4 text-neutral-400">
              Pixora AI is a full-stack SaaS application built with Next.js that enables users to upload and transform images using AI-powered features such as background removal, object recoloring, generative fill, and image restoration. The platform includes secure authentication with Clerk, a credit-based system where users receive free credits and can purchase more via Stripe payments, and efficient media handling using Cloudinary. Designed with a modern responsive UI using Tailwind CSS and deployed on Vercel, Pixora AI demonstrates real-world full-stack development, third-party integrations, and scalable SaaS architecture.
            </p>
            <div>
              <span className="mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-neutral-50 hover:bg-white hover:text-neutral-900">
                <Link to="https://pixora-ai-ntgh.vercel.app/">Live Demo</Link>
              </span>
              <span className="mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-neutral-50 hover:bg-white hover:text-neutral-900">
                <Link to="https://github.com/Amar-Gupta-721/pixora_ai">
                  Source Code
                </Link>
              </span>
            </div>
            <br />
            <span className="mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-900">
              Next.js
            </span>
            <span className="mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-900">
              TypeScript
            </span>
            <span className="mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-900">
              MongoDB
            </span>
            <span className="mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-900">
              Tailwind CSS
            </span>
            <span className="mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-900">
              Zod
            </span>
            <span className="mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-900">
              Cloudinary
            </span>
            <span className="mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-900">
              Stripe
            </span>
            <span className="mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-900">
              Clerk
            </span>
            <span className="mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-900">
              Vercel
            </span>
          </motion.div>
        </div>

        <div key="citycare" className="mb-8 flex flex-wrap lg:justify-center">
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -100 }}
            transition={{ duration: 1 }}
            className="mt-2 mb-4 w-full lg:w-1/4 md:pr-5"
          >
            <img
              className="shadow-md shadow-neutral-100"
              height={200}
              width={200}
              src={CityCare}
              alt="CityCare"
            />
          </motion.div>
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: 100 }}
            transition={{ duration: 1 }}
            className="w-full max-w-full lg:w-3/4"
          >
            <h6 className="mb-2 font-semibold underline text-xl">
              <Link to={"https://city-care-teal.vercel.app/"}>
                CityCare – Civic Complaint Management System
              </Link>
            </h6>
            <p className="mb-4 text-neutral-400">
              CityCare is a full-stack MERN application that enables citizens to
              register and track civic complaints while allowing authorities to
              manage and resolve issues efficiently. The platform features
              role-based access (Citizen, Officer), secure JWT & Google OAuth
              2.0 authentication, email verification, and a responsive UI built
              with Tailwind CSS. Designed with RESTful APIs and deployed on
              cloud platforms, CityCare showcases real-world full-stack
              development and deployment skills.
            </p>
            <div>
              <span className="mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-neutral-50 hover:bg-white hover:text-neutral-900">
                <Link to="https://city-care-teal.vercel.app/">Live Demo</Link>
              </span>
              <span className="mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-neutral-50 hover:bg-white hover:text-neutral-900">
                <Link to="https://github.com/Amar-Gupta-721/City-Care">
                  Source Code
                </Link>
              </span>
            </div>
            <br />
            <span className="mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-900">
              Tailwind&nbsp;CSS
            </span>
            <span className="mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-900">
              React.js
            </span>
            <span className="mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-900">
              Node.js
            </span>
            <span className="mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-900">
              Express.js
            </span>
            <span className="mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-900">
              MongoDB
            </span>
            <span className="mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-900">
              REST&nbsp;APIs
            </span>
            <span className="mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-900">
              JWT
            </span>
            <span className="mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-900">
              Google&nbsp;OAuth&nbsp;2.0
            </span>
            <span className="mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-900">
              Vercel
            </span>
            <span className="mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-900">
              Render
            </span>
          </motion.div>
        </div>

        <div
          key="ShopSmart_Ecommerce_Platform"
          className="mb-8 flex flex-wrap lg:justify-center"
        >
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -100 }}
            transition={{ duration: 1 }}
            className="mt-2 mb-4 w-full lg:w-1/4 md:pr-5"
          >
            <img
              className="shadow-md shadow-neutral-100"
              height={200}
              width={200}
              src={Ecommerce}
              alt="ShopSmart_Ecommerce_Platform"
            />
          </motion.div>
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: 100 }}
            transition={{ duration: 1 }}
            className="w-full max-w-full lg:w-3/4"
          >
            <h6 className="mb-2 font-semibold underline text-xl">
              <Link to={"https://shop-smart-ecommerce-mern.vercel.app/"}>
                ShopSmart Ecommerce Platform
              </Link>
            </h6>
            <p className="mb-4 text-neutral-400">
              ShopSmart is a full-featured ecommerce web application built using
              the MERN stack (MongoDB, Express.js, React.js, Node.js) with
              Tailwind CSS and ShadCN UI for sleek, responsive design. The
              project implements Redux Toolkit for state management and JWT for
              secure authentication and authorization. Cloudinary is used for
              efficient media storage, and PayPal integration ensures smooth
              online transactions. With features like product browsing, cart
              management, and order tracking, ShopSmart offers a seamless user
              experience across all devices, showcasing my skills in both
              frontend and backend development.
            </p>
            <div>
              <span className="mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-neutral-50 hover:bg-white hover:text-neutral-900">
                <Link to="https://shop-smart-ecommerce-mern.vercel.app/">
                  Live Demo
                </Link>
              </span>
              <span className="mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-neutral-50 hover:bg-white hover:text-neutral-900">
                <Link to="https://github.com/Amar-Gupta-721/ShopSmart-A-Full-Stack-Ecommerce-Website-MERN-">
                  Source Code
                </Link>
              </span>
            </div>
            <br />
            <span className="mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-900">
              Tailwind&nbsp;CSS
            </span>
            <span className="mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-900">
              React.js
            </span>
            <span className="mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-900">
              Node.js
            </span>
            <span className="mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-900">
              Express.js
            </span>
            <span className="mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-900">
              MongoDB
            </span>
            <span className="mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-900">
              Redux&nbsp;Toolkit
            </span>
            <span className="mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-900">
              JWT
            </span>
            <span className="mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-900">
              Cloudinary
            </span>
            <span className="mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-900">
              PayPal
            </span>
            <span className="mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-900">
              Render
            </span>
          </motion.div>
        </div>

        <div
          key="blog_web_app"
          className="mb-8 flex flex-wrap lg:justify-center"
        >
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -100 }}
            transition={{ duration: 1 }}
            className="mt-2 mb-4 w-full lg:w-1/4 md:pr-5"
          >
            <img
              className="shadow-md shadow-neutral-100"
              height={200}
              width={200}
              src={Blog_Web_App}
              alt="Blog_Web_App"
            />
          </motion.div>
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: 100 }}
            transition={{ duration: 1 }}
            className="w-full max-w-full lg:w-3/4"
          >
            <h6 className="mb-2 font-semibold underline text-xl">
              <Link to={"https://blogapp-mu-puce.vercel.app/"}>
                Blog Web App
              </Link>
            </h6>
            <p className="mb-4 text-neutral-400">
              This Blog Web App is built using Tailwind CSS, JavaScript,
              React.js, Redux Toolkit and Appwrite. The application enables
              users to create, read, update, and delete blog posts, as well as
              browse posts from other users. It includes secure user
              authentication, email verification, and password recovery
              features. This project demonstrates my ability to develop
              responsive, full-stack web applications with a focus on user
              experience and security.
            </p>
            <div>
              <span className="mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-neutral-50 hover:bg-white hover:text-neutral-900">
                <Link to="https://blogapp-mu-puce.vercel.app/">Live Demo</Link>
              </span>
              <span className="mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-neutral-50 hover:bg-white hover:text-neutral-900">
                <Link to="https://github.com/Amar-Gupta-721/Blog_Web_App">
                  Source Code
                </Link>
              </span>
            </div>
            <br />
            <span className="mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-900">
              Tailwind&nbsp;CSS
            </span>
            <span className="mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-900">
              React.js
            </span>
            <span className="mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-900">
              Redux&nbsp;Toolkit
            </span>
            <span className="mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-900">
              Appwrite
            </span>
            <span className="mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-900">
              Vercel
            </span>
          </motion.div>
        </div>

        <div
          key="Sorting_Algorithm_Visualizer"
          className="mb-8 flex flex-wrap lg:justify-center"
        >
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -100 }}
            transition={{ duration: 1 }}
            className="mt-2 mb-4 w-full lg:w-1/4 md:pr-5"
          >
            <img
              className="shadow-md shadow-neutral-800"
              height={200}
              width={200}
              src={Sorting_Algorithm_Visualizer}
              alt="Sorting_Algorithm_Visualizer"
            />
          </motion.div>
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: 100 }}
            transition={{ duration: 1 }}
            className="w-full max-w-full lg:w-3/4"
          >
            <h6 className="mb-2 font-semibold text-xl underline">
              <Link to={"https://sorting-visualizer-ten-xi.vercel.app/"}>
                Sorting Algorithm Visualizer
              </Link>
            </h6>
            <p className="mb-4 text-neutral-400">
              This application is built using React.js and CSS. It allows users
              to visualize various sorting algorithms, such as Bubble Sort,
              Quick Sort, and Merge Sort, with real-time animations. Users can
              control the speed of the visualizations and adjust the size of the
              dataset. This project demonstrates my ability to build interactive
              web applications that simplify complex algorithms through visual
              representation.
            </p>
            <div>
              <span className="mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-neutral-50 hover:bg-white hover:text-neutral-900">
                <Link to="https://sorting-visualizer-ten-xi.vercel.app/">
                  Live Demo
                </Link>
              </span>
              <span className="mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-neutral-50 hover:bg-white hover:text-neutral-900">
                <Link to="https://github.com/Amar-Gupta-721/Sorting_Visualizer">
                  Source Code
                </Link>
              </span>
            </div>
            <br />
            <span className="mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-900">
              CSS
            </span>
            <span className="mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-900">
              React.js
            </span>
            <span className="mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-900">
              Vercel
            </span>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Project;
