# Expo Router UI `TabTrigger.onLongPress` bug

## Steps to reproduce

1. Run `pnpm start`
2. Open iOS simulator
3. Long-press on any tab ("Index" or "Another")

## Expected behavior

The `onLongPress` event should be triggered and with it, the `TabTrigger.onLongPress` console log.

## Actual behavior

The `TabTrigger.onPress` console log appears and `onLongPress` is completely ignored.
