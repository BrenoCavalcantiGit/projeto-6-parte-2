import * as S from './styles'

type Props = {
  tags: string[]
}

const Tags = ({ tags }: Props) => (
  <S.Lista>
    {tags.map((tag) => (
      <S.Tag key={tag}>{tag}</S.Tag>
    ))}
  </S.Lista>
)

export default Tags
