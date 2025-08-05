# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [2.0.0] - 2025-08-05

### Added
- Position information for recognized text including x, y, width, and height coordinates
- New `TextRecognitionResult` type with `text` and `position` properties
- Comprehensive documentation with usage examples
- `USAGE_EXAMPLE.md` with migration guide

### Changed
- **BREAKING**: `recognize()` function now returns `Promise<TextRecognitionResult[]>` instead of `Promise<string[]>`
- Updated repository ownership to hieutbui
- Updated package description to mention position information
- iOS coordinates are normalized (0.0-1.0) while Android coordinates are in pixels

### Technical Details
- iOS implementation uses Vision framework's `boundingBox` property
- Android implementation uses ML Kit's `getBoundingBox()` method
- Both platforms return consistent object structure with text and position data

### Migration Guide
```typescript
// Old API (v1.x)
const texts: string[] = await TextRecognition.recognize(imagePath);

// New API (v2.x)
const results: TextRecognitionResult[] = await TextRecognition.recognize(imagePath);
const texts: string[] = results.map(result => result.text); // Extract text if needed
```

## [1.0.2] - Previous Release
- Original implementation returning only text strings
- Basic text recognition without position information
