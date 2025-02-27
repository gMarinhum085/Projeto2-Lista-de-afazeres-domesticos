import { View, Text, StyleSheet } from 'react-native'
import { Lista } from './components/lista'

function App () {
  return (
    <View>
    <Text style={styles.title}>Lista de afazeres domesticos</Text>
      <Lista periodo='Manhã' tarefas={[
      '1. Lavar as roupas sujas', 
      '\n2. Lavar e guardar a louça',
      '\n3. Limpar a pia e a cozinha',
      '\n4. Preparar o almoço',
      '\n5. Colocar as roupas no varal']}
      />

      <Lista periodo='Tarde' tarefas={[
      '1. Limpar a mesa da cozinha', 
      '\n2. Varrer e passar o pano nos cômodos da casa',
      '\n3. Lavar e guardar a louça',
      '\n4. Limpar a pia da cozinha',
      '\n5. Tirar as roupas do varal']}
      />

      <Lista periodo='Noite' tarefas={[
      '1. Levar o cachorro pra passear', 
      '\n2. Limpar os calçados utilizados durante o dia',
      '\n3. Preparar o jantar',
      ]}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  title:{
    fontSize:16,
    fontWeight:"bold",
    alignSelf:'center',
    marginBottom:12
  }
})


export default App