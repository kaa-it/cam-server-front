<template>
  <v-container>
    <v-layout row>
      <v-flex xs12>
        <v-treeview
          :open="open"
          :items="items"
          :active.sync="active"
          activatable
          active-class="primary--text"
          item-key="id"
          open-on-click
        >
          <template slot="prepend" slot-scope="{ item }">
            <v-icon color="pink">
              {{ item.icon }}
            </v-icon>
          </template>
        </v-treeview>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import LocalizeUriMixin from "@/components/Locale/LocalizeUriMixin";

export default {
  name: "Settings",
  mixins: [LocalizeUriMixin],
  computed: {
    items() {
      return [
        {
          id: 0,
          name: this.$t("toolbar.settings"),
          icon: "settings",
          children: [
            {
              id: 1,
              name: this.$t("settings.media"),
              icon: "perm_media",
              children: [
                {
                  id: 11,
                  name: this.$t("settings.image"),
                  icon: "settings_brightness",
                  url: "settings/media/image"
                },
                {
                  id: 12,
                  name: this.$t("settings.video_encoder", [1]),
                  icon: "featured_video",
                  streamId: "1"
                },
                {
                  id: 13,
                  name: this.$t("settings.video_encoder", [2]),
                  icon: "featured_video",
                  streamId: "2"
                },
                {
                  id: 14,
                  name: this.$t("settings.video_encoder", [3]),
                  icon: "featured_video",
                  streamId: "3"
                },
                {
                  id: 15,
                  name: this.$t("settings.video_encoder", [4]),
                  icon: "featured_video",
                  streamId: "4"
                },
                {
                  id: 16,
                  name: this.$t("settings.osd"),
                  icon: "video_label",
                  url: "settings/media/osd"
                },
                {
                  id: 17,
                  name: this.$t("settings.audio_encoder"),
                  icon: "surround_sound",
                  url: "settings/media/audio_encoder"
                }
              ]
            },
            {
              id: 2,
              name: this.$t("settings.analytics"),
              file: "timeline",
              children: [
                {
                  id: 21,
                  name: this.$t("settings.motion_detection"),
                  icon: "directions_run",
                  url: "settings/analytics/motion_detection"
                },
                {
                  id: 22,
                  name: this.$t("settings.sound_detection"),
                  icon: "hearing",
                  url: "settings/analytics/sound_detection"
                }
              ]
            },
            {
              id: 3,
              name: this.$t("settings.io"),
              icon: "device_hub",
              url: "settings/io"
            },
            {
              id: 4,
              name: this.$t("settings.alarms"),
              icon: "alarm",
              url: "settings/alarms"
            },
            {
              id: 5,
              name: this.$t("settings.record"),
              icon: "save",
              url: "settings/record"
            },
            {
              id: 6,
              name: this.$t("settings.cloud"),
              icon: "cloud",
              url: "settings/cloud"
            },
            {
              id: 7,
              name: this.$t("settings.network"),
              icon: "wifi",
              children: [
                {
                  id: 71,
                  name: this.$t("settings.local"),
                  icon: "settings_ethernet",
                  url: "settings/network/ethernet"
                },
                {
                  id: 72,
                  name: this.$t("settings.ftp"),
                  icon: "folder_shared",
                  url: "settings/network/ftp"
                },
                {
                  id: 73,
                  name: this.$t("settings.smtp"),
                  icon: "email",
                  url: "settings/network/smtp"
                }
              ]
            },
            {
              id: 8,
              name: this.$t("settings.system"),
              icon: "perm_device_information",
              children: [
                {
                  id: 81,
                  name: this.$t("settings.identification"),
                  icon: "info",
                  url: "settings/system/identification"
                },
                {
                  id: 82,
                  name: this.$t("settings.user_management"),
                  icon: "perm_identity",
                  url: "settings/system/user_management"
                },
                {
                  id: 83,
                  name: this.$t("settings.time_settings"),
                  icon: "access_time",
                  url: "settings/system/time_settings"
                },
                {
                  id: 84,
                  name: this.$t("settings.disk_management"),
                  icon: "sim_card",
                  url: "settings/system/disk_management"
                },
                {
                  id: 85,
                  name: this.$t("settings.maintenance"),
                  icon: "system_update",
                  url: "/settings/system/maintenance"
                },
                {
                  id: 86,
                  name: this.$t("settings.camera_log"),
                  icon: "list_alt",
                  url: "settings/system/log"
                }
              ]
            }
          ]
        }
      ];
    }
  },
  data() {
    return {
      active: [],
      open: [0]
    };
  },
  watch: {
    active(newVal, oldVal) {
      if (!newVal.length && !oldVal.length) {
        return;
      }

      if (!newVal.length) {
        this.$router.replace(this.uri("/"));
        return;
      }

      const val = newVal[0];

      const selectedItem = this.findItem(this.items[0], val);
      if (!selectedItem) return;
      if (selectedItem.streamId) {
        this.$router.push(
          this.uri("settings/media/video_encoder") + "/" + selectedItem.streamId
        );
      } else if (selectedItem.url) {
        this.$router.push(this.uri(selectedItem.url));
      }
    }
  },
  methods: {
    findItem(element, id) {
      if (element.id === id) {
        return element;
      } else if (element.children != null) {
        let result = null;
        for (let i = 0; result == null && i < element.children.length; i++) {
          result = this.findItem(element.children[i], id);
        }
        return result;
      }
      return null;
    }
  }
};
</script>

<style scoped>
</style>
