import styles from "./Sidebar.module.scss";
import { LobbyItem } from "../../api/games/types";
import Link from "next/link";

interface Props {
  data: LobbyItem[];
}

export default function Sidebar({ data }: Props) {
  return (
    <div className={styles.sidebar}>
      {data?.map((item) => (
        <Link href={`/games?type=${item.name}`} key={item.id}>
          <a className={styles.link}>{item.name}</a>
        </Link>
      ))}
    </div>
  );
}
