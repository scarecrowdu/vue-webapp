declare namespace Ajax {

  /**
   * axios 返回数据
   * @export
   * @interface AxiosResponse
   */
  export interface AxiosResponse {
    data: AjaxResponse;
  }

  /**
   * 请求接口数据
   * @export
   * @interface AjaxResponse
   */
  export interface AjaxResponse {
    /**
     * 状态码
     * @type {number}
     */
    code: number;

    /**
     * 数据
     * @type {any}
     */
    data: any;

    /**
     * 消息
     * @type {string}
     */
    message?: string;
  }
}
