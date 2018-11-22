export default {
  common: {
    button_save: "Сохранить",
    button_cancel: "Отмена"
  },
  toolbar: {
    live: "Реальное видео",
    login: "Вход",
    records: "Архив",
    events: "События",
    close: "Закрыть",
    snapshot: "Стопкадр",
    sync_time: "Синхр. времени",
    settings: "Настройки"
  },
  home: {
    stream: "Поток"
  },
  settings: {
    media: "Аудио/Видео",
    image: "Изображение",
    video_encoder: "Видео кодер {0}",
    osd: "OSD",
    audio_encoder: "Аудио кодер",
    analytics: "Аналитика",
    motion_detection: "Детектор движения",
    sound_detection: "Детектор звука",
    io: "Входы/Выходы",
    alarms: "Тревога",
    record: "Запись",
    cloud: "Облако",
    network: "Сеть",
    local: "Локальная сеть",
    ftp: "FTP",
    smtp: "SMTP",
    system: "Система",
    identification: "Справка",
    user_management: "Пользователи",
    time_settings: "Дата/Время",
    disk_management: "Управление дисками",
    maintenance: "Обслуживание",
    camera_log: "Системный журнал"
  },
  image: {
    title: "Настройки изображения",
    image_card_title: "Изображение",
    brightness: "Яркость",
    contrast: "Констрастность",
    saturation: "Насыщенность",
    hue: "Оттенок",
    backlight_compensation_mode: "Режим компенсации засветки",
    backlight_compensation_level: "Уровень компенсации засветки",
    wdr_mode: "Режим WDR",
    wdr_level: "Уровень WDR",
    defog_mode: "Режим антитуман",
    defog_level: "Режим антитуман",
    ldc_mode: "Коррекция искажений объектива",
    ldc_level: "Уровень коррекции искажений",
    infrared_cutoff_filter: "ИК фильтр",
    exposure_card_title: "Настройки экспозиции и баланса белого",
    white_balance: "Баланс белого",
    exposure: "Экспозиция",
    exposure_priority: "Приоритет экспозиции",
    max_exposure_time: "Максисмальная выдержка",
    max_gain: "Максимальное усиление, дБ",
    flicker_control: "Подавление мерцания",
    denoise_card_title: "Шумоподавление",
    spatial_filter: "Пространственный фильтр (SNF)",
    temporal_filter: "Временной фильтр (TNF)",
    advance_card_title: "Дополнительно",
    image_sensor_mode: "Режим сенсора",
    flip_and_mirror: "Зеркальное отображение",
    rotation: "Поворот изображения"
  },
  video_encoder: {
    title: "Настройки видео {0}",
    encode_card_title: "Кодирование видео",
    auxilary_card_title: "Дополнительно",
    stream_support: "Включить поток",
    codec_type: "Кодек",
    resolution: "Разрешение",
    framerate: "Частота кадров, кадров/с",
    rate_control: "Управление потоком",
    bitrate: "Скорость потока, кбит/с",
    quality: "Качество",
    gop_length: "Интервал i-кадров",
    enable_roi: "Значимые области",
    region: "Область"
  },
  osd: {
    title: "Настройки наложения изображения",
    overlay_card_title: "Наложение изображения",
    mask_card_title: "Маскирование изображения",
    timestamp: "Время",
    time_position: "Положение времени",
    text: "Текст",
    text_position: "Положение текста",
    ptz_status: "Информация PTZ",
    privacy_mask: "Маска",
    region: "Область"
  },
  audio_encoder: {
    title: "Настройки звука",
    audio_source_card_title: "Аудио вход",
    encode_card_title: "Кодирование звука",
    input_gain: "Громкость звука",
    enable_audio: "Включить звук",
    encoding: "Кодек",
    sample_rate: "Частота дискретизации, кГц"
  },
  motion_detection: {
    title: "Настройки детектора движения",
    motion_detection_card_title: "Детектор движения",
    motion_detection_mode: "Режим детектора движения",
    sensitivity_level: "Уровень чувствительности",
    customized_sensitivity_level: "Значение чувствительности, %",
    region_of_interest: "Значимая область",
    select_all: "Выделить все",
    clear_all: "Сбросить все"
  },
  sound_detection: {
    title: "Настройки детектора звука",
    sound_detection_card_title: "Детектор звука",
    sound_detection_mode: "Режим детектора звука",
    sensitivity_level: "Уровень чувствительности",
    customized_sensitivity_level: "Значение чувствительности, %"
  },
  io: {
    title: "Настройки входов/выходов",
    external_input_card_title: "Внешний вход",
    external_output_card_title: "Внешний выход",
    relay_idle_state: "Нормальное состояние реле",
    relay_state: "Состояние реле",
    relay_mode: "Режим реле",
    delay_time: "Время задержки, с"
  },
  alarms: {
    title: "Настройки тревоги",
    trigger_card_title: "Настройки сигнала тревоги",
    action_card_title: "Действия при тревоге",
    motion_detection: "Детектор движения",
    network_connection_lost: "Потеря сети",
    audio_alarm: "Звуковая тревога",
    external_triggers: "Внешние сигналы тревоги",
    activate_output_relay: "Активация выходного реле"
  },
  record: {
    title: "Настройки записи",
    common_card_title: "Общие настройки",
    local_storage_card_title: "Запись на локальный носитель",
    ftp_card_title: "Загрузка на FTP сервер",
    smtp_card_title: "Отправка писем через SMTP сервер",
    schedule_card_title: "Расписание",
    max_duration_avi: "Максимальная длительность avi файла, сек",
    interval_between_jpg: "Интервал между jpg файлами, сек",
    total_duration_after_alarm: "Общая длительность записи после тревоги, сек",
    stream_for_record: "Поток для записи",
    file_format: "Формат файла",
    local_storage: "Локальный носитель",
    remove_files_from_archive: "Удалять старые файлы из архива",
    max_retention_time: "Максимальный срок хранения, дней",
    remove_files_disk_full: "Удалять старые файлы при заполнении диска",
    reserved_space: "Резерв на диске, Мб",
    video_duration_per_letter: "Длительность видео в одном письме, сек",
    letters_per_minute: "Отправлять писем в минуту",
    mode: "Режим",
    frequency_of_the_send: "Частота отправки",
    letters_count: "Количество писем",
    for_period: "За период, мин"
  },
  cloud: {
    title: "Настройки облака IPEYE",
    about_cloud_service: "Об облачном сервисе",
    cloud_service: "Облачный сервис",
    cloud_info1:
      "В вашу камеру встроен модуль сервиса удаленного видеонаблюдения {site}. Это позволяет вам бесплатно смотреть видео с камеры на любом устройстве через интернет, а также за {fee} производить запись архива в облако и его просмотр. Перед началом использования сервиса IPEYE вам необходимо {register} на нём.",
    small_fee: "небольшую плату",
    register: "зарегистрироваться",
    cloud_info2:
      "Облачный сервис IPEYE поддерживает видеокодек H.264 и аудиокодеки G.711, PCM, AAC. Выберите два используемых в сервисе потока с камеры (запись архива может осуществляться только с основного потока) и затем нажмите ссылку в самом низу для сохранения сделанных изменений.",
    cloud_info3:
      "Настройка записи архива в облако, переименование, изменение других свойств камеры или её удаление производится в {account} облачного сервиса.",
    site_url: "https://ipeye.ru",
    tarify_url: "https://ipeye.ru/tarify",
    register_url: "https://ipeye.ru/ipeye_service/index.php#registerform",
    account_url: "https://ipeye.ru/ipeye_service/index.php?route=page_device",
    account: "личном кабинете",
    streams_card_title: "Потоки",
    main_stream: "Основной поток",
    sub_stream: "Дополнительный поток",
    disabled: "Отключен",
    online: "Онлайн",
    offline: "Не в сети",
    waiting: "Ожидание",
    cloud_auth_card_title: "Аутентификация в облаке",
    login: "Логин",
    password: "Пароль",
    camera_name: "Camera name",
    add_camera: "Добавить камеру в личный кабинет",
    run_module: "Запустить модуль IPEYE"
  },
  local: {
    title: "Настройки сети",
    ip_settings_card_title: "Настройки IP протокола",
    port_settings_card_title: "Настройки портов",
    rtsp_settings_card_title: "Настройки RTSP",
    dhcp: "Режим DHCP",
    static: "Статический IP",
    ip: "IP-адрес",
    netmask: "Маска подсети",
    gateway: "Основной шлюз",
    dns: "DNS сервер",
    http_port: "Порт HTTP",
    https_port: "Порт HTTPS",
    rtsp_port: "RTSP порт",
    rtsp_multicast: "RTSP multicast",
    rtsp_tunneling: "Туннелирование RTSP через HTTP",
    rtsp_auth: "Авторизация RTSP"
  },
  ftp: {
    title: "Настройки FTP",
    common_card_title: "Общие настройки",
    ftp_server: "FTP сервер",
    ftp_port: "FTP порт",
    login: "Логин",
    password: "Пароль",
    ftp_upload_path: "Директория для загрузки"
  },
  smtp: {
    title: "Настройки SMTP",
    common_card_title: "Общие настройки",
    account_name: "Имя учетной записи",
    password: "Пароль",
    sender_email: "Адрес отправителя",
    smtp_server: "SMTP сервер",
    security: "Безопасность",
    smtp_port: "SMTP порт",
    receiver_email: "Адрес получателя"
  },
  identification: {
    title: "Справка",
    common_card_title: "Общая информация",
    about_card_title: "О камере",
    firmware_card_title: "Версия прошивки",
    name: "Имя",
    mac: "MAC адрес",
    brand_name: "Производитель",
    model_name: "Модель",
    u_boot: "Загрузчик",
    kernel: "Операционная система",
    software: "Программное обеспечение",
    photo: "Фото"
  },
  user_management: {
    title: "Пользователи"
  },
  time_settings: {
    title: "Настройки даты/времени"
  },
  disk_management: {
    title: "Управление дисками"
  },
  maintenance: {
    title: "Обслуживание"
  },
  camera_log: {
    title: "Системный журнал"
  },
  player: {
    title: "Видео"
  }
};
