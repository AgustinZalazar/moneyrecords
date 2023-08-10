import { Text, TextProps } from './Themed';

export function MonoText(props: TextProps) {
  return <Text {...props} className='text-red-500' style={[props.style, { fontFamily: 'SpaceMono' }]} />;
}
