import styles from './Title.module.css'

const Title = () => {
  return (
    <div>
        <h1 className={styles['my_title']}>Meu título 1</h1>
        <h1 className={['my_title']}>Meu título 2</h1>
    </div>
  )
}

export default Title