import { combineReducers } from 'redux';
import app from 'reducers/app';
import dynamic from 'reducers/dynamic';

const job = dynamic('JOB', 'TicketId');
const invoice = dynamic('INVOICE', 'InvoiceId');
const item = dynamic('ITEM', 'ItemId');
const ticketItem = dynamic('TICKETITEM', 'TicketItemId');
const invoiceItem = dynamic('INVOICEITEM', 'InvoiceItemId');
const appointment = dynamic('APPOINTMENT', 'AppointmentId');
const customer = dynamic('CUSTOMER', 'CustomerId');
const ticketLog = dynamic('TICKETLOG', 'TicketLogId');
const event = dynamic('EVENT', 'EVENTID');
const rootReducer = combineReducers({
    app,
    job,
    customer,
    appointment,
    ticketItem,
    item,
    invoice,
    invoiceItem,
    ticketLog,
    event
});

export default rootReducer;