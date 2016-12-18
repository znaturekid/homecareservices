import 'react-hot-loader/patch';
import { AppContainer } from 'react-hot-loader';
import React from 'react';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';
import configureStore from 'stores/ConfigStore';
// Onsen UI Styling and Icons
require('onsenui/stylus/blue-basic-theme.styl');
require('onsenui/css/onsenui.css');
import 'rc-select/assets/index.css';
import '../stylesheet/style.css';
import App from './pages/App';
const initialState = {
  ticketItem: {
    list: [
      {
        "Item": {
          "InvoiceItems": [],
          "TicketItems": [],
          "ItemId": 1,
          "ItemName": "Repair Fee",
          "Price": 2.0000
        },
        "TicketItemId": 1,
        "TicketId": 1,
        "ItemId": 1,
        "Quantity": 1,
        "Price": 2.0000,
        "CreateDate": "2016-12-18T09:00:04",
        "UpdateDate": "2016-12-18T09:00:04",
        "IsActive": true
      },
      {
        "Item": {
          "InvoiceItems": [],
          "TicketItems": [],
          "ItemId": 2,
          "ItemName": "Item test 1",
          "Price": 9.0000
        },
        "TicketItemId": 2,
        "TicketId": 1,
        "ItemId": 2,
        "Quantity": 1,
        "Price": 9.0000,
        "CreateDate": "2016-12-18T09:00:05",
        "UpdateDate": "2016-12-18T09:00:05",
        "IsActive": true
      }
    ],
  },
  appointment: {
    list: [
      {
        "User": {
          "Appointments": [],
          "UserId": 2,
          "UserName": "hieu",
          "PassWord": "123456",
          "IsAdmin": false,
          "DisplayName": "Hieu"
        },
        "AppointmentId": 1,
        "Title": "Appt 1",
        "StartDate": "2016-12-18T08:00:00",
        "EndTime": "2016-12-18T09:00:00",
        "TicketId": 1,
        "UserId": 2,
        "CreateDate": "2016-12-18T00:04:14.77",
        "UpdateDate": "2016-12-18T00:04:14.77",
        "IsActive": true
      },
      {
        "User": {
          "Appointments": [],
          "UserId": 2,
          "UserName": "hieu",
          "PassWord": "123456",
          "IsAdmin": false,
          "DisplayName": "Quang"
        },
        "AppointmentId": 1,
        "Title": "Appt 1",
        "StartDate": "2016-12-18T08:00:00",
        "EndTime": "2016-12-18T09:00:00",
        "TicketId": 1,
        "UserId": 2,
        "CreateDate": "2016-12-18T00:04:14.77",
        "UpdateDate": "2016-12-18T00:04:14.77",
        "IsActive": true
      },
      {
        "User": {
          "Appointments": [],
          "UserId": 2,
          "UserName": "hieu",
          "PassWord": "123456",
          "IsAdmin": false,
          "DisplayName": "Dan"
        },
        "AppointmentId": 1,
        "Title": "Appt 1",
        "StartDate": "2016-12-18T08:00:00",
        "EndTime": "2016-12-18T09:00:00",
        "TicketId": 1,
        "UserId": 2,
        "CreateDate": "2016-12-18T00:04:14.77",
        "UpdateDate": "2016-12-18T00:04:14.77",
        "IsActive": true
      },
      {
        "User": {
          "Appointments": [],
          "UserId": 2,
          "UserName": "hieu",
          "PassWord": "123456",
          "IsAdmin": false,
          "DisplayName": "Huy"
        },
        "AppointmentId": 1,
        "Title": "Appt 1",
        "StartDate": "2016-12-18T08:00:00",
        "EndTime": "2016-12-18T09:00:00",
        "TicketId": 1,
        "UserId": 2,
        "CreateDate": "2016-12-18T00:04:14.77",
        "UpdateDate": "2016-12-18T00:04:14.77",
        "IsActive": true
      }
      , {
        "User": {
          "Appointments": [],
          "UserId": 2,
          "UserName": "hieu",
          "PassWord": "123456",
          "IsAdmin": false,
          "DisplayName": "Hieu"
        },
        "AppointmentId": 1,
        "Title": "Appt 1",
        "StartDate": "2016-12-18T08:00:00",
        "EndTime": "2016-12-18T09:00:00",
        "TicketId": 1,
        "UserId": 2,
        "CreateDate": "2016-12-18T00:04:14.77",
        "UpdateDate": "2016-12-18T00:04:14.77",
        "IsActive": true
      }
    ]
  },
  ticketLog: {
    list: [
      {
        "TicketLogId": 1,
        "TicketId": 1,
        "LogType": 1,
        "Content": "Change Status to New",
        "CreateDate": "2016-12-18T09:00:04",
        "UpdateDate": "2016-12-18T09:00:04",
        "IsActive": true
      },
      {
        "TicketLogId": 2,
        "TicketId": 1,
        "LogType": 1,
        "Content": "Change Status to Open",
        "CreateDate": "2016-12-18T09:00:20",
        "UpdateDate": "2016-12-18T09:00:20",
        "IsActive": true
      },
      {
        "TicketLogId": 8,
        "TicketId": 1,
        "LogType": 1,
        "Content": "Update ticket named Job 1 update",
        "CreateDate": "2016-12-18T08:16:14.587",
        "UpdateDate": "2016-12-18T08:16:14.587",
        "IsActive": true
      }
    ]
  },
  invoice: {
    list: [
      {
        "Payments": [],
        "InvoiceId": 1,
        "TicketId": 1,
        "TotalAmount": 11.0000,
        "BalanceDue": 11.0000,
        "AmountPaid": 0.0000,
        "Singnature": null,
        "InvoiceStatus": 1,
        "CreateDate": "2016-12-18T09:00:06",
        "UpdateDate": "2016-12-18T09:00:06",
        "IsActive": true
      },
      {
        "Payments": [],
        "InvoiceId": 2,
        "TicketId": 2,
        "TotalAmount": 11.0000,
        "BalanceDue": 11.0000,
        "AmountPaid": 0.0000,
        "Singnature": null,
        "InvoiceStatus": 1,
        "CreateDate": "2016-12-18T09:00:06",
        "UpdateDate": "2016-12-18T09:00:06",
        "IsActive": true
      }
    ]
  },
  event: {
    list: [
      {
        'title': 'All Day Event',
        'allDay': true,
        'start': new Date(2016, 11, 18),
        'end': new Date(2016, 11, 18)
      },
      {
        'title': 'Long Event',
        'start': new Date(2016, 11, 17),
        'end': new Date(2016, 11, 19)
      },

      {
        'title': 'DTS STARTS',
        'start': new Date(2016, 11, 13, 0, 0, 0),
        'end': new Date(2016, 11, 20, 0, 0, 0)
      },

      {
        'title': 'DTS ENDS',
        'start': new Date(2016, 11, 6, 0, 0, 0),
        'end': new Date(2016, 11, 13, 0, 0, 0)
      },

      {
        'title': 'Some Event',
        'start': new Date(2016, 11, 19, 0, 0, 0),
        'end': new Date(2016, 11, 19, 0, 0, 0)
      },
      {
        'title': 'Conference',
        'start': new Date(2016, 11, 17),
        'end': new Date(2016, 11, 18),
        desc: 'Big conference for important people'
      },
      {
        'title': 'Meeting',
        'start': new Date(2016, 11, 18, 10, 30, 0, 0),
        'end': new Date(2016, 11, 18, 12, 30, 0, 0),
        desc: 'Pre-meeting meeting, to prepare for the meeting'
      },
      {
        'title': 'Lunch',
        'start':new Date(2016, 11, 18, 12, 0, 0, 0),
        'end': new Date(2016, 11, 18, 13, 0, 0, 0),
        desc: 'Power lunch'
      },
      {
        'title': 'Meeting',
        'start':new Date(2016, 11, 19,14, 0, 0, 0),
        'end': new Date(2016, 11, 19,15, 0, 0, 0)
      },
      {
        'title': 'Happy Hour',
        'start':new Date(2016, 11, 18, 17, 0, 0, 0),
        'end': new Date(2016, 11, 18, 19, 30, 0, 0),
        desc: 'Most important meal of the day'
      },
      {
        'title': 'Dinner',
        'start':new Date(2016, 11, 18, 20, 0, 0, 0),
        'end': new Date(2016, 11, 18, 21, 0, 0, 0)
      },
      {
        'title': 'Birthday Party',
        'start':new Date(2016, 11, 19, 7, 0, 0),
        'end': new Date(2016, 11, 19, 10, 30, 0)
      }
    ]
  }
}
const store = configureStore(initialState);
const rootElement = document.getElementById('app');
ReactDOM.render(
  <AppContainer>
    <Provider store={store}>
      <App />
    </Provider>
  </AppContainer>,

  rootElement
);

if (module.hot) {
  module.hot.accept('./pages/App', () => {
    const NextApp = require('./pages/App').default;
    ReactDOM.render(
      <AppContainer>
        <Provider store={store}>
          <NextApp />
        </Provider></AppContainer>,

      rootElement
    );
  });
}
