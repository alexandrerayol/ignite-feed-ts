import { Header } from "./components/Header/Header";
import { Sidebar } from "./components/Sidebar/Sidebar";
import { Post, PostType } from "./components/Post/Post";

import "./globals.css";
import styles from "./app.module.css";


const posts:PostType[] = [
  {
    id: 1,
    author: {
      name: "Alexandre Rrayol",
      role: "Software enginner",
      avatar: "https://github.com/alexandrerayol.png",
    },
    publishedAt: new Date("2024-03-1 10:04"),
    content: [
      {
        id: 1,
        type: "paragraph",
        text: "Fala galeraa 👋",
      },

      {
        id: 2,
        type: "paragraph",
        text: "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀",
      },

      {
        id: 3,
        type: "link",
        text: "jane.design/doctorcare",
      },
    ],
  },

  {
    id: 2,
    author: {
      name: "Luana Lopes",
      role: "Software enginner",
      avatar: "https://github.com/rafaballerini.png",
    },
    publishedAt: new Date("2024-03-6 11:46"),
    content: [
      {
        id: 1,
        type: "paragraph",
        text: "Fala galeraa 👋",
      },

      {
        id: 2,
        type: "paragraph",
        text: "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀",
      },

      {
        id: 3,
        type: "link",
        text: "jane.design/doctorcare",
      },
    ],
  },

  {
    id: 3,
    author: {
      name: "Eduardo Moises",
      role: "Software enginner",
      avatar: "https://github.com/maykbrito.png",
    },
    publishedAt: new Date("2024-03-14 11:53"),
    content: [
      {
        id: 1,
        type: "paragraph",
        text: "Fala galeraa 👋",
      },

      {
        id: 2,
        type: "paragraph",
        text: "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀",
      },

      {
        id: 3,
        type: "link",
        text: "jane.design/doctorcare",
      },
    ],
  },
];

function App() {
  return (
    <>
      <Header />
      <main className={styles.wrapper}>
        <Sidebar />
        <div>
          {posts.map((post) => (
            <Post
              key={post.id}
              author={post.author}
              publishedAt={post.publishedAt}
              content={post.content}
            />
          ))}
        </div>
      </main>
    </>
  );
}

export default App;
