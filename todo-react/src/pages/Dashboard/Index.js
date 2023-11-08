import React from "react";

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
            {arr.map((item, index) => (
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
    </div>
  );
};

export default Dashboard;
