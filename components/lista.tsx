import { View, Text, StyleSheet } from 'react-native';

type Props = {
  periodo:string
  tarefas:string[]
}

export const Lista = (props:Props) => {
  return (
    <View>
    <Text style={styles.negrito}>{props.periodo}</Text>
      <Text style={styles.lista}>{props.tarefas}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  negrito:{
    fontSize:14,
    fontWeight:'bold',
    marginLeft:10,
    marginTop:5
  },

  lista: {
    fontSize:13,
    marginLeft:10
  }
})