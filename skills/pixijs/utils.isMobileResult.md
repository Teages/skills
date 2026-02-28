# Type Alias: isMobileResult

> **isMobileResult** = `object`

The result of the mobile device detection system.
Provides detailed information about device type and platform.

## Example

```ts
// Type usage with isMobile
const deviceInfo: isMobileResult = isMobile;

// Check device categories
if (deviceInfo.apple.device) {
    console.log('iOS Device Details:', {
        isPhone: deviceInfo.apple.phone,
        isTablet: deviceInfo.apple.tablet,
        isUniversal: deviceInfo.apple.universal
    });
}

// Platform-specific checks
const platformInfo = {
    isApple: deviceInfo.apple.device,
    isAndroid: deviceInfo.android.device,
    isAmazon: deviceInfo.amazon.device,
    isWindows: deviceInfo.windows.device
};
```

## Properties

### amazon

> **amazon**: `object`

Amazon device detection information.
Identifies Amazon Fire tablets and phones.

#### device

> **device**: `boolean`

Whether device is any Amazon mobile device

#### phone

> **phone**: `boolean`

Whether device is a Fire Phone

#### tablet

> **tablet**: `boolean`

Whether device is a Fire Tablet

#### Example

```ts
// Amazon Fire tablet detection
if (isMobile.amazon.tablet) {
    // Fire tablet optimizations
    optimizeForFireTablet();
}
```

***

### android

> **android**: `object`

Android device detection information.
Categorizes Android phones and tablets.

#### device

> **device**: `boolean`

Whether device is any Android device

#### phone

> **phone**: `boolean`

Whether device is an Android phone

#### tablet

> **tablet**: `boolean`

Whether device is an Android tablet

#### Example

```ts
// Android device handling
if (isMobile.android.device) {
    // Check specific type
    const deviceType = isMobile.android.tablet ?
        'tablet' : 'phone';
    console.log(`Android ${deviceType} detected`);
}
```

***

### any

> **any**: `boolean`

Whether the device is any type of mobile device.
True if any mobile platform is detected.

#### Example

```ts
// Check if device is mobile
if (isMobile.any) {
    console.log('Running on a mobile device');
}
```

***

### apple

> **apple**: `object`

Apple device detection information.
Provides detailed iOS device categorization.

#### device

> **device**: `boolean`

Whether device is any Apple mobile device

#### ipod

> **ipod**: `boolean`

Whether the device is an iPod Touch

#### phone

> **phone**: `boolean`

Whether the device is an iPhone

#### tablet

> **tablet**: `boolean`

Whether the device is an iPad

#### universal

> **universal**: `boolean`

Whether app is running in iOS universal mode

#### Example

```ts
// iOS device checks
if (isMobile.apple.device) {
    if (isMobile.apple.tablet) {
        // iPad-specific code
        useTabletLayout();
    } else if (isMobile.apple.phone) {
        // iPhone-specific code
        usePhoneLayout();
    }
}
```

***

### other

> **other**: `object`

Other device detection information.
Covers additional platforms and browsers.

#### blackberry

> **blackberry**: `boolean`

Whether device is a BlackBerry

#### blackberry10

> **blackberry10**: `boolean`

Whether device is a BlackBerry 10

#### chrome

> **chrome**: `boolean`

Whether browser is Chrome Mobile

#### device

> **device**: `boolean`

Whether device is any other mobile device

#### firefox

> **firefox**: `boolean`

Whether browser is Firefox Mobile

#### opera

> **opera**: `boolean`

Whether browser is Opera Mobile

#### Example

```ts
// Check other platforms
if (isMobile.other.blackberry10) {
    // BlackBerry 10 specific code
} else if (isMobile.other.chrome) {
    // Chrome mobile specific code
}
```

***

### phone

> **phone**: `boolean`

Whether the device is any type of phone.
Combines detection across all platforms.

#### Example

```ts
// Check if device is a phone
if (isMobile.phone) {
    console.log('Running on a mobile phone');
}
```

***

### tablet

> **tablet**: `boolean`

Whether the device is any type of tablet.
Combines detection across all platforms.

#### Example

```ts
// Check if device is a tablet
if (isMobile.tablet) {
    console.log('Running on a mobile tablet');
}
```

***

### windows

> **windows**: `object`

Windows device detection information.
Identifies Windows phones and tablets.

#### device

> **device**: `boolean`

Whether device is any Windows mobile device

#### phone

> **phone**: `boolean`

Whether device is a Windows Phone

#### tablet

> **tablet**: `boolean`

Whether device is a Windows tablet

#### Example

```ts
// Windows device checks
if (isMobile.windows.tablet) {
    // Surface tablet optimizations
    enableTouchFeatures();
}
```
