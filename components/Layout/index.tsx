import React, { useEffect, useState } from "react";
import Sidebar from "../Sidebar";
import { LobbyItem } from "../../api/games/types";
import styles from "./Layout.module.scss";
import { getGameCategories } from "../../api/games";

interface Props {
  children: React.ReactNode;
}

const Layout = ({ children }: Props) => {
  const [sidebarCategories, setSidebarCategories] = useState<LobbyItem[]>([]);

  useEffect(() => {
    const getCategories = async () => {
      const categories = await getGameCategories();
      setSidebarCategories(categories.menu.lobby.items);
    };

    getCategories();
  }, []);

  return (
    <div className={styles.layout}>
      <Sidebar data={sidebarCategories} />
      <div className={styles.content}>{children}</div>
    </div>
  );
};

export default Layout;
