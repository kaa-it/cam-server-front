<template>
  <v-container fluid>
    <v-layout row wrap>
      <v-flex d-flex xs12>
        <span class="headline font-weight-bold">{{ $t("smtp.title") }}</span>
      </v-flex>
      <v-flex xs12 sm7>
        <v-card class="mt-3">
          <v-card-title class="yellow darken-1 mb-3">
            <span class="title">{{ $t("smtp.common_card_title") }}</span>
          </v-card-title>
          <v-layout row wrap align-center>
            <v-flex d-flex xs6>
              <v-subheader class="black--text">{{ $t("smtp.account_name") }}</v-subheader>
            </v-flex>
            <v-flex d-flex xs6>
              <v-text-field class="px-3" v-model="account_name" />
            </v-flex>
            <v-flex d-flex xs6>
              <v-subheader class="black--text">{{ $t("smtp.password") }}</v-subheader>
            </v-flex>
            <v-flex d-flex xs6>
              <v-text-field class="px-3" v-model="password" type="password"/>
            </v-flex>
            <v-flex d-flex xs6>
              <v-subheader class="black--text">{{ $t("smtp.sender_email") }}</v-subheader>
            </v-flex>
            <v-flex d-flex xs6>
              <v-text-field class="px-3" v-model="sender_email" />
            </v-flex>
            <v-flex d-flex xs6>
              <v-subheader class="black--text">{{ $t("smtp.smtp_server") }}</v-subheader>
            </v-flex>
            <v-flex d-flex xs6>
              <v-text-field class="px-3" v-model="smtp_server" />
            </v-flex>
            <v-flex d-flex xs12>
              <v-combobox class="px-3" :items="security_types" v-model="security" :label="$t('smtp.security')"/>
            </v-flex>
            <v-flex d-flex xs6>
              <v-subheader class="black--text">{{ $t("smtp.smtp_port") }}</v-subheader>
            </v-flex>
            <v-flex d-flex xs6>
              <v-text-field class="px-3" v-model="smtp_port" type="number" />
            </v-flex>
            <v-flex d-flex xs6>
              <v-subheader class="black--text">{{ $t("smtp.receiver_email") }}</v-subheader>
            </v-flex>
            <v-flex d-flex xs6>
              <v-text-field class="px-3" v-model="receiver_email" />
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
      account_name: "",
      password: "",
      sender_email: "",
      smtp_server: "",
      security_types: ["Off", "StartTLS", "SSL/TLS"],
      security: "Off",
      smtp_port: 25,
      receiver_email: ""
    };
  }
};
</script>

<style>
</style>
