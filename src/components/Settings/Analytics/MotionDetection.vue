<template>
  <v-container fluid grid-list-xl>
    <v-layout row wrap>
      <v-flex d-flex xs12>
        <h1>{{ $t("motion_detection.title") }}</h1>
      </v-flex>
      <v-flex xs12 sm7 order-xs2 order-sm1>
        <v-card>
          <v-card-title class="yellow darken-1 mb-2">
            <h3 class="headline">{{ $t("motion_detection.motion_detection_card_title") }}</h3>
          </v-card-title>
          <v-layout row wrap align-center>
            <v-flex d-flex xs12>
              <v-select class="px-3" :label="$t('motion_detection.motion_detection_mode')" :items="motion_detection_mode" v-model="current_motion_detection_mode"/>
            </v-flex>  
            <v-radio-group class="px-4" v-model="radioGroup">
              <v-layout row wrap align-center>
              <v-flex xs6>
                <v-radio :disabled="!motion_detection_enabled" value="1" :label="$t('motion_detection.sensitivity_level')"/>
              </v-flex>
              <v-flex xs5 offset-xs1>
                <v-select :disabled="!motion_detection_enabled" :items="sensitivity_levels" v-model="current_sensitivity_level"/> 
              </v-flex>
              <v-flex xs6>
                <v-radio :disabled="!motion_detection_enabled" value="2" :label="$t('motion_detection.customized_sensitivity_level')"/>
              </v-flex>
              <v-flex xs5 offset-xs1>
                <v-slider :disabled="!motion_detection_enabled" v-model="customized_sensitivity_level" thumb-label="always" :thumb-size="24"/> 
              </v-flex>
              </v-layout>    
            </v-radio-group>
            <v-flex xs12>
              <v-subheader class="px-3">{{ $t("motion_detection.region_of_interest") }}</v-subheader> 
            </v-flex>
            <v-flex xs12>
              <v-btn :disabled="!motion_detection_enabled" class="px-3" round color="purple">{{ $t("motion_detection.select_all") }}</v-btn>
              <v-btn :disabled="!motion_detection_enabled" class="px-3" round color="purple">{{ $t("motion_detection.clear_all") }}</v-btn>
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
      motion_detection_mode: ["Off", "On"],
      current_motion_detection_mode: "Off",
      motion_detection_enabled: false,
      radioGroup: 1,
      sensitivity_levels: ["Low", "Medium", "High"],
      current_sensitivity_level: "Medium",
      customized_sensitivity_level: 50
    };
  },
  watch: {
    current_motion_detection_mode(newVal) {
      this.motion_detection_enabled = newVal !== "Off";
    }
  }
};
</script>

<style>
</style>
