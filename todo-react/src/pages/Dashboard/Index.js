import React, { useState } from "react";
import Input from "../../component/Input/Index";
import Button from "../../component/Button/Index";

const Dashboard = () => {
  const arr = [
    {
      id: 1,
      title: "Intro to css",
      author: "Ali",
    },
    {
      id: 2,
      title: "Intro to css, Hello What we do? Hello What we do? ",
      author: "Adam",
    },
  ];
  const [items, setItems] = useState(arr);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const handleClick = (e) => {
    e.preventDefault();
    let obj = {
      id: items.length + 1,
      title: title,
      author: author,
    };

    if (e.target["author"].value === "" || e.target["title"].value === "") {
      alert("Please Enter Values");
    } else {
      items.push(obj);
      setItems([...items]);
      setIsModalOpen(false);
      reset();
    }
  };
  const handleEdit = (id) => {
    const find = items.find((item) => item.id === id);
    console.log("Find==> ", find);
    setTitle(find.title);
    setAuthor(find.author);
    setIsModalOpen(true);
  };
  const reset = () => {
    setAuthor("");
    setAuthor("");
  };
  const handleModalClose = () => {
    setIsModalOpen();
    reset();
  };
  const handleDelete = (id) => {
    const filter = items.filter((item) => item.id !== id);
    setItems(filter);
  };
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="border border-gray-200 bg-slate-100 shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <Button
          value="Add"
          className="bg-blue-700 font-bold rounded-lg m-3 w-1/5 p-3 cursor-pointer text-white shadow-md"
          onClick={() => setIsModalOpen(true)}
        />
        <table>
          <thead>
            <tr>
              <th>Title</th>
              <th>Author</th>
              <th>Actions</th>
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
                <td className="border border-gray-500 px-4 py-2 text-gray-600 font-medium">
                  <div className="flex justify-center item-center">
                    <Button
                      type="submit"
                      value="Edit"
                      onClick={() => handleEdit(item.id)}
                      className="p-4 bg-blue-700 text-white font-bold rounded-lg m-3   cursor-pointer"
                    />
                    <Button
                      value="Delete"
                      className="p-4 bg-red-700 text-white font-bold rounded-lg m-3  cursor-pointer "
                      onClick={() => {
                        handleDelete(item.id);
                      }}
                    />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <CreateModal
        handleModalClose={handleModalClose}
        isModalOpen={isModalOpen}
        handleClick={handleClick}
        title={title}
        setTitle={setTitle}
        author={author}
        setAuthor={setAuthor}
      />
    </div>
  );
};

export default Dashboard;

function CreateModal({
  isModalOpen,
  handleModalClose,
  handleClick,
  title,
  setTitle,
  author,
  setAuthor,
}) {
  return (
    <div
      id="authentication-modal"
      tabIndex="-1"
      aria-hidden="true"
      className={`fixed flex justify-center items-center z-50  w-full p-4 overflow-x-hidden  overflow-y-auto
      md:inset-0 h-[calc(100%-1rem)] max-h-full ${isModalOpen ? "" : "hidden"}`}
    >
      <div className="relative w-full max-w-md max-h-full">
        <div className="relative bg-gray-300 rounded-lg shadow ">
          <button
            onClick={handleModalClose}
            type="button"
            className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
            data-modal-hide="authentication-modal"
          >
            <svg
              className="w-3 h-3"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
              />
            </svg>
          </button>

          <div className="px-6 py-6 lg:px-8">
            <form className="space-y-6" onSubmit={handleClick}>
              <div className="mb-6">
                <Input
                  labelClassName="font-bold text-orang-500"
                  label="Title"
                  name="title"
                  value={title}
                  id="title"
                  onChange={(e) => {
                    setTitle(e.target.value);
                  }}
                  className="w-full  text-blue-700 bg-white hover:bg-white-800 focus:ring-4 focus:outline-none focus:ring-white-300 font-medium rounded-lg text-sm px-5 py-2.5  dark:bg-white-600 dark:hover:bg-white-700 dark:focus:ring-white-800"
                />
              </div>
              <div className="mb-6">
                <Input
                  labelClassName="font-bold text-orang-500"
                  label="Author"
                  value={author}
                  name="author"
                  id="author"
                  onChange={(e) => setAuthor(e.target.value)}
                  className="w-full text-blue-700 bg-white hover:bg-white-800 focus:ring-4 focus:outline-none focus:ring-white-300 font-medium rounded-lg text-sm px-5 py-2.5  dark:bg-white-600 dark:hover:bg-white-700 dark:focus:ring-white-800"
                />
                <div className="flex justify-center item-center">
                  <Button
                    type="submit"
                    value="Add"
                    className="p-4 bg-blue-700 text-white font-bold rounded-lg m-3 w-1/3   cursor-pointer"
                  />
                  <Button
                    value="Cancel"
                    className="p-4 bg-red-700 text-white font-bold rounded-lg m-3 w-1/3 cursor-pointer "
                    onClick={handleModalClose}
                  />
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
