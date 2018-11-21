export default {
  common: {
    button_save: "Save",
    button_cancel: "Cancel"
  },
  toolbar: {
    live: "Live",
    login: "Login",
    records: "Records",
    events: "Events",
    close: "Close",
    snapshot: "Snapshot",
    sync_time: "Sync time",
    settings: "Settings"
  },
  home: {
    stream: "Stream"
  },
  settings: {
    media: "Media setup",
    image: "Image",
    video_encoder: "Video encoder {0}",
    osd: "OSD",
    audio_encoder: "Audio encoder",
    analytics: "Analytics",
    motion_detection: "Motion detection",
    sound_detection: "Sound detection",
    io: "Inputs/Outputs",
    alarms: "Alarms",
    record: "Record",
    cloud: "Cloud",
    network: "Network",
    local: "Local",
    ftp: "FTP",
    smtp: "SMTP",
    system: "System",
    identification: "Identification",
    user_management: "User management",
    time_settings: "Time settings",
    disk_management: "Disk management",
    maintenance: "Maintenance",
    camera_log: "Camera log"
  },
  image: {
    title: "Image Settings",
    image_card_title: "Image",
    brightness: "Brightness",
    contrast: "Contrast",
    saturation: "Saturation",
    hue: "Hue",
    backlight_compensation_mode: "Backlight compensation mode",
    backlight_compensation_level: "Backlight compensation level",
    wdr_mode: "WDR mode",
    wdr_level: "WDR level",
    defog_mode: "Defog mode",
    defog_level: "Defog level",
    ldc_mode: "LDC mode",
    ldc_level: "LDC level",
    infrared_cutoff_filter: "Infrared cutoff filter",
    exposure_card_title: "Exposure and white balance",
    white_balance: "White balance",
    exposure: "Exposure",
    exposure_priority: "Exposure priority",
    max_exposure_time: "Max exposure time, s",
    max_gain: "Max gain, dB",
    flicker_control: "Flicker control",
    denoise_card_title: "Denoise",
    spatial_filter: "Spatial filter (SNF)",
    temporal_filter: "Temporal filter (TNF)",
    advance_card_title: "Advance",
    image_sensor_mode: "Image sensor mode",
    flip_and_mirror: "Flip & mirror",
    rotation: "Rotation"
  },
  video_encoder: {
    title: "Video Settings {0}",
    encode_card_title: "Encode",
    auxilary_card_title: "Auxilary",
    stream_support: "Stream support",
    codec_type: "Codec type",
    resolution: "Resolution",
    framerate: "Framerate, fps",
    rate_control: "Rate control",
    bitrate: "Bitrate, kbps",
    quality: "Quality",
    gop_length: "GOP length",
    enable_roi: "Enable ROI",
    region: "Region"
  },
  osd: {
    title: "Overlay Settings",
    overlay_card_title: "Overlay",
    mask_card_title: "Mask",
    timestamp: "Timestamp",
    time_position: "Time position",
    text: "Text",
    text_position: "Text position",
    ptz_status: "PTZ status",
    privacy_mask: "Privacy mask",
    region: "Region"
  },
  audio_encoder: {
    title: "Audio Settings",
    audio_source_card_title: "Audio source",
    encode_card_title: "Encode",
    input_gain: "Input gain",
    enable_audio: "Enable audio",
    encoding: "Encoding",
    sample_rate: "Sample rate, kHz"
  },
  motion_detection: {
    title: "Motion Detection Settings",
    motion_detection_card_title: "Motion detection",
    motion_detection_mode: "Motion detection mode",
    sensitivity_level: "Sensitivity level",
    customized_sensitivity_level: "Customized sensitivity level, %",
    region_of_interest: "Region of interest",
    select_all: "Select all",
    clear_all: "Clear all"
  },
  sound_detection: {
    title: "Sound Detection Settings",
    sound_detection_card_title: "Sound detection",
    sound_detection_mode: "Sound detection mode",
    sensitivity_level: "Sensitivity level",
    customized_sensitivity_level: "Customized sensitivity level, %"
  },
  io: {
    title: "Inputs/Outputs Settings",
    external_input_card_title: "External input",
    external_output_card_title: "External output",
    relay_idle_state: "Relay idle state",
    relay_state: "Relay state",
    relay_mode: "Relay mode",
    delay_time: "Delay time, s"
  },
  alarms: {
    title: "Alarm Settings",
    trigger_card_title: "Alarm trigger",
    action_card_title: "Alarm action",
    motion_detection: "Motion detection",
    network_connection_lost: "Network connection lost",
    audio_alarm: "Audio alarm",
    external_triggers: "External triggers",
    activate_output_relay: "Activate output relay"
  },
  record: {
    title: "Record Settings",
    common_card_title: "Common settings",
    local_storage_card_title: "Save into local storage",
    ftp_card_title: "Upload via FTP",
    smtp_card_title: "Upload via SMTP",
    schedule_card_title: "Schedule",
    max_duration_avi: "Maximum duration of avi file, sec",
    interval_between_jpg: "Interval between jpg files, sec",
    total_duration_after_alarm: "Total duration of record after alarm, sec",
    stream_for_record: "Stream for record",
    file_format: "File format",
    local_storage: "Local storage",
    remove_files_from_archive: "Remove old files from archive",
    max_retention_time: "Maximum retention time, days",
    remove_files_disk_full: "Remove old files when disk full",
    reserved_space: "Reserved space, MB",
    video_duration_per_letter: "Video duration per letter, sec",
    frequency_of_the_send: "Frequency of the send",
    letters_count: "Count of letters",
    for_period: "For period, min",
    mode: "Mode"
  },
  cloud: {
    title: "IPEYE Cloud Settings",
    about_cloud_service: "About cloud service",
    cloud_service: "Cloud service",
    cloud_info1:
      "Your camera has a built-in {site} remote video surveillance service module. This allows you to watch video from the camera on any device over the Internet for free, as well as for a {fee} to record the archive to the cloud and view it. Before using the IPEYE service, you need to {register} on it.",
    small_fee: "small fee",
    register: "register",
    cloud_info2:
      "IPEYE cloud service supports H.264 video codec and G.711, PCM, AAC audio codecs. Select two camera streams used in the service (the archive can only be recorded from the main stream) and then click the link at the bottom to save the changes.",
    cloud_info3:
      "Setting up archive recording to the cloud, renaming, changing other camera properties or deleting it is done in the {account} of the cloud service.",
    site_url: "https://ipeye.cam",
    tarify_url: "https://ipeye.cam/tarify",
    register_url: "https://ipeye.cam/ipeye_service/index.php#registerform",
    account_url: "https://ipeye.cam/ipeye_service/index.php?route=page_device",
    account: "personal account",
    streams_card_title: "Streams",
    main_stream: "Main stream",
    sub_stream: "Sub stream",
    disabled: "Disabled",
    enabled: "Enabled",
    cloud_auth_card_title: "Cloud authentication",
    login: "Login",
    password: "Password",
    camera_name: "Camera name",
    add_camera: "Add camera to my account",
    run_module: "Run the IPEYE module"
  },
  local: {
    title: "Network Settings"
  },
  ftp: {
    title: "FTP Settings"
  },
  smtp: {
    title: "SMTP Settings"
  },
  identification: {
    title: "Identification"
  },
  user_management: {
    title: "User Management"
  },
  time_settings: {
    title: "Date/Time Settings"
  },
  disk_management: {
    title: "Disk Management"
  },
  maintenance: {
    title: "Maintenance"
  },
  camera_log: {
    title: "Camera log"
  },
  player: {
    title: "Video"
  }
};
