import React from 'react' 
import { Pressable, StyleSheet, Text} from 'react-native';
import PropTypes from 'prop-types'

// 버튼 타입 텍스트로 정의 : return 내 코드가 복잡해짐
const ButtonTypes = {
  NUMBER: 'NUMBER',
  OPERATOR: 'OPERATOR',
}

// 버튼 타입을 직접 색으로 정의 : return 내 코드가 깔끔해짐 
const Colors = {
  NUMBER: ['#71717a', '#3f3f46'],
  OPERATOR: ['#f59e0b', '#b45309'],
}

// 하단 주석 차이
// Colors => ButtonTypes => buttonTypes 를 바라보게 해서 3중 구조의 객체로, 깔끔하게 만드는 것이 목적인 코드. (해석하기가 어려움.)
const Button = ({title, onPress, buttonStyle, buttonTypes}) => {
  return (
    <Pressable 
      style={
        ({pressed}) => [
          styles.button,
          // { backgroundColor: buttonTypes === ButtonTypes.NUMBER ? '#71717a' : '#f59e0b' }, //숫자인지, 오퍼레이터인지 구분
          { backgroundColor: Colors[buttonTypes][0] },
          pressed && {
            // backgroundColor: buttonTypes === ButtonTypes.NUMBER ? '#3f3f46' : 'b45309' //숫자인지, 오퍼레이터인지 구분
            backgroundColor: Colors[buttonTypes][1]
          },
          buttonStyle
      ]}
      onPressOut={onPress}
    >
      <Text style={styles.title}>{title}</Text>
    </Pressable>
  )
}

Button.defaultProps = {
  buttonType: ButtonTypes.NUMBER
}

Button.PropTypes = {
  title: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
  buttonStyle: PropTypes.object,
  buttonTypes: PropTypes.oneOf(Object.values(ButtonTypes))
}

const styles = StyleSheet.create({
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
  },
  title: {
    color: '#ffffff',
    fontSize: 50,
  }
})

export {ButtonTypes}
export default Button