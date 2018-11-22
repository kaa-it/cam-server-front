<template>
  <v-container fluid>
    <v-layout row wrap>
      <v-flex d-flex xs12>
        <span class="headline font-weight-bold">{{ $t("camera_log.title") }}</span>
      </v-flex>
      <v-flex xs12 sm7>
        <v-card class="mt-3 pb-3">
          <v-card-title class="yellow darken-1 mb-3">
            <span class="title">{{ $t("camera_log.common_card_title") }}</span>
          </v-card-title>
          <v-layout row wrap align-center>
            <v-flex d-flex xs12>
              <v-combobox class="px-3" :items="log_levels" v-model="log_level" :label="$t('camera_log.log_level')"/>
            </v-flex>
            <v-flex d-flex xs4>
              <v-subheader class="black--text">{{ $t("camera_log.system_log")}}</v-subheader>
            </v-flex>
            <v-flex d-flex xs4>
              <v-btn round color="primary">{{ $t("camera_log.view") }}</v-btn>
            </v-flex>
            <v-flex d-flex xs4>
              <v-btn round color="primary">{{ $t("camera_log.clear") }}</v-btn>
            </v-flex>
            <v-flex d-flex xs4>
              <v-subheader class="black--text">{{ $t("camera_log.access_log")}}</v-subheader>
            </v-flex>
            <v-flex d-flex xs4>
              <v-btn round color="primary">{{ $t("camera_log.view") }}</v-btn>
            </v-flex>
            <v-flex d-flex xs4>
              <v-btn round color="primary">{{ $t("camera_log.clear") }}</v-btn>
            </v-flex>
          </v-layout>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      log_levels: ["Off", "Errors", "Warnings", "Information", "All"],
      log_level: "Information"
    };
  }
};
</script>

<style>
</style>
