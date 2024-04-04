import styles from "./styles.module.css";

export function Avatar({ isComment = false, src }) {
  return (
    <div
      className={
        isComment
          ? styles.profileImgWrapperWithoutBorder
          : styles.profileImgWrapperWithBorder
      }
    >
      <img src={src} />
    </div>
  );
}
