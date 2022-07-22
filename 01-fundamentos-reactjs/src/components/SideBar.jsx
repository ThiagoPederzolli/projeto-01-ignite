import { PencilLine } from 'phosphor-react';
import { Avatar } from './Avatar';
import styles from './SideBar.module.css'

export function SideBar() {
  return (
    <aside className={styles.sidebar}>
      <img
        className={styles.cover}
        src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=50"
      />
      <div className={styles.profile}>
        <Avatar
          hasBorder
          avatarUrl="https://github.com/ThiagoPederzolli.png"
          altText="Foto do Thiago Pederzolli"
        />
        <strong>Thiago Pederzolli</strong>
        <span>Jr. Front-end Engineer</span>
      </div>
      <footer>
        <a href="#">
          <PencilLine size={20} />
          Editar Seu Perfil
        </a>
      </footer>
    </aside>
  )
}