import 'src/entry'
import 'src/containers/reports/reports.pug'
import 'src/containers/reports/reports.scss'
import 'src/containers/reports/reportHeader.pug'
import 'bootstrap/js/src/modal'
import {setFixedHeader, throttle} from 'src/service/utils'
import {timer, commonImageHeight} from 'src/constants/common'
import {pagination} from 'src/containers/reports/pagination'

const $ = window.$

$(document).ready(function () {
  addFixedHeader()
  pagination()
})

function addFixedHeader () {
  $(window).scroll(throttle(function () {
    setFixedHeader(commonImageHeight)
  }, timer))
}

