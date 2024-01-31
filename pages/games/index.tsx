import { getGames } from "../../api/games";
import { GetServerSidePropsContext, NextPage } from "next";
import { GetGamesByCategoryResponse } from "../../api/games/types";
import GameItem from "../../components/GameItem";
import styles from "./GameDetails.module.scss";
import { useRouter } from "next/router";
import { useState } from "react";

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const games = await getGames({
    gameCategories: String(context.query.type).toLowerCase(),
    search: context.query.search ? String(context.query.search) : "",
    pageNumber: context.query.pageNumber ? Number(context.query.pageNumber) : 1,
    pageSize: context.query.pageSize ? Number(context.query.pageSize) : 10,
  });
  return {
    props: {
      games,
    },
  };
}

interface Props {
  games: GetGamesByCategoryResponse;
}

const GameDetailsPage: NextPage<Props> = ({ games }) => {
  const router = useRouter();
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    router.push({
      pathname: router.pathname,
      query: { ...router.query, search, pageNumber: page },
    });
  };

  const handlePageChange = (pageNumber: number) => {
    router.push({
      pathname: router.pathname,
      query: { ...router.query, pageNumber },
    });
  };

  const handleNextPage = () => {
    setPage(page + 1);
    handlePageChange(page + 1);
  };

  const handlePreviousPage = () => {
    if (page > 1) {
      setPage(page - 1);
      handlePageChange(page - 1);
    }
  };

  return (
    <div className={styles.container}>
      <form className={styles.search} onSubmit={handleSearch}>
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className={styles.searchInput}
        />
        <button type="submit">Search</button>
      </form>
      <div className={styles.pagination}>
        {Number(router.query.pageNumber) !== 1 && (
          <button
            onClick={handlePreviousPage}
            className={styles.paginationButton}
          >
            Previous Page
          </button>
        )}
        <button onClick={handleNextPage} className={styles.paginationButton}>
          Next Page
        </button>
      </div>
      <div className={styles.gridContainer}>
        {games.items.map((item) => {
          return (
            <GameItem
              key={item.id}
              thumbnail={item.image.thumbnail.src}
              name={item.gameText}
              provider={item.provider}
            />
          );
        })}
      </div>
    </div>
  );
};

export default GameDetailsPage;
