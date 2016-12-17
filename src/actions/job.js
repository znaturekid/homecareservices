import request from 'libs/Request';
import * as types from 'types';
import Promise from 'promise';

export function fetchjob(id) {
    return {
        type: types.GET_JOB,
        promise: request('get', 'Tickets/detail', id)
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
        promise: request('post', null, job)
    };
}

export function updatejob(job) {
    return {
        type: types.UPDATE_JOB,
        promise: request('put', job._id, job, '/api/job')
    };
}

export function deletejob(job) {
    return {
        type: types.DELETE_JOB,
        promise: request('delete', job._id, job, '/api/job')
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

