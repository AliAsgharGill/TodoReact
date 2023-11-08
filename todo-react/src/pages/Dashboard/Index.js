import React, { useState } from "react";

const Dashboard = () => {
  const arr = [
    {
      title: "Intro to css",
      author: "Ali",
    },
    {
      title: "Intro to css, Hello What we do? Hello What we do? ",
      author: "Adam",
    },
  ];
  const [items, setItems] = useState(arr);
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="border border-gray-200 bg-slate-100 shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <table>
          <thead>
            <tr>
              <th>Title</th>
              <th>Author</th>
            </tr>
          </thead>
          <tbody>
            {items.map((item, index) => (
              <tr key={index}>
                <td className="border border-gray-500 px-4 py-2 text-gray-600 font-medium">
                  {item.title}
                </td>
                <td className="border border-gray-500 px-4 py-2 text-gray-600 font-medium">
                  {item.author}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <CreateModal setIsModalOpen={setIsModalOpen} isModalOpen={isModalOpen} />
    </div>
  );
};

export default Dashboard;

function CreateModal({ isModalOpen, setIsModalOpen }) {
  return (
    <div
      id="authentication-modal"
      tabindex="-1"
      aria-hidden="true"
      class={`fixed top-0 left-0 right-0 z-50  w-full p-4 overflow-x-hidden overflow-y-auto
      md:inset-0 h-[calc(100%-1rem)] max-h-full ${isModalOpen && "hidden    "}`}
    >
      <div class="relative w-full max-w-md max-h-full">
        <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
          <button
            type="button"
            class="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
            data-modal-hide="authentication-modal"
          >
            <svg
              class="w-3 h-3"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 14"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
              />
            </svg>
            <span class="sr-only">Close modal</span>
          </button>
          <div class="px-6 py-6 lg:px-8">
            <h3 class="mb-4 text-xl font-medium text-gray-900 dark:text-white">
              Sign in to our platform
            </h3>
            <form class="space-y-6" action="#">
              <button
                type="submit"
                class="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Login to your account
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
