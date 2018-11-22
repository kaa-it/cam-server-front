<template>
  <v-container fluid>
    <v-layout row wrap>
      <v-flex d-flex xs12>
        <span class="headline font-weight-bold">{{ $t("ftp.title") }}</span>
      </v-flex>
      <v-flex xs12 sm7>
        <v-card class="mt-3">
          <v-card-title class="yellow darken-1 mb-3">
            <span class="title">{{ $t("ftp.common_card_title") }}</span>
          </v-card-title>
          <v-layout row wrap align-center>
            <v-flex d-flex xs6>
              <v-subheader class="black--text">{{ $t("ftp.ftp_server") }}</v-subheader>
            </v-flex>
            <v-flex d-flex xs6>
              <v-text-field class="px-3" v-model="ftp_server" />
            </v-flex>
            <v-flex d-flex xs6>
              <v-subheader class="black--text">{{ $t("ftp.ftp_port") }}</v-subheader>
            </v-flex>
            <v-flex d-flex xs6>
              <v-text-field class="px-3" v-model="ftp_port" type="number"/>
            </v-flex>
            <v-flex d-flex xs6>
              <v-subheader class="black--text">{{ $t("ftp.login") }}</v-subheader>
            </v-flex>
            <v-flex d-flex xs6>
              <v-text-field class="px-3" v-model="login" />
            </v-flex>
            <v-flex d-flex xs6>
              <v-subheader class="black--text">{{ $t("ftp.password") }}</v-subheader>
            </v-flex>
            <v-flex d-flex xs6>
              <v-text-field class="px-3" v-model="password" type="password"/>
            </v-flex>
            <v-flex d-flex xs6>
              <v-subheader class="black--text">{{ $t("ftp.ftp_upload_path") }}</v-subheader>
            </v-flex>
            <v-flex d-flex xs6>
              <v-text-field class="px-3" v-model="ftp_upload_path" />
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
      ftp_server: "192.168.11.123",
      ftp_port: 21,
      login: "hisil",
      password: "9999",
      ftp_upload_path: "ipnc"
    };
  }
};
</script>

<style>
</style>
