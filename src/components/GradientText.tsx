import React from 'react';
import { View } from 'react-native';
import Svg, { Text, Defs, LinearGradient, Stop } from 'react-native-svg';

interface GradientTextProps {
  text: string;
  colors: string[];
  start?: { x: string; y: string };
  end?: { x: string; y: string };
  fontSize?: number;
  x?: number;
  y?: number;
}

const GradientText: React.FC<GradientTextProps> = ({
  text,
  colors,
  start = { x: '0%', y: '0%' },
  end = { x: '100%', y: '0%' },
  fontSize = 40,
  x = 0,
  y = 40,
}) => {
  return (
    <View>
      <Svg height={fontSize * 1.3} width="100%">
        <Defs>
          <LinearGradient id="grad" x1={start.x} y1={start.y} x2={end.x} y2={end.y}>
            {colors.map((color, index) => (
              <Stop key={index} offset={`${(index / (colors.length - 1)) * 100}%`} stopColor={color} />
            ))}
          </LinearGradient>
        </Defs>
        <Text
          
          fill="url(#grad)"
          fontSize={fontSize}
          fontWeight="bold"
          fontFamily="Inter-Medium"
          x={x}
          y={y}
          textAnchor="start"
        >
          {text}
        </Text>
      </Svg>
    </View>
  );
};

export default GradientText;
