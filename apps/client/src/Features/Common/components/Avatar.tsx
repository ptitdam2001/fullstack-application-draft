import { ReactElement } from 'react'
import { UserOutlined } from './Icon'
import { styled } from 'styled-components'
import tw from 'twin.macro'

type AvatarProps = {
  size?: number
  shape?: 'square' | 'circle'
  imgSrc?: string
  text?: string
  icon?: ReactElement
}

const AvatarImg = styled.img<{ size: number }>`
  height: ${(props: any) => props.size ?? 16}px;
  width: ${(props: any) => props.size ?? 16}px;
  ${tw`
    rounded-full
    border
  `}
`

export const Avatar = ({ size = 32, shape = 'circle', icon = <UserOutlined />, imgSrc, text }: AvatarProps) => {
  return imgSrc ? <AvatarImg src={imgSrc} alt={text} size={size} /> : <div style={{ width: size, height: size }}>{icon}</div>
}
