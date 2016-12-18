import request from 'libs/Request';
import * as types from 'types';
import Promise from 'promise';
import _ from 'lodash';

export function fetchjob(id) {
    return {
        type: types.GET_JOB,
        promise: request('get', 'Ticket', id)
    };
}
export function fetchjobs(id) {
    return {
        type: types.GET_JOBS,
        promise: request('get', 'Tickets', id)
    };
}

export function fetchjobsSuccess(data) {
    return {
        type: types.GET_JOBS_SUCCESS,
        data
    };
}

export function fetchjobsFailure() {
    return {
        type: types.GET_JOBS_FAILURE
    };
}
export function fetchjobSuccess(data) {
    return {
        type: types.GET_JOB_SUCCESS,
        data
    };
}

export function createjob(job) {
    return {
        type: types.CREATE_JOB,
        promise: request('post', 'Tickets')
    };
}

export function updatejob(job) {
    return {
        type: types.UPDATE_JOB,
        promise: request('post','Ticket', job.TicketId, _.omit(job, ['TicketItems', 'Appointments', 'TicketLogs', 'Customer']))
    };
}

export function deletejob(job) {
    return {
        type: types.DELETE_JOB,
        promise: request('delete','Ticket', job.TicketId, job)
    };
}
export function deletejobSuccess(job) {
    return {
        type: types.DELETE_JOB_SUCCESS,
        data: job
    };
}
export function deletejobFailure() {
    return {
        type: types.DELETE_JOB_FAILURE
    };
}

export function resetjob() {
    return {
        type: types.RESET_JOB
    };
}

