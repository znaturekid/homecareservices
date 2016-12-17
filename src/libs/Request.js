import request from 'axios';
import Promise from 'promise';

export default function Request(method, api = 'Tickets', id, data) {
    return request[method]('http://5fc78e53.ngrok.io/api/'+ api + (id ? ('/' + id) : ''), data);
    // return new Promise(function(resolve, reject) {
    //     resolve([{
    //         subject: 'a'
    //     },
    //     {
    //         subject: 'ab'
    //     }])
    // });
}