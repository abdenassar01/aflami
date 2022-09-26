import { CardWrapper, Cover, Title } from './styles/Styles'

export default function Card() {
  return (
    <CardWrapper onPress={ () => console.log("hello world") }>
      <Cover source={{ uri: "https://cdn.hmv.com/r/w-640/hmv/files/69/69eb8400-59b6-4045-befc-bd54a2e408c3.jpg" }}/>
      <Title>The Last Kingdom</Title>
    </CardWrapper>
  )
}