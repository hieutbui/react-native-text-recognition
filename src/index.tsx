import { NativeModules } from 'react-native';

export type TextRecognitionOptions = {
  visionIgnoreThreshold?: number;
};

export type TextRecognitionResult = {
  text: string;
  position: {
    x: number;
    y: number;
    width: number;
    height: number;
  };
};

type TextRecognitionType = {
  recognize(
    imagePath: string,
    options?: TextRecognitionOptions
  ): Promise<TextRecognitionResult[]>;
};

const { TextRecognition } = NativeModules;

async function recognize(
  imagePath: string,
  options?: TextRecognitionOptions
): Promise<TextRecognitionResult[]> {
  return await TextRecognition.recognize(imagePath, options || {});
}

export default { recognize } as TextRecognitionType;
