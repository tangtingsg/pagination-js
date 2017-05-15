const $ = window.$
require('twbs-pagination/jquery.twbsPagination')

const reports = [
  {'title': '1 3-M LIVE SOCIAL OBSERVATORY', 'img': require('src/resource/images/report@1x.png'), 'category': 'TRAVEL', 'date': '14-06-2016', 'decription': 'A set of robust classifiers automatically categorize social data based on its meaning by leveraging text, users and their social relations, helping customers to transform it into useful and comprehensive data. Sentiment analysis can support to discover online reputation and user preference for brands and products in the market. Besides, intelligent user profiling technology can identify and analyze user community. For example, where are the customers from? Who are the active users in social networks? What are the users’ preference and interests?'},
  {'title': '2 3-M LIVE SOCIAL OBSERVATORY', 'img': require('src/resource/images/report@1x.png'), 'category': 'TRAVEL', 'date': '14-06-2016', 'decription': 'A set of robust classifiers automatically categorize social data based on its meaning by leveraging text, users and their social relations, helping customers to transform it into useful and comprehensive data. Sentiment analysis can support to discover online reputation and user preference for brands and products in the market. Besides, intelligent user profiling technology can identify and analyze user community. For example, where are the customers from? Who are the active users in social networks? What are the users’ preference and interests?'},
  {'title': '3 3-M LIVE SOCIAL OBSERVATORY', 'img': require('src/resource/images/report@1x.png'), 'category': 'TRAVEL', 'date': '14-06-2016', 'decription': 'A set of robust classifiers automatically categorize social data based on its meaning by leveraging text, users and their social relations, helping customers to transform it into useful and comprehensive data. Sentiment analysis can support to discover online reputation and user preference for brands and products in the market. Besides, intelligent user profiling technology can identify and analyze user community. For example, where are the customers from? Who are the active users in social networks? What are the users’ preference and interests?'},
  {'title': '4 3-M LIVE SOCIAL OBSERVATORY', 'img': require('src/resource/images/report@1x.png'), 'category': 'TRAVEL', 'date': '14-06-2016', 'decription': 'A set of robust classifiers automatically categorize social data based on its meaning by leveraging text, users and their social relations, helping customers to transform it into useful and comprehensive data. Sentiment analysis can support to discover online reputation and user preference for brands and products in the market. Besides, intelligent user profiling technology can identify and analyze user community. For example, where are the customers from? Who are the active users in social networks? What are the users’ preference and interests?'},
  {'title': '5 3-M LIVE SOCIAL OBSERVATORY', 'img': require('src/resource/images/report@1x.png'), 'category': 'TRAVEL', 'date': '14-06-2016', 'decription': 'A set of robust classifiers automatically categorize social data based on its meaning by leveraging text, users and their social relations, helping customers to transform it into useful and comprehensive data. Sentiment analysis can support to discover online reputation and user preference for brands and products in the market. Besides, intelligent user profiling technology can identify and analyze user community. For example, where are the customers from? Who are the active users in social networks? What are the users’ preference and interests?'},
  {'title': '6 3-M LIVE SOCIAL OBSERVATORY', 'img': require('src/resource/images/report@1x.png'), 'category': 'TRAVEL', 'date': '14-06-2016', 'decription': 'A set of robust classifiers automatically categorize social data based on its meaning by leveraging text, users and their social relations, helping customers to transform it into useful and comprehensive data. Sentiment analysis can support to discover online reputation and user preference for brands and products in the market. Besides, intelligent user profiling technology can identify and analyze user community. For example, where are the customers from? Who are the active users in social networks? What are the users’ preference and interests?'},
  {'title': '7 3-M LIVE SOCIAL OBSERVATORY', 'img': require('src/resource/images/report@1x.png'), 'category': 'TRAVEL', 'date': '14-06-2016', 'decription': 'A set of robust classifiers automatically categorize social data based on its meaning by leveraging text, users and their social relations, helping customers to transform it into useful and comprehensive data. Sentiment analysis can support to discover online reputation and user preference for brands and products in the market. Besides, intelligent user profiling technology can identify and analyze user community. For example, where are the customers from? Who are the active users in social networks? What are the users’ preference and interests?'},
  {'title': '8 3-M LIVE SOCIAL OBSERVATORY', 'img': require('src/resource/images/report@1x.png'), 'category': 'TRAVEL', 'date': '14-06-2016', 'decription': 'A set of robust classifiers automatically categorize social data based on its meaning by leveraging text, users and their social relations, helping customers to transform it into useful and comprehensive data. Sentiment analysis can support to discover online reputation and user preference for brands and products in the market. Besides, intelligent user profiling technology can identify and analyze user community. For example, where are the customers from? Who are the active users in social networks? What are the users’ preference and interests?'},
  {'title': '9 3-M LIVE SOCIAL OBSERVATORY', 'img': require('src/resource/images/report@1x.png'), 'category': 'TRAVEL', 'date': '14-06-2016', 'decription': 'A set of robust classifiers automatically categorize social data based on its meaning by leveraging text, users and their social relations, helping customers to transform it into useful and comprehensive data. Sentiment analysis can support to discover online reputation and user preference for brands and products in the market. Besides, intelligent user profiling technology can identify and analyze user community. For example, where are the customers from? Who are the active users in social networks? What are the users’ preference and interests?'},
  {'title': '10 3-M LIVE SOCIAL OBSERVATORY', 'img': require('src/resource/images/report@1x.png'), 'category': 'TRAVEL', 'date': '14-06-2016', 'decription': 'A set of robust classifiers automatically categorize social data based on its meaning by leveraging text, users and their social relations, helping customers to transform it into useful and comprehensive data. Sentiment analysis can support to discover online reputation and user preference for brands and products in the market. Besides, intelligent user profiling technology can identify and analyze user community. For example, where are the customers from? Who are the active users in social networks? What are the users’ preference and interests?'},
  {'title': '11 3-M LIVE SOCIAL OBSERVATORY', 'img': require('src/resource/images/report@1x.png'), 'category': 'TRAVEL', 'date': '14-06-2016', 'decription': 'A set of robust classifiers automatically categorize social data based on its meaning by leveraging text, users and their social relations, helping customers to transform it into useful and comprehensive data. Sentiment analysis can support to discover online reputation and user preference for brands and products in the market. Besides, intelligent user profiling technology can identify and analyze user community. For example, where are the customers from? Who are the active users in social networks? What are the users’ preference and interests?'},
  {'title': '12 3-M LIVE SOCIAL OBSERVATORY', 'img': require('src/resource/images/report@1x.png'), 'category': 'TRAVEL', 'date': '14-06-2016', 'decription': 'A set of robust classifiers automatically categorize social data based on its meaning by leveraging text, users and their social relations, helping customers to transform it into useful and comprehensive data. Sentiment analysis can support to discover online reputation and user preference for brands and products in the market. Besides, intelligent user profiling technology can identify and analyze user community. For example, where are the customers from? Who are the active users in social networks? What are the users’ preference and interests?'}
]

const totalReportNum = reports.length
const numReportOnePage = 4
const pagesNum = Math.ceil(totalReportNum / numReportOnePage)

function pagination () {
  $('.sync-pagination').twbsPagination({
    totalPages: pagesNum,
    next: '<span aria-hidden="true">&rsaquo;</span>',
    prev: '<span aria-hidden="true">&lsaquo;</span>',
    first: null,
    last: null,
    onPageClick (evt, page) {
      onePageReport(page)
    }
  })
  const pageLength = $('.page-item').length
  if (pageLength <= 3) {
    $('.pagination').hide()
  }
}

function generateDomForPagination (data) {
  const reportsDetailImg = $('<div class="col-2 paddingReport">')
  const reportsDetailImgItem = $('<img/>', {
    'src': reports[data].img
  })
  const $reportImg = $(reportsDetailImg).append(reportsDetailImgItem)
  const reportDiv = $('<div class="col-9 ver-center">')
  const reportTitle = $('<p class="reportTitle">' + reports[data].title + '</p>')
  const reportCatDate = $('<p class="reportCatDate">')
  const reportCat = $('<span class="reportCat">' + reports[data].category + '</span>')
  const reportDate = $('<span class="reportDate">' + reports[data].date + '</span>')
  const reportDec = $('<p class="reportDec">' + reports[data].decription + '</p>')
  const reportDownload = $('<div class="greenBtn reportDownload">')
  const reportDownloadBtn = $('<button data-toggle="modal" data-target="#downloadReport">' + 'Download' + '</button>')
  const $reportCatDate = $(reportCatDate).append(reportCat, reportDate)
  const $reportDownload = $(reportDownload).append(reportDownloadBtn)
  const $reportDetail = $(reportDiv).append(reportTitle, $reportCatDate, reportDec, $reportDownload)
  $('#reportsPagination').append($reportImg, $reportDetail)
}

function onePageReport (page) {
  $('#reportsPagination').empty()
  let i = 0
  const number = (page - 1) * numReportOnePage
  while (i < numReportOnePage) {
    generateDomForPagination(number + i)
    i++
  }
}

export {pagination}
