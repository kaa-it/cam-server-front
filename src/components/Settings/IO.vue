<template>
  <v-container fluid>
    <v-layout row wrap align-center>
      <v-flex d-flex xs12>
        <span class="headline font-weight-bold">{{ $t("io.title") }}</span>
      </v-flex>
      <v-flex xs12 sm7>
        <v-card class="my-3">
          <v-card-title class="yellow darken-1 mb-3">
            <span class="title">{{ $t("io.external_input_card_title") }}</span>
          </v-card-title>
          <v-layout row wrap align-center>
            <v-flex d-flex xs12>
              <v-select class="px-3" :label="$t('io.relay_idle_state')" :items="in_relay_idle_states" v-model="current_in_relay_idle_state"/>
            </v-flex>
            <v-flex d-flex xs6>
              <v-subheader class="black--text">{{ $t("io.relay_state") }}</v-subheader>
            </v-flex>
            <v-flex d-flex xs6>
              <v-text-field class="px-3" readonly v-model="current_in_relay_mode" />
            </v-flex>
          </v-layout>
        </v-card>
      </v-flex>
      <v-flex xs12 sm7>
        <v-card>
          <v-card-title class="yellow darken-1 mb-3">
            <span class="title">{{ $t("io.external_output_card_title") }}</span>
          </v-card-title>
          <v-layout row wrap align-center>
            <v-flex d-flex xs12>
              <v-select class="px-3" :label="$t('io.relay_mode')" :items="out_relay_modes" v-model="current_out_relay_mode"/>
            </v-flex>
            <v-flex d-flex xs6>
              <v-subheader class="black--text">{{ $t("io.delay_time") }}</v-subheader>
            </v-flex>
            <v-flex d-flex xs6>
              <v-text-field :disabled="!enabled_delay_time" class="px-3" v-model="delay_time" type="number" />
            </v-flex>
            <v-flex d-flex xs12>
              <v-select class="px-3" :label="$t('io.relay_idle_state')" :items="out_relay_idle_states" v-model="current_out_relay_idle_state"/>
            </v-flex>
            <v-flex d-flex xs12>
              <v-select class="px-3" :label="$t('io.relay_state')" :items="out_relay_states" v-model="current_out_relay_state"/>
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
      in_relay_idle_states: ["Open", "Closed"],
      current_in_relay_idle_state: "Open",
      out_relay_modes: ["Monostable", "Bistable"],
      current_out_relay_mode: "Monostable",
      current_in_relay_mode: "Inactive",
      delay_time: 10,
      out_relay_idle_states: ["Open", "Closed"],
      current_out_relay_idle_state: "Open",
      out_relay_states: ["Active", "Inactive"],
      current_out_relay_state: "Active",
      enabled_delay_time: true
    };
  },
  watch: {
    current_out_relay_mode(newVal) {
      this.enabled_delay_time = newVal == "Monostable";
    }
  }
};
</script>

<style>
</style>
