<template>
  <v-container>
    <v-layout row>
      <v-flex xs12>
        <v-treeview
          :open="open"
          :items="items"
          :active.sync="active"
          activatable
          item-key="name"
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
  data() {
    return {
      active: [],
      open: ["Settings"],
      items: [
        {
          name: this.$t("toolbar.settings"),
          icon: "settings",
          children: [
            {
              name: "Media setup",
              icon: "perm_media",
              children: [
                {
                  name: "Image",
                  icon: "settings_brightness",
                  url: "settings/media/image"
                },
                {
                  name: "Video encoder 1",
                  icon: "featured_video",
                  streamId: "1"
                },
                {
                  name: "Video encoder 2",
                  icon: "featured_video",
                  streamId: "2"
                },
                {
                  name: "Video encoder 3",
                  icon: "featured_video",
                  streamId: "3"
                },
                {
                  name: "Video encoder 4",
                  icon: "featured_video",
                  streamId: "4"
                },
                {
                  name: "OSD",
                  icon: "video_label",
                  url: "settings/media/osd"
                }
              ]
            },
            {
              name: "Analytics",
              file: "timeline",
              children: [
                {
                  name: "Motion detection",
                  icon: "directions_run",
                  url: "settings/analytics/motion_detection"
                }
              ]
            },
            {
              name: "Inputs/Outputs",
              icon: "device_hub",
              url: "settings/io"
            },
            {
              name: "Alarms",
              icon: "alarm",
              url: "settings/alarms"
            },
            {
              name: "Record",
              icon: "save",
              url: "settings/record"
            },
            {
              name: "Cloud",
              icon: "cloud",
              url: "settings/cloud"
            },
            {
              name: "Network",
              icon: "wifi",
              children: [
                {
                  name: "Local",
                  icon: "settings_ethernet",
                  url: "settings/network/ethernet"
                },
                {
                  name: "FTP",
                  icon: "folder_shared",
                  url: "settings/network/ftp"
                },
                {
                  name: "SMTP",
                  icon: "email",
                  url: "settings/network/smtp"
                }
              ]
            },
            {
              name: "System",
              icon: "perm_device_information",
              children: [
                {
                  name: "Identification",
                  icon: "info",
                  url: "settings/system/identification"
                },
                {
                  name: "User management",
                  icon: "perm_identity",
                  url: "settings/system/user_management"
                },
                {
                  name: "Time settings",
                  icon: "access_time",
                  url: "settings/system/time_settings"
                },
                {
                  name: "Disk management",
                  icon: "sim_card",
                  url: "settings/system/disk_management"
                },
                {
                  name: "Maintenance",
                  icon: "system_update",
                  url: "/settings/system/maintenance"
                },
                {
                  name: "Camera log",
                  icon: "list_alt",
                  url: "settings/system/log"
                }
              ]
            }
          ]
        }
      ]
    };
  },
  watch: {
    active(newVal) {
      if (!newVal.length) return;
      const selectedItem = this.findItem(this.items[0], newVal[0]);
      if (!selectedItem) return;
      if (selectedItem.streamId) {
        this.$router.push(
          this.uri("settings/media/encoder/") + selectedItem.streamId
        );
      } else if (selectedItem.url) {
        this.$router.push(this.uri(selectedItem.url));
      }
    }
  },
  methods: {
    findItem(element, name) {
      if (element.name === name) {
        return element;
      } else if (element.children != null) {
        let result = null;
        for (let i = 0; result == null && i < element.children.length; i++) {
          result = this.findItem(element.children[i], name);
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
