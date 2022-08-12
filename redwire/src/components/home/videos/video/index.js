import React from "react";
import { View, Text, ScrollView } from "react-native";
import ContentShow from "../../../../utils/contentShow";
import Youtube from "react-native-youtube";

const VideoScreen = () => {
  return (
    <ScrollView>
      <View>
        <Youtube
          apiKey="AIzaSyD8sFa7_7MN13Yp1xQT4_DDWlqJK3MH6vY"
          videoId="D-UmfqFjpl0"
          play={false}
          onReady={(e) => console.log("ready")}
          onChangeState={(e) => console.log(e)}
          onError={(error) => console.log(error)}
          style={{ alignSelf: "stretch", height: 300 }}
        />
        <ContentShow />
      </View>
    </ScrollView>
  );
};

export default VideoScreen;
