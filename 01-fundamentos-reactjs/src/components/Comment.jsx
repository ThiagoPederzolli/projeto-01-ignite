import { Trash, ThumbsUp } from 'phosphor-react';
import { useState } from 'react';
import { Avatar } from './Avatar';

import styles from './Comment.module.css';

export function Comment({ content, deleteComment }) {
  const [likeCount, setLikeCount] = useState(0);
  function handleDeleteComment() {
    deleteComment(content)
  }
  function handleLikeComment() {
    setLikeCount((state) => {
      return state + 1;
    });
  }
  return (
    <div className={styles.comment}>
      <Avatar
        avatarUrl="https://github.com/ThiagoPederzolli.png"
        altText="Foto do Thiago Pederzolli"
        hasBorder={false}
      />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
              <div className={styles.authorAndTime}>
                <strong>Thiago Pederzolli</strong>
                <time 
                  dateTime="2022-07-11 20:12:43"
                  title="11 de maio às 20:12h"
                >
                  Cerca de 1h atrás
                </time>
              </div>
            <button onClick={handleDeleteComment} title="Deletar Comentário">
              <Trash size={24} />
            </button>
          </header>
          <p>{content}</p>
        </div>
        <footer>
          <button onClick={handleLikeComment}>
              <ThumbsUp />
              Aplaudir <span>{likeCount}</span>
          </button>
        </footer>
      </div>

      
    </div>
  )
}   