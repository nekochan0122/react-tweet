import { useMemo } from 'react'
import type { Tweet } from './api/index.js'
import { getTweetUrl, formatNumber } from './utils.js'
import s from './tweet-replies.module.css'

export const TweetReplies = ({ tweet }: { tweet: Tweet }) => {
  const repliesLinkText = useMemo(() => {
    if (tweet.conversation_count === 0) return '在 Twitter 上查看更多回覆'

    return `查看 ${formatNumber(tweet.conversation_count)} 則回覆`
  }, [tweet.conversation_count])

  return (
    <div className={s.replies}>
      <a
        className={s.link}
        href={getTweetUrl(tweet)}
        target="_blank"
        rel="noopener noreferrer"
      >
        <span className={s.text}>{repliesLinkText}</span>
      </a>
    </div>
  )
}
