<template>
  <v-container fluid>
    <v-layout row wrap align-center>
      <v-flex d-flex xs12>
        <span class="headline font-weight-bold">{{ $t("record.title") }}</span>
      </v-flex>
      <v-flex xs12 sm7>
        <v-card class="my-3">
          <v-card-title class="yellow darken-1 mb-3">
            <span class="title">{{ $t("record.common_card_title") }}</span>
          </v-card-title>
          <v-layout row wrap align-center class="pb-2">
            <v-flex d-flex xs6>
              <v-subheader class="black--text">{{ $t("record.max_duration_avi") }}</v-subheader>
            </v-flex>
            <v-flex d-flex xs6>
              <v-text-field class="px-3" v-model="max_duration_avi" type="number" />
            </v-flex>
            <v-flex d-flex xs6>
              <v-subheader class="black--text">{{ $t("record.interval_between_jpg") }}</v-subheader>
            </v-flex>
            <v-flex d-flex xs6>
              <v-text-field class="px-3" v-model="jpg_interval" type="number" />
            </v-flex>
            <v-flex d-flex xs6>
              <v-subheader class="black--text">{{ $t("record.total_duration_after_alarm") }}</v-subheader>
            </v-flex>
            <v-flex d-flex xs6>
              <v-text-field class="px-3" v-model="duration_after_alarm" type="number" />
            </v-flex>
          </v-layout>
        </v-card>
      </v-flex>
      <v-flex xs12 sm7>
        <v-card class="mb-3">
          <v-card-title class="yellow darken-1 mb-3">
            <span class="title">{{ $t("record.local_storage_card_title") }}</span>
          </v-card-title>
          <v-layout row wrap align-center>
            <v-flex d-flex xs12>
              <v-select class="px-3" :label="$t('record.mode')" :items="modes" v-model="local_storage_mode"/>
            </v-flex>
            <v-flex d-flex xs12>
              <v-select :disabled="local_storage_mode == 'Disabled'" class="px-3" :label="$t('record.stream_for_record')" :items="streams" v-model="local_storage_stream"/>
            </v-flex>
            <v-flex d-flex xs12>
              <v-select :disabled="local_storage_mode == 'Disabled'" class="px-3" :label="$t('record.file_format')" :items="file_formats" v-model="local_file_format"/>
            </v-flex>
            <v-flex d-flex xs12>
              <v-select class="px-3" :label="$t('record.local_storage')" :items="storages" v-model="storage"/>
            </v-flex>
            <v-flex d-flex xs12>
              <v-checkbox class="px-3" v-model="remove_files_from_archive">
                <div slot="label" class="black--text">{{ $t("record.remove_files_from_archive") }}</div>
              </v-checkbox>
            </v-flex>
            <v-flex d-flex xs6>
              <v-subheader class="black--text">{{ $t("record.max_retention_time") }}</v-subheader>
            </v-flex>
            <v-flex d-flex xs6>
              <v-text-field :disabled="!remove_files_from_archive" class="px-3" v-model="max_retention_time" type="number"/>
            </v-flex>
            <v-flex d-flex xs12>
              <v-checkbox class="px-3" v-model="remove_files_disk_full">
                <div slot="label" class="black--text">{{ $t("record.remove_files_disk_full") }}</div>
              </v-checkbox>
            </v-flex>
            <v-flex d-flex xs6>
              <v-subheader class="black--text">{{ $t("record.reserved_space") }}</v-subheader>
            </v-flex>
            <v-flex d-flex xs6>
              <v-text-field :disabled="!remove_files_disk_full" class="px-3" v-model="reserved_space" type="number"/>
            </v-flex>
          </v-layout>
        </v-card>
      </v-flex>
      <v-flex xs12 sm7>
        <v-card class="mb-3">
          <v-card-title class="yellow darken-1 mb-3">
            <span class="title">{{ $t("record.ftp_card_title") }}</span>
          </v-card-title>
          <v-layout row wrap align-center>
            <v-flex d-flex xs12>
              <v-select class="px-3" :label="$t('record.mode')" :items="modes" v-model="ftp_mode"/>
            </v-flex>
            <v-flex d-flex xs12>
              <v-select :disabled="ftp_mode == 'Disabled'" class="px-3" :label="$t('record.stream_for_record')" :items="streams" v-model="ftp_stream"/>
            </v-flex>
            <v-flex d-flex xs12>
              <v-select :disabled="ftp_mode == 'Disabled'" class="px-3" :label="$t('record.file_format')" :items="file_formats" v-model="ftp_file_format"/>
            </v-flex>
          </v-layout>
        </v-card>
      </v-flex>
      <v-flex xs12 sm7>
        <v-card class="mb-3">
          <v-card-title class="yellow darken-1 mb-3">
            <span class="title">{{ $t("record.smtp_card_title") }}</span>
          </v-card-title>
          <v-layout row wrap align-center class="pb-3">
            <v-flex d-flex xs12>
              <v-select class="px-3" :label="$t('record.mode')" :items="modes" v-model="smtp_mode"/>
            </v-flex>
            <v-flex d-flex xs12>
              <v-select :disabled="smtp_mode === 'Disabled'" class="px-3" :label="$t('record.stream_for_record')" :items="streams" v-model="smtp_stream"/>
            </v-flex>
            <v-flex d-flex xs12>
              <v-select :disabled="smtp_mode === 'Disabled'" class="px-3" :label="$t('record.file_format')" :items="file_formats" v-model="smtp_file_format"/>
            </v-flex>
            <v-flex d-flex xs6>
              <v-subheader class="black--text">{{ $t("record.video_duration_per_letter") }}</v-subheader>
            </v-flex>
            <v-flex d-flex xs6>
              <v-text-field :disabled="smtp_mode === 'Disabled'" class="px-3" v-model="reserved_space" type="number"/>
            </v-flex>
            <v-flex d-flex xs12>
              <v-layout row justify-center>
                <v-flex xs11>
                  <v-expansion-panel>
                    <v-expansion-panel-content>
                      <div slot="header">{{ $t("record.frequency_of_the_send") }}</div>
                      <v-card>
                        <v-card-text class="grey lighten-3">
                          <v-layout row wrap align-center>
                          <v-flex d-flex xs6>
                            <v-subheader class="black--text">{{ $t("record.letters_count") }}</v-subheader>
                          </v-flex>
                          <v-flex d-flex xs6>
                            <v-text-field :disabled="smtp_mode === 'Disabled'" class="px-3" v-model="letters_count" type="number"/>
                          </v-flex>
                          <v-flex d-flex xs6>
                            <v-subheader class="black--text">{{ $t("record.for_period") }}</v-subheader>
                          </v-flex>
                          <v-flex d-flex xs6>
                            <v-text-field :disabled="smtp_mode === 'Disabled'" class="px-3" v-model="letters_period" type="number"/>
                          </v-flex>
                          </v-layout>
                        </v-card-text>
                      </v-card>
                    </v-expansion-panel-content>
                  </v-expansion-panel>
                </v-flex>
              </v-layout>
            </v-flex>
          </v-layout>
        </v-card>
      </v-flex>
      <v-flex xs12 sm7 hidden-xs-only>
        <v-card>
          <v-card-title class="yellow darken-1 mb-3">
            <span class="title">{{ $t("record.schedule_card_title") }}</span>
          </v-card-title>
          <v-layout row wrap align-center>
            <v-flex xs12>
                <v-data-table
                  class="px-1 pb-2"
                  :headers="headers"
                  :items="intervals"
                  hide-actions
                  v-model="selected_intervals"
                  select-all
                >
                  <template slot="items" slot-scope="props">
                    <td class="text-xs-left">
                      <v-checkbox v-model="props.selected" hide-details/>
                    </td>
                    <td class="text-xs-left">
                      <v-edit-dialog
                        :return-value.sync="props.item.day"
                        lazy
                        large
                        persistent
                        :save-text="$t('common.button_save')"
                        :cancel-text="$t('common.button_cancel')"
                      > {{ props.item.day }}
                        <v-select
                          slot="input"
                          :items="days"
                          v-model="props.item.day"/>
                      </v-edit-dialog>
                    </td>
                    <td class="text-xs-left">
                      <v-edit-dialog
                        :return-value.sync="props.item.start_time"
                        lazy
                        large
                        persistent
                        full-width
                        :save-text="$t('common.button_save')"
                        :cancel-text="$t('common.button_cancel')"
                      > {{ props.item.start_time }}
                        <v-time-picker
                          class="mt-3"
                          flat
                          slot="input"
                          color="green lighten-1"
                          format="24hr"
                          full-width
                          v-model="props.item.start_time"/>
                      </v-edit-dialog>
                    </td>
                    <td class="text-xs-left">
                      <v-edit-dialog
                        :return-value.sync="props.item.end_time"
                        lazy
                        large
                        persistent
                        full-width
                        :save-text="$t('common.button_save')"
                        :cancel-text="$t('common.button_cancel')"
                      > {{ props.item.end_time }}
                        <v-time-picker
                          class="mt-3"
                          flat
                          slot="input"
                          color="green lighten-1"
                          format="24hr"
                          full-width
                          v-model="props.item.end_time"/>
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
export default {
  data() {
    return {
      max_duration_avi: 60,
      jpg_interval: 10,
      duration_after_alarm: 20,
      modes: ["Disabled", "Continuous", "On alarm", "On schedule"],
      local_storage_mode: "Disabled",
      ftp_mode: "Disabled",
      smtp_mode: "Disabled",
      streams: [
        "H.264 (1920x1080)",
        "H.264 (1280x720)",
        "H.264 (649x360)",
        "MJPEG (384x216)"
      ],
      local_storage_stream: "H.264 (1920x1080)",
      ftp_stream: "H.264 (1920x1080)",
      smtp_stream: "H.264 (1920x1080)",
      storages: ["-"],
      storage: "-",
      remove_files_from_archive: true,
      max_retention_time: 30,
      remove_files_disk_full: true,
      reserved_space: 100,
      file_formats: ["avi", "jpg"],
      local_file_format: "avi",
      ftp_file_format: "avi",
      smtp_file_format: "avi",
      letters_count: 10,
      letters_period: 5,
      headers: [
        {
          text: "Day",
          value: "day",
          align: "left",
          sortable: false
        },
        {
          text: "Start time",
          value: "start_time",
          align: "left",
          sortable: false
        },
        {
          text: "End time",
          value: "end_time",
          align: "left",
          sortable: false
        }
      ],
      intervals: [
        {
          id: 1,
          day: "Every day",
          start_time: "00:00",
          end_time: "00:00"
        },
        {
          id: 2,
          day: "Every day",
          start_time: "00:00",
          end_time: "00:00"
        },
        {
          id: 3,
          day: "Every day",
          start_time: "00:00",
          end_time: "00:00"
        },
        {
          id: 4,
          day: "Every day",
          start_time: "00:00",
          end_time: "00:00"
        },
        {
          id: 5,
          day: "Every day",
          start_time: "00:00",
          end_time: "00:00"
        },
        {
          id: 6,
          day: "Every day",
          start_time: "00:00",
          end_time: "00:00"
        },
        {
          id: 7,
          day: "Every day",
          start_time: "00:00",
          end_time: "00:00"
        },
        {
          id: 8,
          day: "Every day",
          start_time: "00:00",
          end_time: "00:00"
        }
      ],
      days: [
        "Every day",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
        "Workdays",
        "Weekend"
      ],
      selected_intervals: []
    };
  }
};
</script>

<style>
</style>
