/*
Tank App底部导航组件顺序优化

**************************
QuantumultX:

[rewrite_local]
^http(s)?:\/\/gw\-app\.beantechyun\.com\/app\-api\/api\/v1\.0\/content\/route\/getWholeNodeContentInfo url script-response-body todo

[mitm]
hostname = gw-app.beantechyun.com
 */
if(/^http(s)?:\/\/gw\-app\.beantechyun\.com\/app\-api\/api\/v1\.0\/content\/route\/getWholeNodeContentInfo\?contentType=MENU&nodeId=tank/.test($request.url)) {
    var obj = JSON.parse($response.body);
    var contentMessageList = obj.data[0].contentMessageList;
    var temp = contentMessageList[0];
    contentMessageList[0] = contentMessageList[2];
    contentMessageList[2] = temp;
    
    $done({
        body: JSON.stringify(obj)
    });
}