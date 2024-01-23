import { useReducer } from 'react';
import { StyleSheet, Pressable } from 'react-native';
import { MotiView } from 'moti';


export function ButtonMoti() {
  const [visible, toggle] = useReducer((s) => !s, true);

  return (
    <Pressable onPress={toggle}>
      {visible && 
        <MotiView
        from={{
          opacity: 1,
          scale: 1,
        }}
        animate={{
          opacity: 1,
          scale: 100,
        }}
        transition={{
          type: 'timing',
          duration: 2500,
        }}
        style={styles.shape}
      />
      }
    </Pressable>
  );
}

const styles = StyleSheet.create({
  shape: {
    justifyContent: 'center',
    height: 80,
    width: 80,
    borderRadius: 100,
    marginRight: 10,
    backgroundColor: 'white',
  },
  
});
