import Image from "next/image";
import styles from "./GameItem.module.scss";

interface Props {
  thumbnail: string;
  name: string;
  provider: string;
}

export default function GameItem({ thumbnail, name, provider }: Props) {
  return (
    <div className={styles.container}>
      <Image
        width={200}
        height={200}
        objectFit="cover"
        alt="gameThumbnail"
        src={thumbnail}
      />
      <h3>{name}</h3>
      <span>{provider}</span>
    </div>
  );
}
