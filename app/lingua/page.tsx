"use client";
import React, { useState, useEffect } from "react";

interface Item {
  key: string;
  value: string;
}

const Lingua = () => {
  const [data, setData] = useState<Item[]>([]);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/api/lingua");
        const result = await response.json();

        const items: Item[] = result.data;

        setData(items);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  if (data.length == 0) {
    return <p>Loading...</p>;
  }

  return (
    <div className="dark bg-gray-800 min-h-screen flex items-center justify-center">
      <div className="min-w-60 bg-white dark:bg-gray-700 p-8 rounded-lg shadow-md">
        <div>
          <h2 className="text-xl font-bold text-gray-800 dark:text-white mb-4">
            {data[index].key}
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            {data[index].value}
          </p>
        </div>

        <div className="flex justify-between mt-6">
          <button
            onClick={() => setIndex((prev) => prev - 1)}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 focus:outline-none"
          >
            Prev
          </button>
          <button
            onClick={() => setIndex((prev) => prev + 1)}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 focus:outline-none"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default Lingua;
