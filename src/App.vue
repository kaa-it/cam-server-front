<template>
  <v-app>
    <v-navigation-drawer
      app
      fixed
      left
      v-model="drawer"
      width="320"
    >
      <v-list class="hidden-md-and-up">
        <v-list-tile
          v-for="link in links"
          :key="link.title"
          :to="link.url"
        >
          <v-list-tile-action>
            <v-icon color="pink">{{link.icon}}</v-icon>
          </v-list-tile-action>

          <v-list-tile-content>
            <v-list-tile-title v-text="link.title"></v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile
          v-for="command in commands"
          :key="command.title"
          @click="command.method"
        >
          <v-list-tile-action>
            <v-icon color="pink">{{command.icon}}</v-icon>
          </v-list-tile-action>

          <v-list-tile-content>
            <v-list-tile-title v-text="command.title"></v-list-tile-title>
          </v-list-tile-content>    
        </v-list-tile>
      </v-list>
      <v-list class="hidden-sm-and-down">
        <v-list-tile @click.stop="drawer = !drawer">
          <v-list-tile-action>
            <v-icon color="pink">exit_to_app</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>{{ $t("toolbar.close") }}</v-list-tile-content>
        </v-list-tile>
      </v-list>
      <v-divider></v-divider>
      <Settings/>
    </v-navigation-drawer>

    <v-toolbar ref="toolbar" app dark color="primary">
      <v-toolbar-side-icon
        @click="drawer = !drawer"
      ></v-toolbar-side-icon>
      <v-toolbar-title>
        <router-link :to="uri('/')" tag="span" class="pointer">TVHelp-CCTV</router-link>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items>
        <LocaleSwitcher/>
      </v-toolbar-items> 
      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn
          v-for="link in links"
          :key="link.title"
          :to="link.url"
          flat
        >
          <v-icon left>{{link.icon}}</v-icon>
          {{link.title}}
        </v-btn>
        <v-btn
          flat
          @click="drawer = !drawer">
          <v-icon left>settings</v-icon>
          {{ $t("toolbar.settings") }}
        </v-btn>
        <v-btn
          v-for="command in commands"
          :key="command.title"
          @click="command.method"
          flat
        >
        <v-icon left>{{command.icon}}</v-icon>
        {{command.title}}
        </v-btn>
      </v-toolbar-items>
    </v-toolbar>

    <v-content>
        <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
import Settings from "@/components/Settings/Settings";
import LocaleSwitcher from "@/components/Locale/LocaleSwitcher";
import LocalizeUriMixin from "@/components/Locale/LocalizeUriMixin";

export default {
  mixins: [LocalizeUriMixin],
  components: {
    Settings,
    LocaleSwitcher
  },
  computed: {
    links() {
      return [
        {
          icon: "movie",
          title: this.$t("toolbar.live"),
          url: this.uri("/")
        },
        {
          icon: "lock",
          title: this.$t("toolbar.login"),
          url: this.uri("auth/login")
        },
        {
          icon: "save",
          title: this.$t("toolbar.records"),
          url: this.uri("records")
        },
        {
          icon: "event",
          title: this.$t("toolbar.events"),
          url: this.uri("events")
        }
      ];
    },
    commands() {
      return [
        {
          icon: "photo_camera",
          title: this.$t("toolbar.snapshot"),
          method: this.onSnapshot
        },
        {
          icon: "sync",
          title: this.$t("toolbar.sync_time"),
          method: this.onSyncTime
        }
      ];
    }
  },
  data() {
    return {
      drawer: false
    };
  },
  methods: {
    onSnapshot() {
      console.log("onSnapshot");
    },

    onSyncTime() {
      console.log("onSyncTime");
    }
  }
};
</script>

<style scoped>
.pointer {
  cursor: pointer;
}
</style>
