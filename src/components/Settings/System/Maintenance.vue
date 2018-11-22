<template>
  <v-container fluid>
    <v-layout row wrap>
      <v-flex d-flex xs12>
        <span class="headline font-weight-bold">{{ $t("maintenance.title") }}</span>
      </v-flex>
      <v-flex xs12 sm7>
        <v-card class="my-3 pb-3">
          <v-card-title class="yellow darken-1 mb-3">
            <span class="title">{{ $t("maintenance.common_card_title") }}</span>
          </v-card-title>
          <v-layout row wrap align-center>
            <v-flex d-flex xs12 sm6>
              <v-subheader class="black--text">{{ $t("maintenance.reboot_device")}}</v-subheader>
            </v-flex>
            <v-flex d-flex xs12 sm6>
              <v-btn round color="primary">{{ $t("maintenance.reboot") }}</v-btn>
            </v-flex>
            <v-flex d-flex xs12 sm6>
              <v-subheader class="black--text">{{ $t("maintenance.soft_factory_reset")}}</v-subheader>
            </v-flex>
            <v-flex d-flex xs12 sm6>
              <v-btn round color="primary">{{ $t("maintenance.reset") }}</v-btn>
            </v-flex>
            <v-flex d-flex xs12 sm6>
              <v-subheader class="black--text">{{ $t("maintenance.hard_factory_reset")}}</v-subheader>
            </v-flex>
            <v-flex d-flex xs12 sm6>
              <v-btn round color="primary">{{ $t("maintenance.reset") }}</v-btn>
            </v-flex>
            <v-flex d-flex xs12 sm6>
              <v-subheader class="black--text">{{ $t("maintenance.backup_firmware")}}</v-subheader>
            </v-flex>
            <v-flex d-flex xs12 sm6>
              <v-btn round color="primary">{{ $t("maintenance.backup") }}</v-btn>
            </v-flex>
          </v-layout>
        </v-card>
      </v-flex>
      <v-flex xs12 sm7>
        <v-card class="mb-3">
          <v-card-title class="yellow darken-1 mb-3">
            <span class="title">{{ $t("maintenance.auxilary_card_title") }}</span>
          </v-card-title>
          <v-layout row wrap align-center>
            <v-flex d-flex xs6>
              <v-subheader class="black--text">{{ $t("maintenance.run_wiper")}}</v-subheader>
            </v-flex>
            <v-flex d-flex xs6>
              <v-btn round color="primary">{{ $t("maintenance.start") }}</v-btn>
            </v-flex>
            <v-flex d-flex xs6>
              <v-subheader class="black--text">{{ $t("maintenance.washing")}}</v-subheader>
            </v-flex>
            <v-flex d-flex xs6>
              <v-btn round color="primary">{{ $t("maintenance.reset") }}</v-btn>
            </v-flex>
            <v-flex d-flex xs12>
              <v-checkbox class="px-3" v-model="autoclean">
                <div slot="label" class="black--text">{{ $t("maintenance.autoclean") }}</div>
              </v-checkbox>
            </v-flex>
            <v-flex d-flex xs6>
              <v-subheader :class="{'black--text' : autoclean}">{{ $t("maintenance.autoclean_interval")}}</v-subheader>
            </v-flex>
            <v-flex d-flex xs6>
              <v-text-field class="px-3" type="number" v-model="autoclean_interval" :disabled="!autoclean"/>
            </v-flex>
          </v-layout>
        </v-card>
      </v-flex>
      <v-flex xs12 sm7>
        <v-card class="pb-3">
          <v-card-title class="yellow darken-1 mb-3">
            <span class="title">{{ $t("maintenance.upgrading_card_title") }}</span>
          </v-card-title>
          <v-layout row wrap align-center>
            <v-flex d-flex xs6>
              <v-subheader class="black--text">{{ $t("maintenance.upgrade_file")}}</v-subheader>
            </v-flex>
            <v-flex d-flex xs6>
              <v-text-field class="px-3" :placeholder="$t('maintenance.no_file_choosen')" v-model="upgrade_file_path"/>
            </v-flex>
            <v-flex d-flex xs6>
              <v-btn round color="primary">{{ $t("maintenance.choose_file") }}</v-btn>
            </v-flex>
            <v-flex d-flex xs6>
              <v-btn :disabled="upgrade_file_path.length === 0" round color="primary">{{ $t("maintenance.upgrade") }}</v-btn>
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
      autoclean: false,
      autoclean_interval: 24,
      upgrade_file_path: ""
    };
  }
};
</script>

<style>
</style>
