import Image from "next/image";
import styles from "../styles/background.module.css";

export default function Background() {
  return (
    <div className={styles.background_container}>
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-r from-black to-black/60"></div>
        <div className="absolute inset-x-0 bottom-0 h-[50%] bg-gradient-to-t from-black to-transparent"></div>
        <Image
          className="right-0% top-0%"
          src="/morro-bay-wallpaper.jpeg"
          alt="photo of Morro Bay"
          width={1766}
          height={768}
        />
      </div>
    </div>
  );
}