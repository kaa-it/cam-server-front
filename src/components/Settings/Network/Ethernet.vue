<template>
  <v-container fluid>
    <v-layout row wrap>
      <v-flex d-flex xs12>
        <span class="headline font-weight-bold">{{ $t("local.title") }}</span>
      </v-flex>
      <v-flex xs12 sm7>
        <v-card class="my-3">
          <v-card-title class="yellow darken-1 mb-3">
            <span class="title">{{ $t("local.ip_settings_card_title") }}</span>
          </v-card-title>
          <v-layout row wrap align-center>
            <v-flex d-flex xs12>
              <v-radio-group class="px-3" v-model="radioGroup">
                <v-radio value="1">
                  <div slot="label" class="black--text">{{ $t("local.dhcp") }}</div>
                </v-radio>
                <v-radio value="2">
                  <div slot="label" class="black--text">{{ $t("local.static") }}</div>
                </v-radio>
              </v-radio-group>
            </v-flex>
            <v-flex d-flex xs6>
              <v-subheader :disabled="radioGroup === '1'" :class="{'black--text': radioGroup !== '1'}">{{ $t("local.ip") }}</v-subheader>
            </v-flex>
            <v-flex d-flex xs6>
              <v-text-field :disabled="radioGroup === '1'" class="px-3" v-model="ip_address" />
            </v-flex>
            <v-flex d-flex xs6>
              <v-subheader :disabled="radioGroup === '1'" :class="{'black--text': radioGroup !== '1'}">{{ $t("local.netmask") }}</v-subheader>
            </v-flex>
            <v-flex d-flex xs6>
              <v-text-field :disabled="radioGroup === '1'" class="px-3" v-model="netmask" />
            </v-flex>
            <v-flex d-flex xs6>
              <v-subheader :disabled="radioGroup === '1'" :class="{'black--text': radioGroup !== '1'}">{{ $t("local.gateway") }}</v-subheader>
            </v-flex>
            <v-flex d-flex xs6>
              <v-text-field :disabled="radioGroup === '1'" class="px-3" v-model="gateway" />
            </v-flex>
            <v-flex d-flex xs6>
              <v-subheader :disabled="radioGroup === '1'" :class="{'black--text': radioGroup !== '1'}">{{ $t("local.dns") }}</v-subheader>
            </v-flex>
            <v-flex d-flex xs6>
              <v-text-field :disabled="radioGroup === '1'" class="px-3" v-model="dns" />
            </v-flex>
          </v-layout>
        </v-card>
      </v-flex>
      <v-flex xs12 sm7>
        <v-card class="mb-3">
          <v-card-title class="yellow darken-1 mb-3">
            <span class="title">{{ $t("local.port_settings_card_title") }}</span>
          </v-card-title>
          <v-layout row wrap align-center>
            <v-flex d-flex xs6>
              <v-subheader class="black--text">{{ $t("local.http_port") }}</v-subheader>
            </v-flex>
            <v-flex d-flex xs6>
              <v-text-field class="px-3" v-model="http_port" type="number" />
            </v-flex>
            <v-flex d-flex xs6>
              <v-subheader class="black--text">{{ $t("local.https_port") }}</v-subheader>
            </v-flex>
            <v-flex d-flex xs6>
              <v-text-field class="px-3" v-model="https_port" type="number" />
            </v-flex>
            <v-flex d-flex xs6>
              <v-subheader class="black--text">{{ $t("local.rtsp_port") }}</v-subheader>
            </v-flex>
            <v-flex d-flex xs6>
              <v-text-field class="px-3" v-model="rtsp_port" type="number" />
            </v-flex>
          </v-layout>
        </v-card>
      </v-flex>
      <v-flex xs12 sm7>
        <v-card>
          <v-card-title class="yellow darken-1 mb-3">
            <span class="title">{{ $t("local.rtsp_settings_card_title") }}</span>
          </v-card-title>
          <v-layout row wrap align-center>
            <v-flex d-flex xs12>
              <v-checkbox class="px-3" v-model="rtsp_multicast">
                <div slot="label" class="black--text">{{ $t("local.rtsp_multicast") }}</div>
              </v-checkbox>
            </v-flex>
            <v-flex d-flex xs12>
              <v-checkbox class="px-3" v-model="rtsp_over_http">
                <div slot="label" class="black--text">{{ $t("local.rtsp_tunneling") }}</div>
              </v-checkbox>
            </v-flex>
            <v-flex d-flex xs12>
              <v-checkbox class="px-3" v-model="rtsp_auth">
                <div slot="label" class="black--text">{{ $t("local.rtsp_auth") }}</div>
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
      radioGroup: "1",
      ip_address: "",
      netmask: "",
      gateway: "",
      dns: "",
      http_port: 80,
      https_port: 443,
      rtsp_port: 554,
      rtsp_multicast: false,
      rtsp_over_http: true,
      rtsp_auth: true
    };
  }
};
</script>

<style>
</style>
