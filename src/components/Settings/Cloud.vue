<template>
  <v-container fluid >
    <v-layout row wrap>
      <v-flex d-flex xs12>
        <h1 class="mb-3"> {{ $t("cloud.title") }}</h1>
      </v-flex>
      <v-flex xs12 sm7>
        <v-badge color="red" class="mb-3">
          <span slot="badge">!</span>
          <v-dialog v-model="dialog" width="500">
            <v-btn slot="activator" color="green lighten-2" dark round>
              {{ $t("cloud.about_cloud_service") }}
            </v-btn>
            <v-card>
              <v-card-title class="headline grey lighten-2" primary-title>
                {{ $t("cloud.cloud_service") }}
              </v-card-title>
              <v-card-text>
                <i18n path="cloud.cloud_info1" tag="p">
                  <a place="site" :href="$t('cloud.site_url')" target="_blank">IPEYE</a>
                  <a place="fee" :href="$t('cloud.tarify_url')" target="_blank">{{ $t("cloud.small_fee") }}</a>
                  <a place="register" :href="$t('cloud.register_url')" target="_blank">{{ $t("cloud.register") }}</a>
                </i18n>
                <v-divider class="mb-3"/>
                <p>{{ $t("cloud.cloud_info2") }}</p>
                <v-divider class="mb-3"/>
                <i18n path="cloud.cloud_info3" tag="p">
                  <a place="account" :href="$t('cloud.account_url')" target="_blank">{{ $t("cloud.account") }}</a>
                </i18n>  
              </v-card-text>
              <v-card-actions>
                <v-spacer/>
                <v-btn color="primary" flat @click="dialog = false">Ok</v-btn>
              </v-card-actions>  
            </v-card>
          </v-dialog>         
        </v-badge>
      </v-flex>
      <v-flex xs12 sm7>
        <v-card class="mb-3">
          <v-card-title class="yellow darken-1 mb-2">
            <h3 class="headline">{{ $t("cloud.streams_card_title") }}</h3>
          </v-card-title>
          <v-layout row wrap align-center>
            <v-flex d-flex xs6>
              <v-select class="px-3" :label="$t('cloud.main_stream')" :items="streams" v-model="main_stream"/>
            </v-flex>
            <v-flex d-flex xs6>
              <v-chip :color="main_connected ? 'teal' : 'pink'" text-color="white">
                <v-avatar>
                  <v-icon>{{ main_connected ? 'check_circle' : 'highlight_off' }}</v-icon>
                </v-avatar>
                {{ main_connected ? $t("cloud.enabled") : $t("cloud.disabled") }}
              </v-chip>
              <v-spacer/>  
            </v-flex>  
            <v-flex d-flex xs6>
              <v-select class="px-3" :label="$t('cloud.sub_stream')" :items="streams" v-model="sub_stream"/>
            </v-flex>
            <v-flex d-flex xs6>
              <v-chip :color="sub_connected ? 'teal' : 'pink'" text-color="white">
                <v-avatar>
                  <v-icon>{{ sub_connected ? 'check_circle' : 'highlight_off' }}</v-icon>
                </v-avatar>
                {{ sub_connected ? $t("cloud.enabled") : $t("cloud.disabled") }}
              </v-chip>
              <v-spacer/>  
            </v-flex>  
          </v-layout>    
        </v-card>
      </v-flex>
      <v-flex xs12 sm7>
        <v-card class="pb-3">
          <v-card-title class="yellow darken-1 mb-2">
            <h3 class="headline">{{ $t("cloud.cloud_auth_card_title") }}</h3>
          </v-card-title>
          <v-layout row wrap align-center grid-list-xs>
            <v-flex d-flex xs6 sm6>
              <v-subheader class="black--text">{{ $t("cloud.login") }}</v-subheader>
            </v-flex>
            <v-flex d-flex xs12 sm6>
              <v-text-field class="px-3" v-model="login" />
            </v-flex>
            <v-flex d-flex xs12 sm6>
              <v-subheader class="black--text">{{ $t("cloud.password") }}</v-subheader>
            </v-flex>
            <v-flex d-flex xs12 sm6>
              <v-text-field class="px-3" v-model="password" type="password"/>
            </v-flex>
            <v-flex d-flex xs12 sm6>
              <v-subheader class="black--text">{{ $t("cloud.camera_name") }}</v-subheader>
            </v-flex>
            <v-flex d-flex xs12 sm6>
              <v-text-field class="px-3" v-model="camera_name" />
            </v-flex>
            <v-flex d-flex xs12 sm6>
              <v-btn round color="primary" dark>{{ $t("cloud.add_camera") }}</v-btn>
            </v-flex>
            <v-flex d-flex xs12 sm6>
              <v-btn round color="primary" dark>{{ $t("cloud.run_module") }}</v-btn>
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
      dialog: false,
      streams: [
        "H.264 (1920x1080)",
        "H.264 (1280x720)",
        "H.264 (649x360)",
        "MJPEG (384x216)"
      ],
      main_stream: "H.264 (1920x1080)",
      sub_stream: "H.264 (1280x720)",
      main_connected: false,
      sub_connected: false,
      login: "",
      password: "",
      camera_name: "Camera C8:6C:1E:01:2C:5A",
       
    };
  }
};
</script>

<style>
</style>
