<template>
  <v-container fluid>
    <v-layout row wrap align-center>
      <v-flex d-flex xs12>
        <span class="headline font-weight-bold">{{ $t("alarms.title") }}</span>
      </v-flex>
      <v-flex xs12 sm7>
        <v-card class="my-3">
          <v-card-title class="yellow darken-1 mb-3">
            <span class="title">{{ $t("alarms.trigger_card_title") }}</span>
          </v-card-title>
          <v-layout row wrap align-center>
            <v-flex d-flex xs12>
              <v-checkbox class="px-3" v-model="motion_detection">
                <div slot="label" class="black--text">{{ $t("alarms.motion_detection") }}</div>
              </v-checkbox>
            </v-flex>
            <v-flex d-flex xs12>
              <v-checkbox class="px-3" v-model="connection_lost">
                <div slot="label" class="black--text">{{ $t("alarms.network_connection_lost") }}</div>
              </v-checkbox>
            </v-flex>
            <v-flex d-flex xs12>
              <v-checkbox class="px-3" v-model="audio_alarm">
                <div slot="label" class="black--text">{{ $t("alarms.audio_alarm") }}</div>
              </v-checkbox>
            </v-flex>
            <v-flex d-flex xs12>
              <v-checkbox class="px-3" v-model="external_triggers">
                <div slot="label" class="black--text">{{ $t("alarms.external_triggers") }}</div>
              </v-checkbox>
            </v-flex>
          </v-layout>
        </v-card>
      </v-flex>
      <v-flex xs12 sm7>
        <v-card>
          <v-card-title class="yellow darken-1 mb-3">
            <span class="title">{{ $t("alarms.action_card_title") }}</span>
          </v-card-title>
          <v-layout row wrap align-center>
            <v-flex d-flex xs12>
              <v-checkbox class="px-3" v-model="activate_output_relay">
                <div slot="label" class="black--text">{{ $t("alarms.activate_output_relay") }}</div>
              </v-checkbox>
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
      motion_detection: false,
      connection_lost: false,
      audio_alarm: false,
      external_triggers: false,
      activate_output_relay: false
    };
  }
};
</script>

<style>
</style>
