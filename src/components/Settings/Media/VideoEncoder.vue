<template>
  <v-container fluid grid-list-xl>
    <v-layout row wrap>
      <v-flex d-flex xs12>
        <h1>{{ $t("video_encoder.title", [id]) }}</h1>
      </v-flex>
      <v-flex xs12 sm7 order-xs2 order-sm1>
        <v-card>
          <v-card-title class="yellow darken-1 mb-2">
            <h3 class="headline">{{ $t("video_encoder.encode_card_title") }}</h3>
          </v-card-title>
          <v-layout row wrap>
            <v-flex d-flex xs12>
              <v-select class="px-3" :label="$t('video_encoder.codec_type')" :items="codec_type" v-model="current_codec_type"/>
            </v-flex>
            <v-flex d-flex xs12>
              <v-select class="px-3" :label="$t('video_encoder.resolution')" :items="resolution" v-model="current_resolution"/>
            </v-flex>
            <v-flex d-flex xs6>
              <v-subheader class="black--text">{{ $t("video_encoder.framerate") }}</v-subheader>
            </v-flex>
            <v-flex d-flex xs6>
              <v-text-field v-model="framerate" class="px-3" type="number"/>
            </v-flex>
            <v-flex d-flex xs12>
              <v-select class="px-3" :label="$t('video_encoder.rate_control')" :items="rate_control" v-model="current_rate_control"/>
            </v-flex>
            <v-flex d-flex xs6>
              <v-subheader class="black--text">{{ $t("video_encoder.bitrate") }}</v-subheader>
            </v-flex>
            <v-flex d-flex xs6>
              <v-text-field v-model="bitrate" class="px-3" type="number"/>
            </v-flex>
            <v-flex d-flex xs6>
              <v-subheader class="black--text">{{ $t("video_encoder.quality") }}</v-subheader>
            </v-flex>
            <v-flex d-flex xs6>
              <v-text-field readonly v-model="quality" class="px-3" type="number"/>
            </v-flex>           
          </v-layout>  
        </v-card>
      </v-flex>
      <v-flex xs12 sm5 order-xs1 order-sm2>
        <v-card>
          <v-card-title class="yellow darken-1 mb-2">
            <h3 class="headline">{{ $t("player.title") }}</h3>
          </v-card-title>
          <v-card-text>
            <VideoPlayer/>
          </v-card-text>
        </v-card>
      </v-flex>
      <v-flex xs12 sm7 order-xs3 order-sm3>   
        <v-card>
          <v-card-title class="yellow darken-1">
            <h3 class="headline mb-0">{{ $t("video_encoder.auxilary_card_title") }}</h3>
          </v-card-title>
          <v-layout row wrap>
            <v-flex d-flex xs6>
              <v-subheader class="black--text">{{ $t("video_encoder.gop_length") }}</v-subheader>
            </v-flex>
            <v-flex d-flex xs6>
              <v-text-field v-model="gop_length" class="px-3" type="number"/>
            </v-flex>
          </v-layout>  
        </v-card>
      </v-flex>        
    </v-layout>
  </v-container>    
</template>

<script>
import VideoPlayer from "@/components/VideoPlayer";

export default {
  props: {
    id: {
      type: String,
      required: true
    }
  },
  components: {
    VideoPlayer
  },
  data() {
    return {
      codec_type: ["H.264", "H.265", "MJPEG"],
      current_codec_type: "H.264",
      resolution: ["1280x720", "1280x960", "1440x1080", "1920x1080"],
      current_resolution: "1920x1080",
      framerate: 25,
      rate_control: ["CBR", "VBR", "Off"],
      current_rate_control: "CBR",
      bitrate: 2000,
      quality: 50,
      gop_length: 50
    };
  }
};
</script>

<style>
</style>
