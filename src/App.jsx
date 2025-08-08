import React from "react";
import Nav from "./components/Nav";

function App() {
  const cards = [
    { title: "Card One", content: "This is the first card content." },
    { title: "Card Two", content: "This is the second card content." },
    { title: "Card Three", content: "This is the third card content." },
    { title: "Card Four", content: "This is the fourth card content." },
    { title: "Card Five", content: "This is the fifth card content." },
    { title: "Card Six", content: "This is the sixth card content." },
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">

      <main className="p-6 text-gray-800 dark:text-gray-200">
        <h2 className="text-2xl font-bold mb-4">Theme Demo</h2>
        <p>
          This is a simple demo page. Toggle the theme to see the dark mode in
          action.
        </p>

        <div className="mt-6 p-4 rounded bg-gray-100 dark:bg-gray-800">
          <p>This box changes color in dark mode too!</p>
        </div>

        {/* Cards Grid */}
        <div className="mt-8 grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {cards.map((card, index) => (
            <div
              key={index}
              className="p-5 rounded-lg shadow-md bg-white dark:bg-gray-800 transition-colors duration-300"
            >
              <h3 className="text-lg font-semibold mb-2">{card.title}</h3>
              <p className="text-gray-600 dark:text-gray-300">{card.content}</p>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

export default App;
