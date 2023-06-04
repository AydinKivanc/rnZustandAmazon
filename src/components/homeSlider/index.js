import React, { useEffect, useRef } from "react";
import { Animated, Image, View } from "react-native";

const adImages = [
  require("../../../assets/images/homeScreenAdd/slide1_1_background.png"),
  require("../../../assets/images/homeScreenAdd/slide1_a.png"),
  require("../../../assets/images/homeScreenAdd/slide1_b.png"),
  //require("../../../assets/images/homeScreenAdd/slide2_background.png"),
  //require("../../../assets/images/homeScreenAdd/slide3_background.png"),
];

const HomeSlider = () => {
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const imageIndex = useRef(0);

  useEffect(() => {
    const fadeInTimeout = setTimeout(() => {
      fadeIn();
    }, 1000);

    return () => clearTimeout(fadeInTimeout);
  }, []);

  const fadeIn = () => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start(() => {
      const fadeOutTimeout = setTimeout(() => {
        fadeOut();
      }, 1000);

      return () => clearTimeout(fadeOutTimeout);
    });
  };

  const fadeOut = () => {
    Animated.timing(fadeAnim, {
      toValue: 0,
      duration: 2000,
      useNativeDriver: true,
    }).start(() => {
      imageIndex.current = (imageIndex.current + 1) % adImages.length;
      fadeIn();
    });
  };

  return (
    <>
      <View
        style={{
          flex: 1,
          //position: "absolute",
          // top: -50,
          //left: 0,
          //height: "100%",
          // width: "100%",
          position: "relative",
        }}
      >
        <Image
          source={adImages[0]}
          style={{
            opacity: 1,
            height: "100%",
            width: "100%",
            resizeMode: "contain",
            position: "absolute",
          }}
        />

        {adImages.slice(1).map((image, index) => {
          const isVisible = imageIndex.current === index;
          const opacity = isVisible ? fadeAnim : 0;

          return (
            <Animated.View
              key={index}
              style={{
                opacity,
                height: "100%",
                width: "100%",
                resizeMode: "contain",
                position: "absolute",
              }}
            >
              <Image
                source={image}
                style={{
                  opacity: 1,
                  height: "100%",
                  width: "100%",
                  resizeMode: "contain",
                }}
              />
            </Animated.View>
          );
        })}
      </View>
    </>
  );
};

export default HomeSlider;
