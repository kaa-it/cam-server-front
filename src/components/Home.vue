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
              <video ref="videoPlayer" :style="{'z-index': 0}" autoplay="" muted="muted"/>
            </v-card-text>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
</template>

<script>
import dashjs from "dashjs";
import base64 from "base-64";

export default {
  name: "Home",
  data() {
    return {
      defaultItem: {
        name: "H.264 (1920x1080)",
        url: "rtsp://192.168.11.35/Streaming/channels/1"
      },
      items: [
        {
          name: "H.264 (1920x1080)",
          url: "rtsp://192.168.11.35/Streaming/channels/1"
        },
        {
          name: "H.264 (720x400)",
          url: "rtsp://192.168.11.35/Streaming/channels/2"
        },
        {
          name: "H.264 (384x216)",
          url: "rtsp://192.168.11.35/Streaming/channels/3"
        },
        {
          name: "H.265 (384x216)",
          url: "rtsp://192.168.11.35/Streaming/channels/4"
        }
      ],
      player: null
    };
  },
  mounted() {
    try {
      const url = "http://192.168.11.35:8088/start0.mpd";

      this.player = dashjs.MediaPlayer().create();

      this.player.extend(
        "RequestModifier",
        () => {
          return {
            modifyRequestHeader: xhr => {
              xhr.setRequestHeader(
                "Authorization",
                "Basic " + base64.encode("admin:9999")
              );
              return xhr;
            }
          };
        },
        true
      );

      this.player.on(dashjs.MediaPlayer.events["ERROR"], e => console.log(e));
      this.player.initialize(this.$refs.videoPlayer);
      this.player.attachSource(url);
    } catch (err) {
      console.log(err);
    }
  },
  methods: {
    onStreamSwitch() {
      console.log(this.defaultItem.url);
    }
  }
};
</script>

<style scoped>
video {
  width: 100%;
}
</style>
