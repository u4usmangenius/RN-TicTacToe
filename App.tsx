// import React from 'react';
// import { BannerAd, BannerAdSize, TestIds } from 'react-native-google-mobile-ads';

// const adUnitId = __DEV__ ? TestIds.ADAPTIVE_BANNER : 'ca-app-pub-xxxxxxxxxxxxx/yyyyyyyyyyyyyy';

// function App() {
//   return (
//     <BannerAd
//       unitId={adUnitId}
//       size={BannerAdSize.ANCHORED_ADAPTIVE_BANNER}
//       requestOptions={{
//         networkExtras: {
//           collapsible: 'bottom',
//         },
//       }}
//     />
//   );
// }

// working part of code however currently add is not available to google

// import React, { useEffect, useState } from "react";
// import {
//   Button,
//   View,
//   Text,
//   ActivityIndicator,
//   StyleSheet,
// } from "react-native";
// import {
//   InterstitialAd,
//   AdEventType,
//   TestIds,
// } from "react-native-google-mobile-ads";

// const adUnitId = __DEV__
//   ? TestIds.INTERSTITIAL
//   : "ca-app-pub-3940256099942544/1033173712";

// const interstitial = InterstitialAd.createForAdRequest(adUnitId, {
//   keywords: ["fashion", "clothing"],
// });

// const App = () => {
//   const [loaded, setLoaded] = useState(false);
//   const [loadingError, setLoadingError] = useState(null);

//   useEffect(() => {
//     const loadAd = () => {
//       interstitial.load();
//     };

//     const unsubscribeLoaded = interstitial.addAdEventListener(
//       AdEventType.LOADED,
//       () => {
//         setLoaded(true);
//       }
//     );

//     const unsubscribeFailed = interstitial.addAdEventListener(
//       AdEventType.ERROR,
//       (error) => {
//         console.error("Ad failed to load:", error);
//         if (error.code === "googleMobileAds/no-fill") {
//           // Retry loading the ad after 10 seconds
//           setTimeout(loadAd, 10000);
//         }
//       }
//     );

//     // Start loading the interstitial ad
//     loadAd();

//     // Unsubscribe from events on unmount
//     return () => {
//       unsubscribeLoaded();
//       unsubscribeFailed();
//     };
//   }, []);

//   if (loadingError) {
//     return (
//       <View style={styles.container}>
//         <Text>Failed to load ad.</Text>
//       </View>
//     );
//   }

//   if (!loaded) {
//     return (
//       <View style={styles.container}>
//         <ActivityIndicator size="large" color="#0000ff" />
//         <Text>Loading Ad...</Text>
//       </View>
//     );
//   }

//   return (
//     <View style={styles.container}>
//       <Button
//         title="Show Interstitial"
//         onPress={() => {
//           interstitial.show().catch((error) => {
//             console.error("Failed to show interstitial ad:", error);
//           });
//         }}
//       />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center",
//   },
// });

// export default App;
// working part of code however currently add is not available to google

/* below this above is goodly working*/

// Add open Add showing
// import React, { useEffect, useState } from "react";
// import { Button, View, Text, StyleSheet } from "react-native";
// import {
//   InterstitialAd,
//   AdEventType,
//   TestIds,
// } from "react-native-google-mobile-ads";

// // Define the ad unit ID based on the environment
// const adUnitId = __DEV__
//   ? TestIds.INTERSTITIAL
//   : "ca-app-pub-3940256099942544/1033173712";

// const interstitial = InterstitialAd.createForAdRequest(adUnitId, {
//   keywords: ["fashion", "clothing"],
// });

// function App() {
//   const [loaded, setLoaded] = useState(false);

//   useEffect(() => {
//     const unsubscribe = interstitial.addAdEventListener(
//       AdEventType.LOADED,
//       () => {
//         setLoaded(true);
//       }
//     );

//     // Start loading the interstitial ad
//     interstitial.load();

//     // Unsubscribe from events on unmount
//     return () => {
//       unsubscribe();
//     };
//   }, []);

//   // Render a message if the ad is not loaded
//   if (!loaded) {
//     return (
//       <View style={styles.container}>
//         <Text>Loading Ad...</Text>
//       </View>
//     );
//   }

//   return (
//     <View style={styles.container}>
//       <Button
//         title="Show Interstitial"
//         onPress={() => {
//           interstitial.show().catch((error) => {
//             console.error("Failed to show interstitial ad:", error);
//           });
//         }}
//       />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center",
//   },
// });

// export default App;

//latest Loading Ad... but not shown afsos
// import React, { useEffect, useState } from "react";
// import { Button, View, Text, StyleSheet } from "react-native";
// import {
//   RewardedAd,
//   RewardedAdEventType,
//   TestIds,
// } from "react-native-google-mobile-ads";

// // Define the ad unit ID based on the environment
// const adUnitId = __DEV__
//   ? TestIds.REWARDED
//   : "ca-app-pub-3940256099942544/5224354917";

// function App() {
//   const [loaded, setLoaded] = useState(false);
//   const [rewardedAd] = useState(
//     RewardedAd.createForAdRequest(adUnitId, {
//       keywords: ["fashion", "clothing"],
//     })
//   );

//   useEffect(() => {
//     // Define event listeners
//     const unsubscribeLoaded = rewardedAd.addAdEventListener(
//       RewardedAdEventType.LOADED,
//       () => {
//         setLoaded(true);
//       }
//     );
//     const unsubscribeEarned = rewardedAd.addAdEventListener(
//       RewardedAdEventType.EARNED_REWARD,
//       (reward) => {
//         console.log("User earned reward of ", reward);
//       }
//     );

//     // Start loading the rewarded ad
//     rewardedAd.load();

//     // Cleanup event listeners on unmount
//     return () => {
//       unsubscribeLoaded();
//       unsubscribeEarned();
//     };
//   }, [rewardedAd]);

//   // Render nothing if ad is not loaded
//   if (!loaded) {
//     return (
//       <View style={styles.container}>
//         <Text>Loading Ad...</Text>
//       </View>
//     );
//   }

//   return (
//     <View style={styles.container}>
//       <Button
//         title="Show Rewarded Ad"
//         onPress={() => {
//           rewardedAd.show().catch((error) => {
//             console.error("Failed to show rewarded ad:", error);
//           });
//         }}
//       />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center",
//   },
// });

// export default App;

// import React, { useEffect, useState } from 'react';
// import { Button } from 'react-native';
// import { RewardedAd, RewardedAdEventType, TestIds } from 'react-native-google-mobile-ads';

// const adUnitId = __DEV__ ? TestIds.REWARDED : 'ca-app-pub-3940256099942544/5224354917';

// const rewarded = RewardedAd.createForAdRequest(adUnitId, {
//   keywords: ['fashion', 'clothing'],
// });

// function App() {
//   const [loaded, setLoaded] = useState(false);

//   useEffect(() => {
//     const unsubscribeLoaded = rewarded.addAdEventListener(RewardedAdEventType.LOADED, () => {
//       setLoaded(true);
//     });
//     const unsubscribeEarned = rewarded.addAdEventListener(
//       RewardedAdEventType.EARNED_REWARD,
//       reward => {
//         console.log('User earned reward of ', reward);
//       },
//     );

//     // Start loading the rewarded ad straight away
//     rewarded.load();

//     // Unsubscribe from events on unmount
//     return () => {
//       unsubscribeLoaded();
//       unsubscribeEarned();
//     };
//   }, []);

//   // No advert ready to show yet
//   if (!loaded) {
//     return null;
//   }

//   return (
//     <Button
//       title="Show Rewarded Ad"
//       onPress={() => {
//         rewarded.show();
//       }}
//     />
//   );
// }

// open ad now
// import React, { useEffect, useState } from "react";
// import { View, Button, Alert, StyleSheet } from "react-native";
// import {
//   RewardedAd,
//   RewardedAdEventType,
//   TestIds,
//   AdEventType,
// } from "react-native-google-mobile-ads";

// const adUnitId = __DEV__
//   ? TestIds.REWARDED
//   : "ca-app-pub-3940256099942544/5224354917";
// const MAX_RETRY_ATTEMPTS = 3; // Maximum number of retry attempts for loading ads

// const App = () => {
//   const [rewardedAd, setRewardedAd] = useState<RewardedAd | null>(null);
//   const [isAdLoaded, setIsAdLoaded] = useState(false);
//   const [retryAttempts, setRetryAttempts] = useState(0);

//   useEffect(() => {
//     const ad = RewardedAd.createForAdRequest(adUnitId, {
//       keywords: ["fashion", "clothing"],
//     });

//     setRewardedAd(ad);

//     const handleAdEvent = ({
//       type,
//       payload,
//     }: {
//       type: AdEventType;
//       payload: any;
//     }) => {
//       switch (type) {
//         case RewardedAdEventType.LOADED:
//           console.log("Ad has loaded");
//           setIsAdLoaded(true);
//           setRetryAttempts(0); // Reset retry attempts on successful load
//           break;
//         case RewardedAdEventType.EARNED_REWARD:
//           console.log("User earned reward of ", payload);
//           break;
//         case AdEventType.ERROR:
//           console.error("Ad failed to load with error: ", payload.message);
//           setIsAdLoaded(false);
//           if (retryAttempts < MAX_RETRY_ATTEMPTS) {
//             console.log("Retrying to load ad...");
//             setRetryAttempts((prevAttempts) => prevAttempts + 1);
//             ad.load(); // Retry loading the ad
//           } else {
//             Alert.alert(
//               "Ad Error",
//               "Failed to load ad after multiple attempts. Please check your network connection and try again later."
//             );
//           }
//           break;
//         default:
//           console.log("Unknown ad event: ", type);
//       }
//     };

//     const unsubscribeLoaded = ad.addAdEventListener(
//       RewardedAdEventType.LOADED,
//       handleAdEvent
//     );
//     const unsubscribeError = ad.addAdEventListener(
//       AdEventType.ERROR,
//       handleAdEvent
//     );

//     ad.load(); // Initial ad load

//     // Cleanup listeners on unmount
//     return () => {
//       unsubscribeLoaded();
//       unsubscribeError();
//     };
//   }, [retryAttempts]);

//   const showAd = () => {
//     if (rewardedAd && isAdLoaded) {
//       rewardedAd.show().catch((error) => {
//         Alert.alert("Ad Error", `Failed to show ad: ${error.message}`);
//       });
//     } else {
//       Alert.alert(
//         "Ad Not Loaded",
//         "The ad is not loaded yet. Please wait or retry."
//       );
//     }
//   };

//   return (
//     <View style={styles.container}>
//       <Button title="Show Rewarded Ad" onPress={showAd} />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center",
//   },
// });

// export default App;

// now

// before;
import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Button,
  StyleSheet,
  Alert,
} from "react-native";
import {
  BannerAd,
  BannerAdSize,
  RewardedAd,
  RewardedAdEventType,
  TestIds,
} from "react-native-google-mobile-ads";

const adUnitId = __DEV__
  ? TestIds.ADAPTIVE_BANNER
  : "ca-app-pub-xxxxxxxxxxxxx/yyyyyyyyyyyyyy";

import { Provider as PaperProvider, Appbar } from "react-native-paper";

const rewardedAdUnitId = "ca-app-pub-3940256099942544/5224354917"; // Test ad unit ID

const TicTacToe = () => {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);
  const [rewardedAd, setRewardedAd] = useState(null);

  useEffect(() => {
    const ad = RewardedAd.createForAdRequest(rewardedAdUnitId, {
      requestNonPersonalizedAdsOnly: true,
      serverSideVerificationOptions: {
        userId: "9999",
        customData: "my-custom-data",
      },
    });

    setRewardedAd(ad);

    // Event listeners with logging
    const unsubscribeLoaded = ad.addAdEventListener(
      RewardedAdEventType.LOADED,
      () => {
        console.log("Ad Loaded");
      }
    );
    // ... similar logging for other event listeners

    return () => {
      unsubscribeLoaded();
      // ... unsubscribe from other event listeners
      ad.destroy();
    };
  }, []);
  const handleClick = (i) => {
    const squaresCopy = squares.slice();
    if (calculateWinner(squaresCopy) || squaresCopy[i]) {
      return;
    }
    squaresCopy[i] = xIsNext ? "X" : "O";
    setSquares(squaresCopy);
    setXIsNext(!xIsNext);
  };

  const restartGame = () => {
    setSquares(Array(9).fill(null));
    setXIsNext(true);
  };

  const showAd = () => {
    if (rewardedAd && rewardedAd.loaded) {
      console.log("touched");
      rewardedAd.show().catch((error) => {
        Alert.alert("Ad Error", `Failed to show ad: ${error.message}`);
      });
    } else {
      Alert.alert("Ad Not Loaded", "The ad is not loaded yet.");
    }
  };

  const renderSquare = (i) => {
    return (
      <TouchableOpacity style={styles.square} onPress={() => handleClick(i)}>
        <Text style={styles.squareText}>{squares[i]}</Text>
      </TouchableOpacity>
    );
  };

  const winner = calculateWinner(squares);
  let status;
  if (winner) {
    status = `Winner: ${winner}`;
  } else if (squares.every((square) => square !== null)) {
    status = "Draw!";
  } else {
    status = `Next player: ${xIsNext ? "X" : "O"}`;
  }

  return (
    <PaperProvider>
      <Appbar.Header>
        <Appbar.Content title="Tic Tac Toe" />
      </Appbar.Header>
      <BannerAd
        unitId={adUnitId}
        size={BannerAdSize.ANCHORED_ADAPTIVE_BANNER}
        requestOptions={{
          networkExtras: {
            collapsible: "bottom",
          },
        }}
      />
      <View style={styles.container}>
        <Text style={styles.title}>Tic Tac Toe</Text>
        <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
          {renderSquare(0)}
          {renderSquare(1)}
          {renderSquare(2)}
        </View>
        <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
          {renderSquare(3)}
          {renderSquare(4)}
          {renderSquare(5)}
        </View>
        <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
          {renderSquare(6)}
          {renderSquare(7)}
          {renderSquare(8)}
        </View>
        <Text style={styles.status}>{status}</Text>
        <Button
          title="Restart Game"
          onPress={restartGame}
          style={styles.restartButton}
        />
        <Button title="Show Rewarded Ad" onPress={showAd} />
      </View>
    </PaperProvider>
  );
};

const calculateWinner = (squares) => {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFFFE0",
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  square: {
    width: 100,
    height: 100,
    borderWidth: 1,
    borderColor: "black",
    justifyContent: "center",
    alignItems: "center",
  },
  squareText: {
    fontSize: 40,
  },
  status: {
    marginVertical: 20,
    fontSize: 20,
  },
  restartButton: {
    marginTop: 10,
  },
});

export default TicTacToe;

// very before

// import React, { Component } from "react";
// import { View, Text, TouchableOpacity, Button, StyleSheet } from "react-native";
// import { Provider as PaperProvider, Appbar } from "react-native-paper";
// import {
//   RewardedAd,
//   RewardedAdEventType,
//   TestIds,
//   AdEventType,
// } from "react-native-google-mobile-ads";

// const rewardedAdUnitId = TestIds.Rewarded;

// class TicTacToe extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       squares: Array(9).fill(null),
//       xIsNext: true,
//     };
//   }

//   // Function to handle clicks on the squares
//   handleClick(i) {
//     const squares = this.state.squares.slice();
//     if (calculateWinner(squares) || squares[i]) {
//       return;
//     }
//     squares[i] = this.state.xIsNext ? "X" : "O";
//     this.setState({
//       squares: squares,
//       xIsNext: !this.state.xIsNext,
//     });
//   }

//   // Function to restart the game
//   restartGame() {
//     this.setState({
//       // Set default values to reset the game
//       squares: Array(9).fill(null),
//       xIsNext: true,
//     });
//   }

//   // Function to render the squares while playing
//   renderSquare(i) {
//     return (
//       // render individual squares
//       <TouchableOpacity
//         style={styles.square}
//         onPress={() => this.handleClick(i)}
//       >
//         <Text style={styles.squareText}>{this.state.squares[i]}</Text>
//       </TouchableOpacity>
//     );
//   }

//   // Function to render everything inside the component
//   render() {
//     const winner = calculateWinner(this.state.squares);
//     let status;
//     // if someone won the game, change the status to winner
//     // if all the squares are filled and no one has won, display as draw!
//     if (winner) {
//       status = `Winner: ${winner}`;
//     } else if (this.state.squares.every((square) => square !== null)) {
//       status = "Draw!";
//     } else {
//       status = `Next player: ${this.state.xIsNext ? "X" : "O"}`;
//     }
//     // return entire game screen
//     return (
//       <View style={styles.container}>
//         <Text style={styles.title}>Tic Tac Toe</Text>
//         <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
//           {this.renderSquare(0)}
//           {this.renderSquare(1)}
//           {this.renderSquare(2)}
//         </View>
//         <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
//           {this.renderSquare(3)}
//           {this.renderSquare(4)}
//           {this.renderSquare(5)}
//         </View>
//         <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
//           {this.renderSquare(6)}
//           {this.renderSquare(7)}
//           {this.renderSquare(8)}
//         </View>
//         <Text style={styles.status}>{status}</Text>
//         <Button
//           title="Restart Game"
//           onPress={() => this.restartGame()}
//           style={styles.restartButton}
//         />
//       </View>
//     );
//   }
// }

// // Stylings
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center",
//     backgroundColor: "#FFFFE0",
//   },
//   title: {
//     fontSize: 24,
//     marginBottom: 20,
//   },
//   square: {
//     width: 100,
//     height: 100,
//     borderWidth: 1,
//     borderColor: "black",
//     justifyContent: "center",
//     alignItems: "center",
//   },
//   squareText: {
//     fontSize: 40,
//   },
//   status: {
//     marginVertical: 20,
//     fontSize: 20,
//   },
//   restartButton: {
//     marginTop: 10,
//   },
// });

// // Function to determine the winner
// function calculateWinner(squares) {
//   const lines = [
//     [0, 1, 2],
//     [3, 4, 5],
//     [6, 7, 8],
//     [0, 3, 6],
//     [1, 4, 7],
//     [2, 5, 8],
//     [0, 4, 8],
//     [2, 4, 6],
//   ];
//   for (let i = 0; i < lines.length; i++) {
//     const [a, b, c] = lines[i];
//     if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
//       return squares[a];
//     }
//   }
//   return null;
// }

// // Return the entire component
// export default function App() {

//   return (
//     <PaperProvider>
//       <Appbar.Header>
//         <Appbar.Content title="Tic Tac Toe" />
//       </Appbar.Header>
//       <TicTacToe />
//     </PaperProvider>
//   );
// }
