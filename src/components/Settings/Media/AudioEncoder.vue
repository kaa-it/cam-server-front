<template>
  <v-container fluid>
    <v-layout row wrap>
      <v-flex d-flex xs12>
        <span class="headline font-weight-bold">{{ $t("audio_encoder.title") }}</span>
      </v-flex>
      <v-flex xs12 sm7 order-xs2 order-sm1>
        <v-card class="my-3">
          <v-card-title class="yellow darken-1 mb-3">
              <span class="title">{{ $t("audio_encoder.audio_source_card_title") }}</span>
          </v-card-title>
          <v-layout row wrap align-baseline>
            <v-flex d-flex xs6>
                <v-subheader class="black--text">{{ $t("audio_encoder.input_gain") }}</v-subheader>
              </v-flex>
              <v-flex d-flex xs6>
                <v-slider class="px-3" v-model="input_gain" thumb-label="always" :thumb-size="24"/>
              </v-flex>
          </v-layout>
        </v-card>
      </v-flex>
      <v-flex xs12 sm5 order-xs1 order-sm2>
        <v-card :class="{'mt-3': true, 'ml-0': $vuetify.breakpoint.xsOnly, 'ml-3': $vuetify.breakpoint.smAndUp}">
          <v-card-title class="yellow darken-1 mb-3">
            <span class="title">{{ $t("player.title") }}</span>
          </v-card-title>
          <VideoPlayer class="mb-3 px-3"/>
        </v-card>
      </v-flex>
      <v-flex xs12 sm7 order-xs3 order-sm3>
        <v-card>
          <v-card-title class="yellow darken-1 mb-3">
              <span class="title">{{ $t("audio_encoder.encode_card_title") }}</span>
          </v-card-title>
          <v-layout row wrap align-center>
            <v-flex d-flex xs12>
              <v-checkbox height="1px" class="px-3" v-model="audio_enabled">
                <div slot="label" class="font-weight-black body-1 black--text">{{ $t("audio_encoder.enable_audio") }}</div>
              </v-checkbox>
            </v-flex>
            <v-flex d-flex xs12>
              <v-select :disabled="!audio_enabled" class="px-3" :label="$t('audio_encoder.encoding')" :items="encoding" v-model="current_encoding"/>
            </v-flex>
            <v-flex d-flex xs12>
              <v-select :disabled="!audio_enabled" class="px-3" :label="$t('audio_encoder.sample_rate')" :items="sample_rate" v-model="current_sample_rate"/>
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
  components: {
    VideoPlayer
  },
  data() {
    return {
      input_gain: 50,
      audio_enabled: true,
      encoding: ["pcm", "g711", "g726", "adpcm"],
      current_encoding: "g711",
      sample_rate: ["8000", "11025", "16000", "22050", "32000", "44100"],
      current_sample_rate: "8000"
    };
  }
};
</script>

<style>
</style>
