import React from "react";

export const SearchBar = () => {
  return (
    <>
      <form className="w=[500px] relative">
        <div className="relative flex justify-between">
          <input
            type="search"
            placeholder="Search Taks"
            className="w-full p-4 rounded-full bg-[#1F2223]"
          />
          <div className="absolute right-1 top-1/2 -translate-y-1/2 p-4 bg-[#1F2223] rounded-full">
            <svg
              className="w-6 h-6 text-gray-500 dark:text-gray-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
          </div>
        </div>
      </form>
    </>
  );
};
