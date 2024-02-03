### What is React Native?

React Native is an open-source framework for building native Android and IOS applications using React.

JavaScript to access platform-specific APIS(example camera and push notifications)

React components to define the appearance and behavior of your user interface

React itself is a library designed for building user interfaces

React-dom for web apps and react-native for native mobile apps

### Why React native?

IOS apps requires Swift or Objective-C

Android apps requires Java or Kotlin

With approximately 31% on IOS and 68% on Android, you would typically need to develop two separate apps using different technologies.

With React native, you can create an app that works seamlessly on both platforms

### Expo vs React Native

React native is an open-source framework maintained by Meta(Facebook), designed for building cross-platform apps

Expo is an open-source framework maintained by Expo iteself, designed by building cross-platform apps

Unlike plain React Native, which can be challenging and time-consuming to set up, Expo provides a streamlined experience

Expo has suite of tools and services built around React Native, which greatly simplifies the development process.

With plain react native, you cannot build IOS apps on a windows or linux machine. Native IOS apps can only be built on a macOS machine

With expo, you can develop your app on windows or linux and run your app on a physical iphone

### Expo

Expo has evolved significantly over the years and now supports nearly all the features necessary for building mobile apps.

In the event that you require access to native Android or IOS code, Expo allows you to eject your app and work with a plain React native codebase

## Core Components

React native offers a collection of essential pre-built components known as “Core Components” which are readily available for building your native app’s user interface.

**React Native UI Component** → <View>, <Text>, <Image>, <ScrollView>, <TextInput>

**Android view** → <ViewGroup>, <TextView>, <ImageView>, <ScrollView>, <EditText>

**IOS view** → <UIView>, <UITextView>, <UIImageView>, <UIScrollView>, <UITextField>

**Web analog** → A non scrolling <div>, <p>, <img>, <div>, <input type=”text”>

1. **View**
   1. The view component is a fundamental core component in React Native that serves as building block for creating user interfaces.
   2. It functions as a container that supports layout using flexbox, styling, touch handling and accessibility controls
   3. In web development terms, the view component can be compared to the <div> tag
   4. The view component is typically nested inside other views and can have zero or more children of any type
2. **Text**
   1. Component for displaying text
   2. It supports nesting, styling and touch handling
   3. Depending on the target platform, React native will translate this component to either a UITextView(IOS), a TextView(Android) or a ‘p’(Web)
3. **Image** → The image components enables us to display various types of images, including

   1. Static images
   2. Network images
   3. Images from the local disk, such as camera roll

   React native seamlessly translate the Image component to platform-specific counterparts:

   - UIImageView for IOS
   - ImageView for Android
   - ‘img’ for the web

   // Network images: width and height are required

4. **ScrollView** → ScrollView components wraps the platform-specific scrolling functionality and it requires a bounded height to function properly.
5. **Button** - The button component allows users to trigger actions. This component has platform-specific rendering for IOS and Android.
6. **Pressable** → Pressable is a wrapper component that detects various stages of press interactions on its defined children

   We can create a custom button using Pressable.

   - onPress is called when a press is activated
   - onLongPress is triggered when a press is held for longer than 500 milliseconds
   - onPressOut is called when the press gesture is deactivated

7. **Modal** → Modal is screen that overlays the app content to provide important information or prompt the user for a decision.

   Since they are purposefully interruptive make sure you use them only when necessary.

8. **StatusBar** → The StatusBar component allows you to control the application’s status bar.

   The StatusBar is the zone, typically at the top of the screen, that displays the current time, Wi-Fi and network information, batter level other status icons.

9. **ActivityIndicator** → The ActivityIndicator component displays a circular loading indicator. It is used to inform users about the status of ongoing processes, such as loading an app, submitting a form or saving updates.
10. **Alert** → Alert launches an alert dialog with specified title and message. Optionally, you can specify a list of buttons.

### Custom components

### Styling React Native Apps

React Native does not use CSS for styling

You need to style your app using javascript

Names are written in camel case(example: backgroundColor instead of background-color)

styling approaches (Inline style, Stylesheet APIs)

```jsx
see github repo for details
```

### Layout with Flexbox

At the core of layout design in React Native is Flexbox

Flexbox is a powerful one-dimensional layout model used to arrange elements within a container

With flexbox, you have the freedom to arrange items either horizontally(from left to right or right to left) or vertically (from top to bottom or bottom to top)

you can easily control the spacing and alignment of items within the container

```jsx
see the github code details
```

**Axes:**

- Main axis
- Cross axis

1. **flex** → The flex property plays a crucial role in defining how much of a view will fill the screen along the main axis
2. **flexDirection** → The flexDirection property establishes the main axis, which in tern determines how the flex items are placed within the container.

   By default, the main axis flows from top to bottom, causing the items to be displayed from top to bottom in the UI.

   By changing the value of the flexDirection property, we can alter how the items are positioned

3. **justifyContent** → defines the alignment along the main axis
4. **alignItems** → alignItems defines the default behavior for laying out flex items along the container’s cross-axis

   Works similarly to justifyContent, but in the perpendicular direction

5. **alignSelf** → alignItems is applied to the container and controls the alignment of all items within it

   alignSelf is applied to individual items, allowing us to control the alignment of each item independly

   The values available for alignSelf are similar to those used in alignItems.

6. **flexWrap** → allows us to control how flex items behave when there’s limited space within the container
7. **alignContent** → The alignContent property aligns lines of content along the cross axis

   Similar to how the alignItems property aligns individual items along the cross-axis

   A very important condition is that multiple columns or rows must exist within the container.

8. **gap** → gap related properties allow us to manage spacing between rows and columns
   - rowGap
   - columnGap
   - gap
9. **flexBasis** → The flex basis property determines the initial size of a flex item before any extra space in the container is distributed

   **Alternative to using the height and width properties in flex layout**

10. **flexShrink** → determines how children within a container shrink along the main axis when their combined size exceeds the container’s size

    _The flexShrink factor is relative to other items within the container_

11. **flexGrow** → it determines how much space an item should occupy inside a flex container when there is extra space available

    The flexGrow factor is always relative to other items within the container

    **flex vs flexGrow**

    - when flex is set to a positive number, it is equivalent to setting flexGrow with the same positive numbers
    - flex also implicitly sets flexShrink to 1 and flexBasis to 0

12. **Relative and Absolute Layout** → The layouts are based on the position property, which defines how an element is positioned within its parent container
    - relative
    - absolute

### Dynamic user interfaces

Currently, all our learning has centered around Pixel 4 emulator device or physical device

Our app’s users won’t all be using identical devices

Device sizes may vary, ranging from more compact phones to larger devices like iPads or Android tablets

We must ensure that our app’s user interface remains responsive to these different device sizes while maintaining an optimal user experience

On the same device, a user might opt for portrait mode, while another prefers landscape orientation

**Platform specific code**

When developing a cross-platform app, maximizing code reuse is a priority

There are situations where it becomes necessary to tailor your code to specific platforms

React Native offers two approaches for organizing and separating platform specific code

- Platform module
- Platform-specific file extensiions

### List

1. **FlatList** → renders only the items currently in view, making it highly performant for long lists
2. **SectionList**

### Forms

In web development, we have lots of HMTL elements at our disposal to capture user input

For example, input fields, text areas, dropdown menus, checkboxes, radio groups and many more

The core RN library only provides TextInput and Switch

These will be sole focus of our learning in this section

Expo expands our toolkit, offering additional components like checkboxes and date pickers through the Expo SDK.

1. **TextInput** → TextInput component is a fundamental building block for user input in React Native which allows users to enter text and other data into your app
2. **Switch** → The Switch component serves as a valuable tool for integrating toggles into your app’s user interface

   It’s particularly well-suited for scenarios where you require users to make binary choices, such as enabling or disabling specific app features.

### Networking

1. Fetching and submitting data to an API
2. Loading states
3. Error handling
4. FlatList component to display our data
   1. GET Requests
   2. loading state
   3. refreshing
   4. POST Request
   5. Error Handling

### Navigation

The mechanism that allows users to move across different screens, access features, and generally use your app effectively

A go-to solution for handling navigation is the React Navigation library

Expo has its own built-in routing feature exclusive to Expo projects

React navigation works both with and without Expo in React Native apps

Focus on React Navigation in this section

**React Navigation**

- Provides a variety of navigators like Stack, Drawer and Tab navigators
- Stack navigator provides a way for your app to transition between screens where each new screen is placed on top of a stack
- Drawer navigation renders a navigation drawer on the side of the screen which can be opened and closed via gestures
- A tab navigator at the bottom of your screen lets you easily switch between different routes

1. **Stack Navigation**

   1. Two navigators: Stack navigator and Native Stack Navigator
   2. The stack navigator is a javascript-based navigator which offers a high degree of customization, making it great choice for apps that require a unique navigation experience
   3. However, this comes at the cost of performance especially when compared to its counterpart, the native stack navigator
   4. The native stack navigator leverages the native navigation constructs of IOS and Android, providing better performance and a more native feel to the transitions and gestures
   5. The caveat here is, it might not offer the same level of customization as the stack navigator

   **Navigate between Screen**

   **passing data between screen**

   **stack navigation options**

   **Stack navigation dynamic options**

2. **Drawer Navigation**
   1. Drawer navigation introduces a hidden menu, sliding from either side of the screen
   2. It is particular beneficial in apps with multiple main sections that require a neat and organized navigation structure
3. **Tab Navigation**
   1. Tab navigation offers a way to switch between different screens by tapping on a tab which is usually displayed at the bottom of the screen
   2. It’s a common and intuitive navigation pattern found in many apps, providing a seamless, user-friendly experience.
