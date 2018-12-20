let env = process.env.NODE_ENV

const HOST = env === 'production'? 'http://52.83.225.97:30000' : 'http://52.83.225.97:30000'

export const GET_MENU_LIST = HOST+'/getTitle'

export const GET_NEWS_LIST=HOST+'/dynamic/showNewsListByTypeId'
/**
 * 根据id删除
 * @type {string}
 */
export const DELETE=HOST+'/dynamic/delDynamic';
/**
 * 编辑界面数据
 * @type {string}
 */
export const EDIT=HOST+'/dynamic/queryDynamic';
/**
 * 更新数据
 * @type {string}
 */
export const UPDATE=HOST+'/dynamic/updateDynamic';

export const UPLOAD_EDITOR=HOST+'/dynamic/addDynamic'
