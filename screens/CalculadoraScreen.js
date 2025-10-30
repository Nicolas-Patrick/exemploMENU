import React, { useState } from 'react';
import { View, TextInput, Button, Text, StyleSheet } from 'react-native';

export default function CalculadoraScreen() {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [resultado, setResultado] = useState(null);

  const calcular = (operacao) => {
    const n1 = parseFloat(num1);
    const n2 = parseFloat(num2);

    if (!n1 || !n2) {
      setResultado('Digite valores válidos!');
      return;
    }

    let r = 0;
    if (operacao === '+') r = n1 + n2;
    if (operacao === '-') r = n1 - n2;
    if (operacao === '*') r = n1 * n2;
    if (operacao === '/') r = n1 / n2;

    setResultado(r.toString());
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Número 1"
        keyboardType="numeric"
        value={num1}
        onChangeText={setNum1}
      />
      <TextInput
        style={styles.input}
        placeholder="Número 2"
        keyboardType="numeric"
        value={num2}
        onChangeText={setNum2}
      />

      <View style={styles.buttonsRow}>
        <View style={styles.button}>
          <Button title="+" onPress={() => calcular('+')} />
        </View>
        <View style={styles.button}>
          <Button title="-" onPress={() => calcular('-')} />
        </View>
        <View style={styles.button}>
          <Button title="*" onPress={() => calcular('*')} />
        </View>
        <View style={styles.button}>
          <Button title="/" onPress={() => calcular('/')} />
        </View>
      </View>

      <Text style={styles.resultado}>Resultado: {resultado}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, justifyContent: 'center' },
  input: {
    borderWidth: 1, padding: 10, marginVertical: 10, borderRadius: 5,
    fontSize: 18
  },
  row: { flexDirection: 'row', justifyContent: 'space-between', marginVertical: 20 },
  resultado: { fontSize: 22, fontWeight: 'bold', textAlign: 'center' },
});

