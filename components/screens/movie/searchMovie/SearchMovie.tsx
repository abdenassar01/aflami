import { View, Text } from 'react-native'

export default function SearchMovie({ route }: any) {

    const title = route.params.title;
    console.log(title)

  return (
    <View>
      <Text>SearchMovie</Text>
    </View>
  )
}