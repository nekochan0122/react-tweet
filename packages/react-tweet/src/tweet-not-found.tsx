import { TweetContainer } from './tweet-container.js'
import styles from './tweet-not-found.module.css'

type Props = {
  error?: any
}

export const TweetNotFound = (_props: Props) => (
  <TweetContainer>
    <div className={styles.root}>
      <h3>推文不存在</h3>
      <p>嵌入的推文不存在…</p>
    </div>
  </TweetContainer>
)
