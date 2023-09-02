import styles from './styles.css'
import logo from './logo.png'
function App() {
  return (
    <>
      <div className={styles.container}>
        <header>
        className={styles.header}
          <h1>Welcome to GitHub</h1>
          <div className={styles.figure}>
          <img src={logo} height={200} width={200} />
          </div> 
          <div className={styles.box}></div>
          <p>This is task 5</p>
          <p>This is end of the week</p>
        <h2>Friday</h2>
        </header>
        <main className={styles.main}>
          <article>
            <h3>GitHub</h3>
            <p>GitHub is an online software development platform. It's one of the greatest and hight rated software company in the world. </p>
          </article>
        </main>
        <footer className={styles.footer}>
          <p>This is end of first week</p>
        </footer>
      </div>
    </>
  )
}
export default App
