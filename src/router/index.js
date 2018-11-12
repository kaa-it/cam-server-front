import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Login from '@/components/Auth/Login'
import Events from '@/components/Events/Events'
import Records from '@/components/Records/Records'
import Image from '@/components/Settings/Media/Image'
import VideoEncoder from '@/components/Settings/Media/VideoEncoder'
import OSD from '@/components/Settings/Media/OSD'
import MotionDetection from '@/components/Settings/Analytics/MotionDetection'
import Alarms from '@/components/Settings/Alarms'
import Record from '@/components/Settings/Record'
import Cloud from '@/components/Settings/Cloud'
import Ethernet from '@/components/Settings/Network/Ethernet'
import FTP from '@/components/Settings/Network/FTP'
import SMTP from '@/components/Settings/Network/SMTP'
import Identification from '@/components/Settings/System/Identification'
import UserManagement from '@/components/Settings/System/UserManagement'
import TimeSettings from '@/components/Settings/System/TimeSettings'
import DiskManagement from '@/components/Settings/System/DiskManagement'
import Maintenance from '@/components/Settings/System/Maintenance'
import CameraLog from '@/components/Settings/System/CameraLog'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/auth/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/events',
      name: 'Events',
      component: Events
    },
    {
      path: '/records',
      name: 'Records',
      component: Records
    },
    {
      path: '/settings/media/image',
      name: 'Image',
      component: Image
    },
    {
      path: '/settings/media/encoder/:id',
      name: 'VideoEncoder',
      component: VideoEncoder,
      props: true
    },
    {
      path: '/settings/media/osd',
      name: 'OSD',
      component: OSD
    },
    {
      path: '/settings/analytics/motion_detection',
      name: 'MotionDetection',
      component: MotionDetection
    },
    {
      path: '/settings/alarms',
      name: 'Alarms',
      component: Alarms
    },
    {
      path: '/settings/record',
      name: 'Record',
      component: Record
    },
    {
      path: '/settings/cloud',
      name: 'Cloud',
      component: Cloud
    },
    {
      path: '/settings/network/ethernet',
      name: 'Ethernet',
      component: Ethernet
    },
    {
      path: '/settings/network/ftp',
      name: 'FTP',
      component: FTP
    },
    {
      path: '/settings/network/SMTP',
      name: 'SMTP',
      component: SMTP
    },
    {
      path: '/settings/system/identification',
      name: 'Identification',
      component: Identification
    },
    {
      path: '/settings/system/user_management',
      name: 'UserManagement',
      component: UserManagement
    },
    {
      path: '/settings/system/time_settings',
      name: 'TimeSettings',
      component: TimeSettings
    },
    {
      path: '/settings/system/disk_management',
      name: 'DiskManagement',
      component: DiskManagement
    },
    {
      path: '/settings/system/maintenance',
      name: 'Maintenance',
      component: Maintenance
    },
    {
      path: '/settings/system/log',
      name: 'CameraLog',
      component: CameraLog
    }
  ],
  mode: 'history'
})
