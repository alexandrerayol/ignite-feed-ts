import { Avatar } from "../Avatar/Avatar";
import styles from "./styles.module.css";
import { Trash, ThumbsUp } from "@phosphor-icons/react";
import { calcDateRelativeNow } from "../Post/Post";
import { useState } from "react";

export function Comment({
  author,
  commentId,
  content,
  publishedAt,
  onDeleteComment,
}) {
  const [likes, setLikes] = useState(0);

  function handleAddNewLike() {
    setLikes((state) => {
      return state + 1;
    });
  }

  function handleDeleteComment() {
    onDeleteComment(commentId);
  }

  return (
    <div className={styles.wrapper}>
      <Avatar isComment={true} src={author.avatar} />
      <div className={styles.content}>
        <div className={styles.comment}>
          <header>
            <div className={styles.authorAndDate}>
              <strong>{author.name}</strong>
              <span>{calcDateRelativeNow(publishedAt)}</span>
            </div>

            <button
              type="button"
              title="deletar comentário"
              onClick={handleDeleteComment}
            >
              <Trash size={24} />
            </button>
          </header>

          <div>
            <p>{content}</p>
          </div>
        </div>

        <div className={styles.like}>
          <button
            type="button"
            title="aplaudir comentário"
            onClick={handleAddNewLike}
          >
            <ThumbsUp size={20} weight="bold" />
            Aplaudir
          </button>
          <span>{likes}</span>
        </div>
      </div>
    </div>
  );
}
