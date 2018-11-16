<template>
  <v-container fluid grid-list-xl>
    <v-layout row wrap>
      <v-flex d-flex xs12>
        <h1>{{ $t("image.title") }}</h1>
      </v-flex>
      <v-flex xs12 sm7 order-xs2 order-sm1>
        <v-card>
          <v-card-title class="yellow darken-1 mb-2">
            <h3 class="headline">{{ $t("image.image_card_title") }}</h3>
          </v-card-title>
          <v-layout row wrap align-baseline>
            <v-flex d-flex xs6>
              <v-subheader class="black--text">{{ $t("image.brightness") }}</v-subheader>
            </v-flex>
            <v-flex d-flex xs6>
              <v-slider class="px-3" v-model="brightness" thumb-label="always" :thumb-size="24"/>
            </v-flex>
            <v-flex d-flex xs6>
              <v-subheader class="black--text">{{ $t("image.contrast") }}</v-subheader>
            </v-flex>
            <v-flex d-flex xs6>
              <v-slider class="px-3" v-model="contrast" thumb-label="always" :thumb-size="24"/>
            </v-flex>
            <v-flex d-flex xs6>
              <v-subheader class="black--text">{{ $t("image.saturation") }}</v-subheader>
            </v-flex>
            <v-flex d-flex xs6>
              <v-slider class="px-3" v-model="saturation" thumb-label="always" :thumb-size="24"/>
            </v-flex>
            <v-flex d-flex xs6>
              <v-subheader class="black--text">{{ $t("image.hue") }}</v-subheader>
            </v-flex>
            <v-flex d-flex xs6>
              <v-slider class="px-3" v-model="hue" thumb-label="always" :thumb-size="24"/>
            </v-flex>
            <v-flex d-flex xs12>
              <v-switch class="px-3" v-model="backlight_compensation_mode">
                <div slot="label" class="font-weight-black body-1 black--text">{{ $t('image.backlight_compensation_mode') }}</div>
              </v-switch>
            </v-flex>
            <v-flex d-flex xs6>
              <v-subheader class="black--text">{{ $t("image.backlight_compensation_level") }}</v-subheader>
            </v-flex>
            <v-flex d-flex xs6>
              <v-slider class="px-3" v-model="backlight_compensation_level" thumb-label="always" :thumb-size="24"/>
            </v-flex>
            <v-flex d-flex xs12>
              <v-switch class="px-3" v-model="wdr_mode">
                <div slot="label" class="font-weight-black body-1 black--text">{{ $t('image.wdr_mode') }}</div>
              </v-switch>
            </v-flex>
            <v-flex d-flex xs6>
              <v-subheader class="black--text">{{ $t("image.wdr_level") }}</v-subheader>
            </v-flex>
            <v-flex d-flex xs6>
              <v-slider class="px-3" v-model="wdr_level" thumb-label="always" :thumb-size="24"/>
            </v-flex>
            <v-flex d-flex xs12>
              <v-switch class="px-3" v-model="defog_mode">
                <div slot="label" class="font-weight-black body-1 black--text">{{ $t('image.defog_mode') }}</div>
              </v-switch>
            </v-flex>
            <v-flex d-flex xs6>
              <v-subheader class="black--text">{{ $t("image.defog_level") }}</v-subheader>
            </v-flex>
            <v-flex d-flex xs6>
              <v-slider class="px-3" v-model="defog_level" thumb-label="always" :thumb-size="24"/>
            </v-flex>
            <v-flex d-flex xs12>
              <v-switch class="px-3" v-model="ldc_mode">
                <div slot="label" class="font-weight-black body-1 black--text">{{ $t('image.ldc_mode') }}</div>
              </v-switch>
            </v-flex>
            <v-flex d-flex xs6>
              <v-subheader class="black--text">{{ $t("image.ldc_level") }}</v-subheader>
            </v-flex>
            <v-flex d-flex xs6>
              <v-slider class="px-3" v-model="ldc_level" thumb-label="always" :thumb-size="24"/>
            </v-flex>
            <v-flex d-flex xs12>
              <v-select class="px-3" :label="$t('image.infrared_cutoff_filter')" :items="infrared_cutoff_filter" v-model="current_infrared_cutoff_filter"/>
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
            <h3 class="headline mb-0">{{ $t("image.exposure_card_title") }}</h3>
          </v-card-title>
          <v-layout row wrap>
            <v-flex d-flex xs12> 
              <v-select class="px-3" :label="$t('image.white_balance')" :items="white_balance" v-model="current_white_balance"/>
            </v-flex>
            <v-flex d-flex xs12>  
              <v-select class="px-3" :label="$t('image.exposure')" :items="exposure" v-model="current_exposure"/>
            </v-flex>
            <v-flex d-flex xs12>  
              <v-select class="px-3" :label="$t('image.exposure_priority')" :items="exposure_priority" v-model="current_exposure_priority"/>
            </v-flex>
            <v-flex d-flex xs12>  
              <v-select class="px-3" :label="$t('image.max_exposure_time')" :items="max_exposure_time" v-model="current_max_exposure_time"/>
            </v-flex>
            <v-flex d-flex xs12>  
              <v-select class="px-3" :label="$t('image.max_gain')" :items="max_gain" v-model="current_max_gain"/>
            </v-flex>
            <v-flex d-flex xs12>  
              <v-select class="px-3" :label="$t('image.flicker_control')" :items="flicker_control" v-model="current_flicker_control"/>
            </v-flex>  
          </v-layout>    
        </v-card>
      </v-flex>
      <v-flex xs12 sm7 order-xs4 order-sm4>
        <v-card>
          <v-card-title class="yellow darken-1">
            <h3 class="headline mb-0">{{ $t("image.denoise_card_title") }}</h3>
          </v-card-title>
          <v-layout row wrap>
            <v-flex d-flex xs12>
                <v-select class="px-3" :label="$t('image.spatial_filter')" :items="spatial_filter" v-model="current_spatial_filter"/>
            </v-flex>
            <v-flex d-flex xs12>        
                <v-select class="px-3" :label="$t('image.temporal_filter')" :items="temporal_filter" v-model="current_temporal_filter"/>
            </v-flex>    
          </v-layout>    
        </v-card>
      </v-flex>
      <v-flex xs12 sm7 order-xs5 order-sm5>
        <v-card>
          <v-card-title class="yellow darken-1">
            <h3 class="headline mb-0">{{ $t("image.advance_card_title") }}</h3>
          </v-card-title>
          <v-layout row wrap>
            <v-flex d-flex xs12>
              <v-select class="px-3" :label="$t('image.image_sensor_mode')" :items="image_sensor_mode" v-model="current_image_sensor_mode"/>
            </v-flex>
            <v-flex d-flex xs12>  
              <v-select class="px-3" :label="$t('image.flip_and_mirror')" :items="flip_and_mirror" v-model="current_flip_and_mirror"/>
            </v-flex>
            <v-flex d-flex xs12>
              <v-select class="px-3" :label="$t('image.rotation')" :items="rotation" v-model="current_rotation"/>
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
      brightness: 50,
      contrast: 50,
      saturation: 50,
      hue: 50,
      backlight_compensation_mode: false,
      backlight_compensation_level: 50,
      wdr_mode: false,
      wdr_level: 50,
      defog_mode: false,
      defog_level: 50,
      ldc_mode: false,
      ldc_level: 50,
      infrared_cutoff_filter: ["Auto", "Day", "Night"],
      current_infrared_cutoff_filter: "Day",
      white_balance: ["Auto", "Manual"],
      current_white_balance: "Auto",
      exposure: ["Auto", "Manual"],
      current_exposure: "Auto",
      exposure_priority: ["Frame rate", "Low noise"],
      current_exposure_priority: "Frame rate",
      max_exposure_time: [
        "Auto",
        "1/8000",
        "1/4000",
        "1/2000",
        "1/1000",
        "1/500",
        "1/250",
        "1/125",
        "1/60",
        "1/30",
        "1/15",
        "1/5",
        "1/2",
        "1"
      ],
      current_max_exposure_time: "Auto",
      max_gain: ["Auto", "0", "6", "12", "18", "24", "30", "36", "42"],
      current_max_gain: "Auto",
      flicker_control: ["Off", "50hz flicker", "60hz flicker"],
      current_flicker_control: "50hz flicker",
      spatial_filter: ["Off", "Auto", "Low", "Medium", "High"],
      current_spatial_filter: "Auto",
      temporal_filter: ["Off", "Auto", "Low", "Medium", "High"],
      current_temporal_filter: "Auto",
      image_sensor_mode: ["1920x1080@50fps", "2592x1080@50fps"],
      current_image_sensor_mode: "1920x1080@50fps",
      flip_and_mirror: ["Off", "Horizontal", "Vertical", "Both"],
      current_flip_and_mirror: "Off",
      rotation: ["Off", "Left", "Right"],
      current_rotation: "Off"
    };
  }
};
</script>

<style>
</style>
