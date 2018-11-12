<i18n>
{
  "en": {
    "english": "English",
    "russian": "Russian",
    "live": "Live",
    "login": "Login",
    "records": "Records",
    "events": "Events",
    "close": "Close",
    "snapshot": "Snapshot",
    "sync_time": "Sync time"

  },
  "ru": {
    "english": "Английский",
    "russian": "Русский",
    "live": "Реальное видео",
    "login": "Вход",
    "records": "Архив",
    "events": "События",
    "close": "Закрыть",
    "snapshot": "Стопкадр",
    "sync_time": "Синхр. времени"
  }
}
</i18n>

<template>
  <v-app>
    <v-navigation-drawer
      app
      fixed
      left
      v-model="drawer"
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
          <v-list-tile-content>{{ $t("close") }}</v-list-tile-content>
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
        <router-link to="/" tag="span" class="pointer">TVHelp-CCTV</router-link>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items>
        <v-menu offset-y>
          <v-btn slot="activator" flat>
            <v-img :src="currentLang" height="26px" contain></v-img>
          </v-btn>

          <v-list>
            <v-list-tile
              v-for="lang in langs"
              :key="lang.name"
              @click="onLangSelected(lang)"
            >
              <v-list-tile-action>
                <v-img :src="lang.image" height="26px" contain></v-img>
              </v-list-tile-action>
              <v-list-tile-content>
                <v-list-tile-title>{{ lang.name }}</v-list-tile-title>
              </v-list-tile-content>  
            </v-list-tile>
          </v-list>
        </v-menu>
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
          Settings
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

export default {
  components: {
    Settings
  },
  computed: {
    langs() {
      return [
        {
          name: this.$t("english"),
          image: "static/images/us.png",
          locale: "en"
        },
        {
          name: this.$t("russian"),
          image: "static/images/ru.png",
          locale: "ru"
        }
      ];
    },
    links() {
      return [
        {
          icon: "movie",
          title: this.$t("live"),
          url: "/"
        },
        {
          icon: "lock",
          title: this.$t("login"),
          url: "/auth/login"
        },
        {
          icon: "save",
          title: this.$t("records"),
          url: "/records"
        },
        {
          icon: "event",
          title: this.$t("events"),
          url: "/events"
        }
      ];
    },
    commands() {
      return [
        {
          icon: "photo_camera",
          title: this.$t("snapshot"),
          method: this.onSnapshot
        },
        {
          icon: "sync",
          title: this.$t("sync_time"),
          method: this.onSyncTime
        }
      ];
    }
  },
  data() {
    return {
      drawer: false,
      currentLang: ""
    };
  },
  methods: {
    onLangSelected(lang) {
      this.currentLang = lang.image;
      this.$i18n.locale = lang.locale;
    },

    onSnapshot() {
      console.log("onSnapshot");
    },

    onSyncTime() {
      console.log("onSyncTime");
    }
  },
  created() {
    this.currentLang = this.langs[0].image;
    this.$i18n.locale = "en";
  }
};
</script>

<style scoped>
.pointer {
  cursor: pointer;
}
</style>
