/**
 * LoopBack Application
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import { TodosFields } from './todosFields';


export interface Filter { 
    where?: object;
    fields?: TodosFields;
    offset?: number;
    limit?: number;
    skip?: number;
    order?: Array<string>;
}

