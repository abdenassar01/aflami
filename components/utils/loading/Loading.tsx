import { Chase } from 'react-native-animated-spinkit';
import { Color } from '../color/colors';
import { Loader, StyledText } from './styles/Styles';

type Props = {
    size: number
}

const Loading = ({ size }: Props) => {
  return (
    <Loader>
        <Chase color={ Color.main } size={ size } />
        <StyledText>Please Wait. We are getting it ready for you</StyledText>
    </Loader>
  )
}

export default Loading