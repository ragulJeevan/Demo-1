import { environment } from '../../environments/environment';
let base_url = environment.base_url ;
let core_url = `${base_url}/api_project_management` ;
let client_url = `${base_url}/api_user_management` ;
let foundation_url = `${base_url}/api_foundation` ;

export const root = {
// CORE     
core:core_url,

project:`${core_url}/project`,
solution : `${core_url}/solution`,
feature: `${core_url}/feature`,
usecase:`${core_url}/usecase`,
task:`${core_url}/task`,
// CLIENT
client:client_url,

designation :`${client_url}/designation`,
dep:`${client_url}/department`,
user:`${client_url}/user`,
// FOUNDATION 
foundation:foundation_url,

prioriy : `${foundation_url}/priority`,
status:`${foundation_url}/status`,
task_type:`${foundation_url}/task_type`,
sdlc:`${foundation_url}/sdlc`,
complexity:`${foundation_url}/complexity`,
issue_type:`${foundation_url}/issue_type`,
issue_source:`${foundation_url}/issue_source`,
issue_stage:`${foundation_url}/issue_stage`,


};
 