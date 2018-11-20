<template>
  <v-container fluid grid-list-xl>
    <v-layout row wrap align-center>
      <v-flex d-flex xs12>
        <h1>{{ $t("alarms.title") }}</h1>
      </v-flex>
      <v-flex xs12 sm7>
        <v-card>
          <v-card-title class="yellow darken-1 mb-2">
            <h3 class="headline">{{ $t("alarms.trigger_card_title") }}</h3>
          </v-card-title>
          <v-layout row wrap align-center>
            <v-flex d-flex xs12>
              <v-checkbox class="px-3" :label="$t('alarms.motion_detection')" v-model="motion_detection"/>
            </v-flex>
            <v-flex d-flex xs12>
              <v-checkbox class="px-3" :label="$t('alarms.network_connection_lost')" v-model="connection_lost"/>
            </v-flex>
            <v-flex d-flex xs12>
              <v-checkbox class="px-3" :label="$t('alarms.audio_alarm')" v-model="audio_alarm"/>
            </v-flex>
            <v-flex d-flex xs12>
              <v-checkbox class="px-3" :label="$t('alarms.external_triggers')" v-model="external_triggers"/>
            </v-flex>        
          </v-layout>
        </v-card>    
      </v-flex>
      <v-flex xs12 sm7>
        <v-card>
          <v-card-title class="yellow darken-1 mb-2">
            <h3 class="headline">{{ $t("alarms.action_card_title") }}</h3>
          </v-card-title>
          <v-layout row wrap align-center>
            <v-flex d-flex xs12>
              <v-checkbox class="px-3" :label="$t('alarms.activate_output_relay')" v-model="activate_output_relay"/>
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
