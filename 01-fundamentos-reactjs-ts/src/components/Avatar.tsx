import { ImgHTMLAttributes } from 'react';
import styles from './Avatar.module.css'

interface AvatarProps extends ImgHTMLAttributes<HTMLImageElement> {
  avatarUrl: string;
  altText: string;
  hasBorder: boolean;
}

export function Avatar(props: AvatarProps) {
  const { avatarUrl, altText, hasBorder } = props;
  return (
    <img
      className={hasBorder ? styles.avatarWithBorder : styles.avatar}
      src={avatarUrl} alt={altText}
    />
  )
}