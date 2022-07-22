import { Header } from "./components/Header";
import { Post } from "./components/Post";
import { SideBar } from "./components/SideBar";

import './global.css';
import styles from  './App.module.css';

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: "https://github.com/ThiagoPederzolli.png",
      name: "Thiago Pederzolli",
      role: "Jr. Front-end Engineer"
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋'},
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
      { type: 'link', content: '👉jane.design/doctorcare'},
      { type: 'link', content: '#novoprojeto #nlw #rocketseat'},
    ],
    publishedAt: new Date('2022-07-11 20:12:43'),
  },
  {
    id: 2,
    author: {
      avatarUrl: "https://github.com/maykbrito.png",
      name: "Mayk Brito",
      role: "Educator",
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋'},
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
      { type: 'link', content: '👉jane.design/doctorcare'},
      { type: 'link', content: '#novoprojeto #nlw #rocketseat'},
    ],
    publishedAt: new Date('2022-07-12 06:34:43'),
  },
]

export function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <SideBar />
        <main>
        {posts.map((post) => <Post post={post} key={post.id} />)}
        </main>
      </div>
    </div>
  )
}
