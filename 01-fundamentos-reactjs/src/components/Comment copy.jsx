import { Trash, ThumbsUp } from 'phosphor-react';

import styles from './Comment.module.css';

export function Comment() {
    return (
        <div className={styles.comment}>
            <img
                src="https://github.com/ThiagoPederzolli.png" 
                alt="Foto do Thiago Pederzolli"
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
                        <button title="Deletar Comentário">
                        <Trash />
                        </button>
                    </header>
                <p>Muito bom Devon, parabéns!! 👏👏</p>
                </div>
            </div>

            <footer>
                <button>
                    <ThumbsUp />
                    Aplaudir <span>20</span>
                </button>
            </footer>
        </div>
    )
}