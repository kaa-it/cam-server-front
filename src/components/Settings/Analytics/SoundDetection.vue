<template>
  <v-container fluid>
    <v-layout row wrap>
      <v-flex d-flex xs12>
        <span class="headline font-weight-bold">{{ $t("sound_detection.title") }}</span>
      </v-flex>
      <v-flex xs12 sm7 order-xs2 order-sm1>
        <v-card class="my-3">
          <v-card-title class="yellow darken-1 mb-3">
            <span class="title">{{ $t("sound_detection.sound_detection_card_title") }}</span>
          </v-card-title>
          <v-layout row wrap align-center>
             <v-flex d-flex xs12>
              <v-select class="px-3" :label="$t('sound_detection.sound_detection_mode')" :items="sound_detection_mode" v-model="current_sound_detection_mode"/>
            </v-flex>
            <v-radio-group class="px-4" v-model="radioGroup">
              <v-layout row wrap align-center>
              <v-flex xs6>
                <v-radio :disabled="!sound_detection_enabled" value="1" :label="$t('sound_detection.sensitivity_level')"/>
              </v-flex>
              <v-flex xs5 offset-xs1>
                <v-select :disabled="!sound_detection_enabled" :items="sensitivity_levels" v-model="current_sensitivity_level"/>
              </v-flex>
              <v-flex xs6>
                <v-radio :disabled="!sound_detection_enabled" value="2" :label="$t('sound_detection.customized_sensitivity_level')"/>
              </v-flex>
              <v-flex xs5 offset-xs1>
                <v-slider :disabled="!sound_detection_enabled" v-model="customized_sensitivity_level" thumb-label="always" :thumb-size="24"/>
              </v-flex>
              </v-layout>
            </v-radio-group>
          </v-layout>
        </v-card>
      </v-flex>
      <v-flex xs12 sm5 order-xs1 order-sm2>
        <v-card :class="{'mt-3': true, 'ml-0': $vuetify.breakpoint.xsOnly, 'ml-3': $vuetify.breakpoint.smAndUp}">
          <v-card-title class="yellow darken-1 mb-3">
            <span class="title">{{ $t("player.title") }}</span>
          </v-card-title>
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
  components: {
    VideoPlayer
  },
  data() {
    return {
      sound_detection_mode: ["Off", "Ambient", "Peak"],
      current_sound_detection_mode: "Off",
      sound_detection_enabled: false,
      radioGroup: 1,
      sensitivity_levels: ["Low", "Medium", "High"],
      current_sensitivity_level: "Medium",
      customized_sensitivity_level: 50
    };
  },
  watch: {
    current_sound_detection_mode(newVal) {
      this.sound_detection_enabled = newVal !== "Off";
    }
  }
};
</script>

<style>
</style>
