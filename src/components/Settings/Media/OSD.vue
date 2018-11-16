<template>
  <v-container fluid grid-list-xl>
    <v-layout row wrap>
      <v-flex d-flex xs12>
        <h1>{{ $t("osd.title") }}</h1>
      </v-flex>
      <v-flex xs12 sm7 order-xs2 order-sm1>
        <v-card>
          <v-card-title class="yellow darken-1 mb-2">
            <h3 class="headline">{{ $t("osd.overlay_card_title") }}</h3>
          </v-card-title>
          <v-layout row wrap align-center>
            <v-flex d-flex xs6>
              <v-checkbox height="1px" class="px-3" v-model="time_enabled">
                <div slot="label" class="font-weight-black body-1 black--text">{{ $t("osd.timestamp") }}</div>
              </v-checkbox>  
            </v-flex>
            <v-flex d-flex xs6>
              <v-select
                class="px-3"
                :items="time_types"
                v-model="current_time_type"
                :disabled="!time_enabled"/>
            </v-flex>
            <v-flex d-flex xs12>
              <v-select
                class="px-3"
                :items="time_positions"
                v-model="current_time_position"
                :label="$t('osd.time_position')"
                :disabled="!time_enabled"/>
            </v-flex>
            <v-flex d-flex xs6>
              <v-checkbox height="1px" class="px-3" v-model="text_enabled">
                <div slot="label" class="font-weight-black body-1 black--text">{{ $t("osd.text") }}</div>
              </v-checkbox>  
            </v-flex>
            <v-flex d-flex xs6>
              <v-text-field
                class="px-3"
                v-model="text"
                :disabled="!text_enabled"/>
            </v-flex>
            <v-flex d-flex xs12>
              <v-select
                class="px-3"
                :items="text_positions"
                v-model="current_text_position"
                :label="$t('osd.text_position')"
                :disabled="!text_enabled"/>
            </v-flex>
            <v-flex d-flex xs12>
              <v-checkbox height="1px" class="px-3" v-model="ptz_status_enabled">
                <div slot="label" class="font-weight-black body-1 black--text">{{ $t("osd.ptz_status") }}</div>
              </v-checkbox>
            </v-flex>          
          </v-layout>    
        </v-card>  
      </v-flex>
      <v-flex xs12 sm5 order-xs1 order-sm2>
        <v-card>
          <v-card-title class="yellow darken-1 mb-2">
            <h3 class="headline">{{ $t("player.title") }}</h3>
          </v-card-title>
          <v-card-text>
            <VideoPlayer/>
          </v-card-text>
        </v-card>      
      </v-flex>
      <v-flex xs12 sm7 order-xs3 order-sm3>
        <v-card>
          <v-card-title class="yellow darken-1">
            <h3 class="headline mb-0">{{ $t("osd.mask_card_title") }}</h3>
          </v-card-title>
          <v-layout row wrap>
            <v-flex d-flex xs12>
              <v-checkbox height="1px" class="px-3" v-model="privacy_mask_enabled">
                <div slot="label" class="font-weight-black body-1 black--text">{{ $t("osd.privacy_mask") }}</div>
              </v-checkbox>
            </v-flex>
            <v-flex xs12>
              <v-data-table
                :class="{'px-1': true, 'hidden-sm-and-up': !privacy_mask_enabled}"
                :headers="headers"
                :items="regions"
                hide-actions
              >
                <template slot="items" slot-scope="props">
                  <td class="text-xs-left">{{ props.item.id }}</td>
                  <td class="text-xs-left">
                    <v-edit-dialog
                      :return-value.sync="props.item.x"
                      lazy
                    > {{ props.item.x }}
                      <v-text-field
                        slot="input"
                        type="number"
                        v-model="props.item.x"/>
                    </v-edit-dialog>  
                  </td>
                  <td class="text-xs-left">
                    <v-edit-dialog
                      :return-value.sync="props.item.y"
                      lazy
                    > {{ props.item.y }}
                      <v-text-field
                        slot="input"
                        type="number"
                        v-model="props.item.y"/>
                    </v-edit-dialog>  
                  </td>
                  <td class="text-xs-left">
                    <v-edit-dialog
                      :return-value.sync="props.item.width"
                      lazy
                    > {{ props.item.width }}
                      <v-text-field
                        slot="input"
                        type="number"
                        v-model="props.item.width"/>
                    </v-edit-dialog>  
                  </td>
                  <td class="text-xs-left">
                    <v-edit-dialog
                      :return-value.sync="props.item.height"
                      lazy
                    > {{ props.item.height }}
                      <v-text-field
                        slot="input"
                        type="number"
                        v-model="props.item.height"/>
                    </v-edit-dialog>  
                  </td>
                </template>
              </v-data-table>
            </v-flex>    
          </v-layout>    
        </v-card>  
      </v-flex>      
    </v-layout>
  </v-container>
</template>

<script>
import VideoPlayer from "@/components/VideoPlayer";

export default {
  components: {
    VideoPlayer
  },
  data() {
    return {
      time_enabled: false,
      time_types: ["Date & Time", "Time"],
      current_time_type: "Date & Time",
      time_positions: ["Bottom-Left", "Bottom-Right"],
      current_time_position: "Bottom-Left",
      text_enabled: false,
      text: "IPNetCam",
      text_positions: ["Top-Left", "Top-Right"],
      current_text_position: "Top-Left",
      ptz_status_enabled: false,
      privacy_mask_enabled: false,
      headers: [
        {
          text: this.$t("osd.region"),
          value: "id",
          align: "left",
          sortable: false
        },
        {
          text: "X",
          value: "x",
          align: "left",
          sortable: false
        },
        {
          text: "Y",
          value: "y",
          align: "left",
          sortable: false
        },
        {
          text: "W",
          value: "width",
          align: "left",
          sortable: false
        },
        {
          text: "H",
          value: "height",
          align: "left",
          sortable: false
        }
      ],
      regions: [
        {
          id: 1,
          x: 0,
          y: 0,
          width: 0,
          height: 0
        },
        {
          id: 2,
          x: 0,
          y: 0,
          width: 0,
          height: 0
        },
        {
          id: 3,
          x: 0,
          y: 0,
          width: 0,
          height: 0
        }
      ]
    };
  }
};
</script>

<style>
</style>
