import Card from '../../../utils/card/Card'
import { Wrapper } from './styles/Styles'

export default function MoviesList({ navigation }) {
  return (
    <Wrapper contentContainerStyle={{ flexDirection: "row", flexWrap: "wrap", width: "100%", justifyContent: "center" }} >
      <Card navigation={ navigation } />
      <Card navigation={ navigation } />
      <Card navigation={ navigation } />
      <Card navigation={ navigation } />
      <Card navigation={ navigation } />
      <Card navigation={ navigation } />
      <Card navigation={ navigation } />
      <Card navigation={ navigation } />
      <Card navigation={ navigation } />
      <Card navigation={ navigation } />
      <Card navigation={ navigation } />
    </Wrapper>
  )
}