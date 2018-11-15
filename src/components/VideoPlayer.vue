<template>
  <video ref="videoPlayer" :style="{'z-index': 0}" autoplay="" muted="muted"/>
</template>

<script>
import dashjs from "dashjs";
import base64 from "base-64";

export default {
  mounted() {
    try {
      const url = "http://192.168.11.235:8088/start0.mpd";

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
  }
};
</script>

<style scoped>
video {
  width: 100%;
}
</style>
