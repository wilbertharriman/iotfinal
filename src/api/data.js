import axios from "axios";

const proxyUrl = "https://cors-anywhere.herokuapp.com/";
const dataUrl = `https://campus.kits.tw/api/get/data/aaf55a77?date_filter=2021-01-01+-+2021-01-03`;

export default function getData() {
    const auth = "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjI4OGMyM2UzMjQ3N2E3ZTFjNWNhNGYxMGIzYzc1ZjRhOGU3NzY3YzNmZTlkY2UyZTAzYWU1MmVjNjM0MWMzOGI5NmViYWMwMzgxNjhiNzg3In0.eyJhdWQiOiIyIiwianRpIjoiMjg4YzIzZTMyNDc3YTdlMWM1Y2E0ZjEwYjNjNzVmNGE4ZTc3NjdjM2ZlOWRjZTJlMDNhZTUyZWM2MzQxYzM4Yjk2ZWJhYzAzODE2OGI3ODciLCJpYXQiOjE2MDk1OTkxODEsIm5iZiI6MTYwOTU5OTE4MSwiZXhwIjoxNjQxMTM1MTgxLCJzdWIiOiI1MjAiLCJzY29wZXMiOltdfQ.rSRrXg9PHgX1jmQOYicJ0bMnBisCEIDHyY_GiRxfGezFi1M-J3K0U4cvJqiv9Jv4ab9iWhlqMi9SSA7lT_jc8-2jhJKdBhSmTTnS7b3PlYhC8g7GYvPej5z69IMd0mzHrTiok4RloAZRUykYSzUrAXY9agMWd8_S6Q2nWsbDlBQJ3Iojneck9x0EvTf2QBOMVBv0rpWzaPIpeeltKGuzvEmBx41D03LNYU_rdSHZPuKl8pvw93pkIrw5sITkpZvpvRiouTOCHMq9Ke3uAviEYciSPJCxNic2L0WGeWMt65-1JZDJVp3F2dqmyEYsTTgtZL7qc2QQ4GIDhCs73yB0Dr9xNEuJGupwo551m8RB7f-1h6r6KhxKo3urwQuA56mMiGTazqNdg-Z3UGAM63FpWVSk34WXfwrUzAare_q2lvlrrHocmPjGv579CuZ0rOZIjZdD6tIasF4BruWOb7zq-_yE_r8Wy7XdkGZCkU-oGsZ2ImhBrAq8oRv_J3fFaDdlRN0ltaWNi7097vbtRadN9Bpko7Ifors5jS_x0NfQgsM5Cb1kxuQ816b0FXtOCOfslOKRWLFInySK-k4wjSIy1yUolPaYpXoGJqsu7Ki2HP5jm2Gj8WoSdT-ZXWDQ9NQhW05liWF_HTJkwGOQsjK_4sMUsRTOY5JYuuy12eubE9U";
    const config = {
        method: "post",
        url: `${proxyUrl}${dataUrl}`,
        headers: {
            Authorization: `${auth}`,
            Accept: 'application/json'
        },
    };

    return axios(config).then((res) => {
        console.log(res.data);
        return res.data;
    }).catch((error) => {
        console.log(error);
    });
}
