<template>
  <v-container fluid>
    <v-layout row wrap>
      <v-flex d-flex xs12>
        <span class="headline font-weight-bold">{{ $t("identification.title") }}</span>
      </v-flex>
      <v-flex xs12 sm7 order-xs2 order-sm1>
        <v-card class="my-3">
          <v-card-title class="yellow darken-1 mb-3">
            <span class="title">{{ $t("identification.common_card_title") }}</span>
          </v-card-title>
          <v-layout row wrap align-center>
            <v-flex d-flex xs6>
              <v-subheader class="black--text">{{ $t("identification.name") }}</v-subheader>
            </v-flex>
            <v-flex d-flex xs6>
              <v-text-field class="px-3" v-model="name" />
            </v-flex>
            <v-flex d-flex xs6>
              <v-subheader class="black--text">{{ $t("identification.mac") }}</v-subheader>
            </v-flex>
            <v-flex d-flex xs6>
              <v-text-field class="px-3" v-model="mac" readonly/>
            </v-flex>
          </v-layout>
        </v-card>
      </v-flex>
      <v-flex xs12 sm5 order-xs1 order-sm2>
        <v-card :class="{'mt-3': true, 'ml-0': $vuetify.breakpoint.xsOnly, 'ml-3': $vuetify.breakpoint.smAndUp}">
          <v-card-title class="yellow darken-1 mb-3">
            <span class="title">{{ $t("identification.photo") }}</span>
          </v-card-title>
          <v-img src="/static/images/tvhelp/ObS4-I60SA.jpg" height="225px" contain/>
        </v-card>
      </v-flex>
      <v-flex xs12 sm7 order-xs3 order-sm3>
        <v-card class="mb-3">
          <v-card-title class="yellow darken-1 mb-3">
            <span class="title">{{ $t("identification.about_card_title") }}</span>
          </v-card-title>
          <v-layout row wrap align-center>
            <v-flex d-flex xs6>
              <v-subheader class="black--text">{{ $t("identification.brand_name") }}</v-subheader>
            </v-flex>
            <v-flex d-flex xs6>
              <v-text-field class="px-3" v-model="manufacturer" readonly/>
            </v-flex>
            <v-flex d-flex xs6>
              <v-subheader class="black--text">{{ $t("identification.model_name") }}</v-subheader>
            </v-flex>
            <v-flex d-flex xs6>
              <v-text-field class="px-3" v-model="model" readonly/>
            </v-flex>
          </v-layout>
        </v-card>
      </v-flex>
      <v-flex xs12 sm7 order-xs4 order-sm4>
        <v-card>
          <v-card-title class="yellow darken-1 mb-3">
            <span class="title">{{ $t("identification.firmware_card_title") }}</span>
          </v-card-title>
          <v-layout row wrap align-center>
            <v-flex d-flex xs12>
              <v-subheader class="black--text">{{ $t("identification.u_boot") }}</v-subheader>
            </v-flex>
            <v-flex d-flex xs12>
              <v-text-field class="px-3" v-model="loader" readonly/>
            </v-flex>
            <v-flex d-flex xs12>
              <v-subheader class="black--text">{{ $t("identification.kernel") }}</v-subheader>
            </v-flex>
            <v-flex d-flex xs12>
              <v-text-field class="px-3" v-model="os" readonly/>
            </v-flex>
            <v-flex d-flex xs12>
              <v-subheader class="black--text">{{ $t("identification.software") }}</v-subheader>
            </v-flex>
            <v-flex d-flex xs12>
              <v-text-field class="px-3" v-model="software" readonly/>
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
      name: "TVHelp-CCTV",
      mac: "C8:6C:1E:01:2C:5A",
      manufacturer: "TV Help",
      model: "ObS4-I60SA",
      loader: "U-Boot 2010.6 (Sep 22 2017 - 09:17:14)",
      os: "Linux version 3.4.35",
      software: "tvh_ipnc_hi3516a_rev0_0.2.14"
    };
  }
};
</script>

<style>
</style>
