import { Comment } from "../Comment/Comment";
import { Avatar } from "../Avatar/Avatar";
import styles from "./styles.module.css";
import { ChangeEvent, FormEvent, useState } from "react";

export function calcDateRelativeNow(publishedAt: Date) {
  const now = new Date();
  const diff = Number(now) - Number(publishedAt); // diferença em ms

  const seconds = Math.floor(diff / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);

  if (days > 0) {
    return `Publicado há ${days} dia${days > 1 ? "s" : ""} atrás`;
  } else if (hours > 0) {
    return `Publicado há ${hours} hora${hours > 1 ? "s" : ""} atrás`;
  } else if (minutes > 0) {
    return `Publicado há ${minutes} minuto${minutes > 1 ? "s" : ""} atrás`;
  } else {
    return `Publicado há ${seconds} segundo${seconds > 1 ? "s" : ""} atrás`;
  }
}

interface Author {
  name: string;
  role: string;
  avatar: string;
}

interface ContentType {
  id: number;
  type: "paragraph" | "link";
  text: string;
}

export interface PostType {
  id?: number;
  author: Author;
  publishedAt: Date;
  content: ContentType[];
}

interface CommentsType {
  id: number;
  text: string;
  publishedAt: Date;
}

export function Post({author, content, publishedAt}: PostType) {
  const [comments, setComments] = useState<CommentsType[]>([]);
  const [commentTextValue, setCommentsTextValue] = useState("");

  const isNewCommentEmpty = commentTextValue.length === 0;

  function handleAddNewComment(event: FormEvent) {
    event.preventDefault();

    setComments([
      ...comments,
      {
        id: comments.length + 1,
        text: commentTextValue,
        publishedAt: new Date(),
      },
    ]);

    setCommentsTextValue("");
  }

  function handleChangeCommentTextValue(event:ChangeEvent<HTMLTextAreaElement>) {
    setCommentsTextValue(event.target.value);
  }

  function deleteComment(commentId:number) {
    setComments(comments.filter((comment) => comment.id != commentId));
  }

  return (
    <article className={styles.wrapper}>
      <header>
        <div className={styles.author}>
          <Avatar src={author.avatar} />
          <div className={styles.authorDetails}>
            <strong>{author.name}</strong>
            <span>{author.role}</span>
          </div>
        </div>

        <time
          title={`Publicado em ${publishedAt.toLocaleDateString("pt-BR", {
            day: "2-digit",
            month: "2-digit",
            year: "2-digit",
            hour: "numeric",
            minute: "numeric",
          })}`}
          dateTime={publishedAt.toUTCString()}
        >
          {calcDateRelativeNow(publishedAt)}
        </time>
      </header>

      <div className={styles.content}>
        {content.map((item) => (
          <p key={item.id}>
            {item.type === "link" ? (
              <a href="https://www.google.com/" target="_blank">
                {item.text}
              </a>
            ) : (
              item.text
            )}
          </p>
        ))}
      </div>

      <form className={styles.form} onSubmit={handleAddNewComment}>
        <span>Deixe seu feedback</span>
        <textarea
          onChange={handleChangeCommentTextValue}
          placeholder="Escreva um comentário..."
          name="comment"
          value={commentTextValue}
          required
        ></textarea>
        <div>
          <button type="submit" disabled={isNewCommentEmpty}>
            Publicar
          </button>
        </div>
      </form>

      {comments.map((comment) => (
        <Comment
          author={author}
          commentId={comment.id}
          content={comment.text}
          key={comment.id}
          publishedAt={comment.publishedAt}
          onDeleteComment={deleteComment}
        />
      ))}
    </article>
  );
}
