import { ChangeEvent, FormEvent, InvalidEvent, useState } from 'react';
import { format, formatDistanceToNow } from 'date-fns';
import ptBr from 'date-fns/locale/pt-BR';
import { Avatar } from './Avatar';
import { Comment } from './Comment';
import styles from './Post.module.css';

interface PostProps {
  post: {
    author: {
      avatarUrl: string;
      name: string;
      role: string;
    }
    content: Content[];
    publishedAt: Date;
  }
}

interface Content {
  type: 'paragraph' | 'link';
  content: string;
}


export function Post( { post }: PostProps) {
  // É importante sempre inicializar o state com o tipo do dado
  // que será armazenado nesse state.
  const [newCommentText, setNewCommentText] = useState('');
  const [comments, setComments] = useState([
    'Muito bom, parabéns!! 👏👏'
  ])
  const { author, publishedAt, content } = post;
  // const publishedAtFormated = new Intl.DateTimeFormat('pt-BR', {
  //   day: '2-digit',
  //   month: 'long',
  //   hour: '2-digit',
  //   minute: '2-digit',
  // }).format(post.publishedAt)
  const publishedAtFormated = format(publishedAt, "d 'de' LLLL 'às' HH:mm'h'", {
    locale: ptBr,
  });
  const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
    locale: ptBr,
    addSuffix: true,
  })

  function handleNewCommentChange(event: ChangeEvent<HTMLTextAreaElement>) {
    event.target.setCustomValidity('');
    setNewCommentText(event.target.value);
  }

  function handleCreateNewComment(event: FormEvent) {
    event.preventDefault();
    // const newComment = event.target.comment.value;
    
    setComments([...comments, newCommentText]);
    setNewCommentText('');

    // Esse tipo de ação é chamada de programação imperativa
    // pois estamos dizendo para a aplicação que o valor da
    // textarea precisa ser limpo
    // event.target.comment.value = '';
  }

  function deleteComment(deletedComment: string) {
    console.log(`Deletar comentário ${deletedComment}`);
    const commentsWithoutDeletedOne = comments.filter(comment => comment !== deletedComment);
    setComments(commentsWithoutDeletedOne);
  }

  function handleNewCommentInvalid(event: InvalidEvent<HTMLTextAreaElement>) {
    event.target.setCustomValidity('Esse campo é obrigatório');
  }
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar
            hasBorder
            avatarUrl={author.avatarUrl}
            altText={`Foto de ${author.avatarUrl}`}
          />
          <div className={styles.authorInfo}>
            <strong>{author.name}</strong>
            <span>{author.role}</span>
          </div>
        </div>

        <time 
          dateTime={publishedAt.toISOString()}
          title={publishedAtFormated}
        >
          {publishedDateRelativeToNow}
        </time>
      </header>
      <div className={styles.content}>
        {content.map((item) => {
          if (item.type === 'paragraph') {
            return <p key={item.content}>{item.content}</p>
          } else if (item.type === 'link') {
            return <p key={item.content}><a href="#">{item.content}</a></p>
          }
        })}
      </div>

      <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>
        <textarea
          required
          onInvalid={handleNewCommentInvalid}
          name="comment"
          placeholder="deixe um comentário"
          onChange={handleNewCommentChange}
          value={newCommentText}
        />
        <footer>
          <button
            type="submit"
            disabled={!newCommentText}
          >
            Publicar
          </button>
        </footer>
      </form>
            
      <div className={styles.commentList}>
        {comments.map((comment) => <Comment content={comment} key={comment} deleteComment={deleteComment} />)}
      </div>
    </article>
  )
}