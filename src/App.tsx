import { useState } from "react";
import { SearchList } from "./components/search-list";
import { TodoList } from "./components/todo-list";
import { InfinityScroll } from "./components/infinity-scroll";

const renderComponent = {
  "search-list": <SearchList />,
  "todo-list": <TodoList />,
  "infinity-scroll": <InfinityScroll />,
};
function App() {
  const [component, setComponent] =
    useState<keyof typeof renderComponent>("search-list");

  return (
    <div className="grid grid-cols-4 h-screen gap-4 pt-20 px-10">
      <div className="w-60 col-span-1">
        <h1 className="text-xl">Components list</h1>
        <div className="flex flex-col gap-2 mt-4">
          {Object.keys(renderComponent).map((key) => (
            <button
              key={key}
              onClick={() => setComponent(key as keyof typeof renderComponent)}
              className="border p-2 rounded-lg w-full"
            >
              {key}
            </button>
          ))}
        </div>
      </div>
      <div className="w-full col-span-3">
        <h2 className="text-xl mb-4">Component Preview</h2>
        <div>{renderComponent[component]}</div>
      </div>
    </div>
  );
}

export default App;
