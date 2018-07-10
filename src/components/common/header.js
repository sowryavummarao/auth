//import libraries
import React from 'react';
import { Text, View } from 'react-native';

//make component
const Header = (props) => {
  const { textStyle } = styles;
  return (
    <View style={styles.viewStyle}>
      {/* AS YOU CAN SEE , THERE ARE TWO WAYS TO DECLARE THE STYLE
          FROM THE BELOW CONST, ONE WAY IS DESTRUCTURING IT AT THE BEGINNING,
          SO COULD'VE SAID: const{ textStyle, viewStyle } = styles;
          AND THEN SIMPLY <View style={viewStyle}>
        */}
      <Text style={textStyle}>{props.headerText}</Text>;
    </View>
  );
};

//ALL STYLING UNDERNEATH
const styles = {
  textStyle: {
    fontSize: 20
  },
  viewStyle: {
    backgroundColor: '#F8F8F8',
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
    paddingTop: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.4,
    elevation: 2,
    position: 'relative',
  }
};

//make component available to other parts of app
export { Header };
