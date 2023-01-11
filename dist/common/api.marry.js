'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  submitRequestMoney: {
    descript: '提交请款列表',
    url: 'submitRequestMoney'
  },
  getRequestMoneyInfo: {
    descript: '请款详情',
    url: 'getRequestMoneyInfo'
  },
  reviewRequestMoney: {
    descript: '审核请款',
    url: 'reviewRequestMoney'
  },
  editRequestMoney: {
    descript: '编辑',
    url: 'editRequestMoney'
  },
  getLoginerServerTeamEmployee: {
    descript: '获取客服团队列表',
    url: 'getLoginerServerTeamEmployee'
  },
  countMissingUser: {
    descript: '本月漏客',
    url: 'countMissingUser'
  },
  changeHotelWeddingStatus: {
    descript: '改变婚期酒店状态',
    url: 'changeHotelWeddingStatus'
  },
  applyPassProcess: {
    descript: '策划进度修改',
    url: 'applyPassProcess'
  },
  confirmWeddingFinish: {
    descript: '婚礼已完成',
    url: 'confirmWeddingFinish'
  },

  editOrderSecondStatus: {
    descript: '婚礼已完成',
    url: 'editOrderSecondStatus'
  },
  finishProcessFourcate: {
    descript: '四大勾选进度',
    url: 'finishProcessFourcate'
  },

  getDistributionTeams: {
    descript: '获取可接单团队',
    url: 'getDistributionTeams'
  },
  dropOrderApply: {
    descript: '申请退款',
    url: 'dropOrderApply'
  },
  questionTable: {
    descript: '调查表',
    url: 'questionTable'
  },
  getDataStatistics: {
    descript: '销售情况统计',
    url: 'getDataStatistics'
  },
  getServerDataStatistics: {
    descript: '获取统计客资列表',
    url: 'getServerDataStatistics'
  }
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwaS5tYXJyeS5qcyJdLCJuYW1lcyI6WyJzdWJtaXRSZXF1ZXN0TW9uZXkiLCJkZXNjcmlwdCIsInVybCIsImdldFJlcXVlc3RNb25leUluZm8iLCJyZXZpZXdSZXF1ZXN0TW9uZXkiLCJlZGl0UmVxdWVzdE1vbmV5IiwiZ2V0TG9naW5lclNlcnZlclRlYW1FbXBsb3llZSIsImNvdW50TWlzc2luZ1VzZXIiLCJjaGFuZ2VIb3RlbFdlZGRpbmdTdGF0dXMiLCJhcHBseVBhc3NQcm9jZXNzIiwiY29uZmlybVdlZGRpbmdGaW5pc2giLCJlZGl0T3JkZXJTZWNvbmRTdGF0dXMiLCJmaW5pc2hQcm9jZXNzRm91cmNhdGUiLCJnZXREaXN0cmlidXRpb25UZWFtcyIsImRyb3BPcmRlckFwcGx5IiwicXVlc3Rpb25UYWJsZSIsImdldERhdGFTdGF0aXN0aWNzIiwiZ2V0U2VydmVyRGF0YVN0YXRpc3RpY3MiXSwibWFwcGluZ3MiOiI7Ozs7O2tCQUFlO0FBQ2JBLHNCQUFtQjtBQUNqQkMsY0FBVSxRQURPO0FBRWpCQyxTQUFJO0FBRmEsR0FETjtBQUtiQyx1QkFBb0I7QUFDbEJGLGNBQVUsTUFEUTtBQUVsQkMsU0FBSTtBQUZjLEdBTFA7QUFTYkUsc0JBQW1CO0FBQ2pCSCxjQUFVLE1BRE87QUFFakJDLFNBQUk7QUFGYSxHQVROO0FBYWJHLG9CQUFpQjtBQUNmSixjQUFVLElBREs7QUFFZkMsU0FBSTtBQUZXLEdBYko7QUFpQmJJLGdDQUE2QjtBQUMzQkwsY0FBVSxVQURpQjtBQUUzQkMsU0FBSTtBQUZ1QixHQWpCaEI7QUFxQmJLLG9CQUFpQjtBQUNmTixjQUFVLE1BREs7QUFFZkMsU0FBSTtBQUZXLEdBckJKO0FBeUJiTSw0QkFBeUI7QUFDdkJQLGNBQVUsVUFEYTtBQUV2QkMsU0FBSTtBQUZtQixHQXpCWjtBQTZCYk8sb0JBQWlCO0FBQ2ZSLGNBQVUsUUFESztBQUVmQyxTQUFJO0FBRlcsR0E3Qko7QUFpQ2JRLHdCQUFxQjtBQUNuQlQsY0FBVSxPQURTO0FBRW5CQyxTQUFJO0FBRmUsR0FqQ1I7O0FBc0NiUyx5QkFBc0I7QUFDcEJWLGNBQVUsT0FEVTtBQUVwQkMsU0FBSTtBQUZnQixHQXRDVDtBQTBDYlUseUJBQXNCO0FBQ3BCWCxjQUFVLFFBRFU7QUFFcEJDLFNBQUk7QUFGZ0IsR0ExQ1Q7O0FBZ0RiVyx3QkFBcUI7QUFDbkJaLGNBQVUsU0FEUztBQUVuQkMsU0FBSTtBQUZlLEdBaERSO0FBb0RiWSxrQkFBZTtBQUNiYixjQUFVLE1BREc7QUFFYkMsU0FBSTtBQUZTLEdBcERGO0FBd0RiYSxpQkFBYztBQUNaZCxjQUFVLEtBREU7QUFFWkMsU0FBSTtBQUZRLEdBeEREO0FBNERiYyxxQkFBa0I7QUFDaEJmLGNBQVUsUUFETTtBQUVoQkMsU0FBSTtBQUZZLEdBNURMO0FBZ0ViZSwyQkFBd0I7QUFDdEJoQixjQUFVLFVBRFk7QUFFdEJDLFNBQUk7QUFGa0I7QUFoRVgsQyIsImZpbGUiOiJhcGkubWFycnkuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCB7XG4gIHN1Ym1pdFJlcXVlc3RNb25leTp7XG4gICAgZGVzY3JpcHQ6ICfmj5DkuqTor7fmrL7liJfooagnLFxuICAgIHVybDonc3VibWl0UmVxdWVzdE1vbmV5J1xuICB9LFxuICBnZXRSZXF1ZXN0TW9uZXlJbmZvOntcbiAgICBkZXNjcmlwdDogJ+ivt+asvuivpuaDhScsXG4gICAgdXJsOidnZXRSZXF1ZXN0TW9uZXlJbmZvJ1xuICB9LFxuICByZXZpZXdSZXF1ZXN0TW9uZXk6e1xuICAgIGRlc2NyaXB0OiAn5a6h5qC46K+35qy+JyxcbiAgICB1cmw6J3Jldmlld1JlcXVlc3RNb25leSdcbiAgfSxcbiAgZWRpdFJlcXVlc3RNb25leTp7XG4gICAgZGVzY3JpcHQ6ICfnvJbovpEnLFxuICAgIHVybDonZWRpdFJlcXVlc3RNb25leSdcbiAgfSxcbiAgZ2V0TG9naW5lclNlcnZlclRlYW1FbXBsb3llZTp7XG4gICAgZGVzY3JpcHQ6ICfojrflj5blrqLmnI3lm6LpmJ/liJfooagnLFxuICAgIHVybDonZ2V0TG9naW5lclNlcnZlclRlYW1FbXBsb3llZSdcbiAgfSxcbiAgY291bnRNaXNzaW5nVXNlcjp7XG4gICAgZGVzY3JpcHQ6ICfmnKzmnIjmvI/lrqInLFxuICAgIHVybDonY291bnRNaXNzaW5nVXNlcidcbiAgfSxcbiAgY2hhbmdlSG90ZWxXZWRkaW5nU3RhdHVzOntcbiAgICBkZXNjcmlwdDogJ+aUueWPmOWpmuacn+mFkuW6l+eKtuaAgScsXG4gICAgdXJsOidjaGFuZ2VIb3RlbFdlZGRpbmdTdGF0dXMnXG4gIH0sXG4gIGFwcGx5UGFzc1Byb2Nlc3M6e1xuICAgIGRlc2NyaXB0OiAn562W5YiS6L+b5bqm5L+u5pS5JyxcbiAgICB1cmw6J2FwcGx5UGFzc1Byb2Nlc3MnXG4gIH0sXG4gIGNvbmZpcm1XZWRkaW5nRmluaXNoOntcbiAgICBkZXNjcmlwdDogJ+WpmuekvOW3suWujOaIkCcsXG4gICAgdXJsOidjb25maXJtV2VkZGluZ0ZpbmlzaCdcbiAgfSxcblxuICBlZGl0T3JkZXJTZWNvbmRTdGF0dXM6e1xuICAgIGRlc2NyaXB0OiAn5ama56S85bey5a6M5oiQJyxcbiAgICB1cmw6J2VkaXRPcmRlclNlY29uZFN0YXR1cydcbiAgfSxcbiAgZmluaXNoUHJvY2Vzc0ZvdXJjYXRlOntcbiAgICBkZXNjcmlwdDogJ+Wbm+Wkp+WLvumAiei/m+W6picsXG4gICAgdXJsOidmaW5pc2hQcm9jZXNzRm91cmNhdGUnXG4gIH0sXG5cblxuICBnZXREaXN0cmlidXRpb25UZWFtczp7XG4gICAgZGVzY3JpcHQ6ICfojrflj5blj6/mjqXljZXlm6LpmJ8nLFxuICAgIHVybDonZ2V0RGlzdHJpYnV0aW9uVGVhbXMnXG4gIH0sXG4gIGRyb3BPcmRlckFwcGx5OntcbiAgICBkZXNjcmlwdDogJ+eUs+ivt+mAgOasvicsXG4gICAgdXJsOidkcm9wT3JkZXJBcHBseSdcbiAgfSxcbiAgcXVlc3Rpb25UYWJsZTp7XG4gICAgZGVzY3JpcHQ6ICfosIPmn6XooagnLFxuICAgIHVybDoncXVlc3Rpb25UYWJsZSdcbiAgfSxcbiAgZ2V0RGF0YVN0YXRpc3RpY3M6e1xuICAgIGRlc2NyaXB0OiAn6ZSA5ZSu5oOF5Ya157uf6K6hJyxcbiAgICB1cmw6J2dldERhdGFTdGF0aXN0aWNzJ1xuICB9LFxuICBnZXRTZXJ2ZXJEYXRhU3RhdGlzdGljczp7XG4gICAgZGVzY3JpcHQ6ICfojrflj5bnu5/orqHlrqLotYTliJfooagnLFxuICAgIHVybDonZ2V0U2VydmVyRGF0YVN0YXRpc3RpY3MnXG4gIH0sXG59Il19