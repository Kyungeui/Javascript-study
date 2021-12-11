function ajaxHelper(params) {

    /**
     * params = {
     *      url: "~~~~",
     *      method: "GET, POST, PUT, DELETE",
     *      headers: {
     *          key: value, key: value,
     *      },
     *      success: function(json) { ... }
     * }
     */

    const xhr = new XMLHttpRequest();
    xhr.open(params.method || 'GET', params.url);
    
    if (params.headers != undefined) {
        for (const key in params.headers) {
            xhr.setRequestHeader(key, params.headers[key]);
        }
    }

    xhr.onreadystatechange = (e) => {
        const ajax = e.target;

        if (ajax.readyState == XMLHttpRequest.DONE) {
            if (ajax.status == 200) {
                if (params.success != undefined) {
                    const json = JSON.parse(ajax.responseText);
                    params.success(json);
                }
            } else {
                const s = parseInt(ajax.status / 100);
                if (s == 4) {
                    alert('[' + ajax.status + ']' + ajax.status + ' - 요청 주소가 잘못되었습니다.');
                } else if (s == 5) {
                    alert('[' + ajax.status + ']' + ajax.status + ' - 서버의 응답이 없습니다.');
                } else {
                    alert('[' + ajax.status + ']' + ajax.status + ' - 요청에 실패했습니다.');
                }
            }
        } // end if
    };
    
    xhr.send();
}

function ajaxHandlebar(params) {
     /**
     * params = {
     *      url: "~~~~",
     *      method: "GET, POST, PUT, DELETE",
     *      headers: {
     *          key: value, key: value,
     *      },
     *      tmpl: '#tmpl',
     *      view: '#result'
     * }
     */

     ajaxHelper({
         ...params,
         success: json => {
             const html = document.querySelector(params.tmpl).innerHTML;
             const template = Handlebars.compile(html);
             const result = template(json);
             document.querySelector(params.view).insertAdjacentHTML('beforeend', result);

         }
     });
}