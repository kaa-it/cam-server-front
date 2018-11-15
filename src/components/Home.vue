<template>
    <v-container>
      <v-layout row>
        <v-flex xs12>
          <v-select
            :items="items"
            item-text="name"
            item-value="url"
            v-model="defaultItem"
            @change="onStreamSwitch"
            :label="$t('home.stream')"
            outline
            return-object
          ></v-select>
          <v-card class="elevation-6">
            <v-toolbar>
              <v-toolbar-title>{{defaultItem.url}}</v-toolbar-title>
            </v-toolbar>
            <v-card-text>
              <VideoPlayer/>
            </v-card-text>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
</template>

<script>
import VideoPlayer from "@/components/VideoPlayer";

export default {
  name: "Home",
  components: {
    VideoPlayer
  },
  data() {
    return {
      defaultItem: {
        name: "H.264 (1920x1080)",
        url: "rtsp://192.168.11.235/Streaming/channels/1"
      },
      items: [
        {
          name: "H.264 (1920x1080)",
          url: "rtsp://192.168.11.235/Streaming/channels/1"
        },
        {
          name: "H.264 (720x400)",
          url: "rtsp://192.168.11.235/Streaming/channels/2"
        },
        {
          name: "H.264 (384x216)",
          url: "rtsp://192.168.11.235/Streaming/channels/3"
        },
        {
          name: "H.265 (384x216)",
          url: "rtsp://192.168.11.235/Streaming/channels/4"
        }
      ],
      player: null
    };
  }
};
</script>

<style scoped>
video {
  width: 100%;
}
</style>
