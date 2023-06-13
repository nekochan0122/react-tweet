import type { Tweet } from './api/index.js'
import { getInReplyToUrl } from './utils.js'
import s from './tweet-in-reply-to.module.css'

export const TweetInReplyTo = ({ tweet }: { tweet: Tweet }) => (
  <a
    href={getInReplyToUrl(tweet)}
    className={s.root}
    target="_blank"
    rel="noopener noreferrer"
  >
    回覆給 @{tweet.in_reply_to_screen_name}
  </a>
)
