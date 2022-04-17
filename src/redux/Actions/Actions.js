import {createAction} from 'redux-actions';
import {LIST, BODY} from '../Constants/Constants';
import axios from 'axios';
import { getApiCall } from './ApiCallAction';

const getList = createAction(LIST);
const getBody = createAction(BODY);

const api = 'https://flipkart-email-mock.now.sh/';

export const MailList = pageNumber => getApiCall(`${api}?page=${pageNumber}`,getList);

export const MailBody = id => getApiCall(`${api}?id=${id}`,getBody);

