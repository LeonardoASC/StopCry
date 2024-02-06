import { useRef, useState } from 'react';
import { Animated, StyleSheet, Text, TextInput, TouchableOpacity, View, ViewStyle } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

interface CustomInputProps {
    containerStyle?: ViewStyle;
    placeholder?: string;
    onChangeText?: (text: string) => void;
    error?: string;
    secureTextEntry?: boolean;
  }

const CustomInput = ({ containerStyle, placeholder, onChangeText, error, ...props }: CustomInputProps) => {
  const [isFocused, setIsFocused] = useState(false);
  const [text, setText] = useState('');
  const [showPassword, setShowPassword] = useState(props.secureTextEntry);
  const labelPosition = useRef(new Animated.Value(text ? 1 : 0)).current;

  const handleFocus = () => {
    setIsFocused(true);
    animatedLabel(1);
  };

  const handleBlur = () => {
    setIsFocused(false);
    if (!text) {
      animatedLabel(0);
    }
  };

  const handleTextChange = (text: string) => {
    setText(text);
    if (onChangeText) {
      onChangeText(text);
    }
    if (text) {
      animatedLabel(1);
    } else {
      animatedLabel(isFocused ? 1 : 0);
    }
  };

  const animatedLabel = (toValue: number) => {
    Animated.timing(labelPosition, {
      toValue: toValue,
      duration: 200,
      useNativeDriver: false,
    }).start();
  };

  const labelStyle = {
    left: 10,
    top: labelPosition.interpolate({
      inputRange: [0, 1],
      outputRange: [17, -10],
    }),
    fontSize: labelPosition.interpolate({
      inputRange: [0, 1],
      outputRange: [16, 14],
    }),
    color: labelPosition.interpolate({
      inputRange: [0, 1],
      outputRange: ['gray', '#1BB040'],
    }),
  };
  const getInnerContainerStyle = (): ViewStyle | undefined => {
    if (error) {
      return { borderColor: 'red' };
    }
    return undefined;
  };
  return (
    <View style={containerStyle}>
      <View style={[styles.innerContainer, getInnerContainerStyle()]}>
        <Animated.Text style={[styles.label, labelStyle]}>{placeholder}</Animated.Text>
        <View style={styles.inputContainer}>
          <TextInput
            {...props}
            style={styles.input}
            onFocus={handleFocus}
            onBlur={handleBlur}
            onChangeText={handleTextChange}
            value={text}
            textAlignVertical="center"
            textContentType={props.secureTextEntry ? 'newPassword' : 'none'}
            secureTextEntry={showPassword}
          />
          {props.secureTextEntry && !!text && (
            <View>
              <TouchableOpacity
                style={{ width: 24 }}
                onPress={() => setShowPassword(!showPassword)}
              >
                {!showPassword ? (
                  <Ionicons name="eye" size={24} color="#1BB040" />
                ) : (
                  <Ionicons name="eye-off" size={24} color="#1BB040" />
                )}
              </TouchableOpacity>
            </View>
          )}
        </View>
      </View>
      {error && <Text style={styles.errorText}>{error}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  innerContainer: {
    borderWidth: 1,
    borderColor: '#eee',
    borderRadius: 5,
    height: 60,
    justifyContent: 'center',
  },
  label: {
    position: 'absolute',
    color: 'gray',
    backgroundColor: '#121212',
    paddingLeft: 10,
    paddingRight: 10,
    borderRadius: 10,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingRight: 10,
  },
  input: {
    flex: 1,
    fontSize: 16,
    height: 50,
    marginTop: 10,
    paddingLeft: 10,
    color: 'white'
  },
  errorText: {
    marginTop: 5,
    fontSize: 14,
    color: 'red',
  },
});

export default CustomInput;