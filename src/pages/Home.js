import React from "react";
import CocktailList from "../components/CocktailList";
import SearchForm from "../components/SearchForm";
import Pagination from "../components/Pagination";
import { useGlobalContext } from "../context";

const Home = () => {
  const { postsPerPage, paginate, cocktails } = useGlobalContext();

  return (
    <main>
      <SearchForm />
      <CocktailList />
      <Pagination
        postsPerPage={postsPerPage}
        totalPosts={cocktails.length}
        paginate={paginate}
      />
    </main>
  );
};

export default Home;
