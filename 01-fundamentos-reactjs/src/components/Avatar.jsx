import styles from './Avatar.module.css'

export function Avatar(props) {
  const { avatarUrl, altText, hasBorder } = props;
  return (
    <img
      className={hasBorder ? styles.avatarWithBorder : styles.avatar}
      src={avatarUrl} alt={altText}
    />
  )
}