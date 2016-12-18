import request from 'axios';
import Promise from 'promise';
const url = 'http://effde939.ngrok.io/api/';
export default function Request(method, api = 'Tickets', id, data) {
    const link = url+ api + (id ? ('/' + id) : '');
    return request[method](link, data);
    // return request.ajax({
    //     type: method.toUpperCase(),
    //     url: link,
    //     contentType: 'application/json; charset=utf-8',
    //     dataType: 'jsonp',
    //     data: JSON.stringify(data)
    // });
    // return new Promise(function(resolve, reject) {
    //     resolve([{
    //         subject: 'a'
    //     },
    //     {
    //         subject: 'ab'
    //     }])
    // });
}