namespace Interface {
  export interface KeyVal {
    [key: string]: any
  }
}

namespace Interface {
  export interface UrlParams {
    // 埋点渠道标识
    QD: [string, string]
    // 埋点属性标识
    AW: [string, string]
    // 埋点平台ID
    pro: string
    dsfrom: string
  }
}

export default Interface
