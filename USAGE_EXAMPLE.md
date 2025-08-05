# Usage Example

This example shows how to use the updated text recognition API that includes position information.

## Basic Usage

```typescript
import TextRecognition, { TextRecognitionResult } from 'react-native-text-recognition';

async function recognizeTextWithPosition(imagePath: string) {
  try {
    const results: TextRecognitionResult[] = await TextRecognition.recognize(imagePath);
    
    results.forEach((result, index) => {
      console.log(`Text ${index + 1}: "${result.text}"`);
      console.log(`Position: x=${result.position.x}, y=${result.position.y}`);
      console.log(`Size: width=${result.position.width}, height=${result.position.height}`);
      console.log('---');
    });
    
    return results;
  } catch (error) {
    console.error('Text recognition failed:', error);
    throw error;
  }
}
```

## With Options

```typescript
async function recognizeWithThreshold(imagePath: string) {
  const results = await TextRecognition.recognize(imagePath, {
    visionIgnoreThreshold: 0.7 // Only return text with confidence >= 0.7 (iOS only)
  });
  
  return results;
}
```

## Coordinate System Notes

- **iOS**: Coordinates are normalized (0.0 to 1.0) relative to the image dimensions
  - `x`, `y`: Position as percentage of image width/height
  - `width`, `height`: Size as percentage of image width/height
  
- **Android**: Coordinates are in pixels relative to the image
  - `x`, `y`: Position in pixels from top-left corner
  - `width`, `height`: Size in pixels

## Migration from v1.0.2

If you were using the previous version that returned `string[]`, you'll need to update your code:

```typescript
// Old API (v1.0.2)
const texts: string[] = await TextRecognition.recognize(imagePath);

// New API (v1.1.0+)
const results: TextRecognitionResult[] = await TextRecognition.recognize(imagePath);
const texts: string[] = results.map(result => result.text); // Extract just the text if needed
```
